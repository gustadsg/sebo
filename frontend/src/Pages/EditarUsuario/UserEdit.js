import { Checkbox } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import api from "../../services/backend";

export default function UserEdit(props) {
  const { loadSession, user, setSession } = useContext(UserContext);
  const [showAdmin, setShowAdmin] = useState("none");
  const [forms, setForms] = useState();

  useEffect(() => {
    const user = loadSession();
    if (user) setSession(user);
    if (user.userAdmin == 1) setShowAdmin("block");
  }, []);

  function handleChange(e) {
    e.preventDefault();
    const oldState = forms;
    let value = e.target["checked"] ? "1" : e.target.value;
    if (value == "on") value = "0";
    setForms({ ...oldState, [e.target.name]: value });
  }

  const config = {
    headers: {
      authorization: "BEARER " + user.accessToken,
    },
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!forms) return alert("preencha todo o formulário para alterar usuário");
    for (const key in forms) {
      if (forms[key] == null || forms[key] == "")
        return alert("preencha todo o formulário para alterar usuário");
    }

    try {
      const data = forms;
      api
        .put("/users/" + props.match.params.user_id, data, config)
        .then((res) => {
          return alert("Usuário alterado com sucesso!");
        })
        .catch((err) => alert("Não foi possível alterar usuário."));
    } catch (err) {
      return alert("Não foi possível alterar usuário.");
    }
    setForms();
  }

  return (
    <div style={{ marginTop: "10vh" }}>
      <form>
        <label>
          Nome
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <label>
          Senha
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <label style={{ display: showAdmin }}>
          admin
          <Checkbox onChange={handleChange} name="admin"></Checkbox>
        </label>
      </form>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
