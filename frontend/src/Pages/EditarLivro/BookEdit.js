import React, { useContext, useEffect, useState } from "react";
import api from "../../services/backend";
import { UserContext } from "../../context/UserContext";
import { TextareaAutosize } from "@material-ui/core";

export default function BookEdit(props) {
  // const initial
  const [forms, setForms] = useState("");
  const { loadSession, user, setSession } = useContext(UserContext);

  useEffect(() => {
    setForms(props.location.state.data);
  }, []);

  function handleChange(e) {
    e.preventDefault();
    const oldState = forms;

    setForms({ ...oldState, [e.target.name]: e.target.value });
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
        .put("/books/" + props.match.params.book_id, data, config)
        .then((res) => {
          return alert(res.data.message);
        })
        .catch((err) => alert("Não foi possível alterar usuário."));
    } catch (err) {
      return alert("Não foi possível alterar usuário.");
    }
    // setForms('');
  }

  return (
    <div style={{ marginTop: "10vh" }}>
      <div>
        <h2>Dados anteriores</h2>
      </div>
      <form>
        <label>
          Título
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={forms.title}
          ></input>
        </label>
        <label>
          Link para a capa
          <input
            type="text"
            name="image_path"
            onChange={handleChange}
            value={forms.image_path}
          ></input>
        </label>
        <label>
          Autor
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={forms.author}
          ></input>
        </label>
        <label>
          Descrição
          <TextareaAutosize
            rows="7"
            columns="60"
            width="400px"
            name="description"
            onChange={handleChange}
            value={forms.description}
          ></TextareaAutosize>
        </label>
        <label>
          Promoção
          <input
            type="number"
            name="sale"
            onChange={handleChange}
            value={forms.sale}
          ></input>
        </label>
        <label>
          Quantidade
          <input
            type="number"
            name="quantity"
            onChange={handleChange}
            value={forms.quantity}
          ></input>
        </label>
      </form>
      <button onClick={handleSubmit}>Editar</button>
    </div>
  );
}
