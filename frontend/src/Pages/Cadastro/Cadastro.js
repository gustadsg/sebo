import React, { useContext, useEffect } from "react";
import "./cadastro.css";
import { useHistory } from "react-router-dom";
import { Form, FormCheck } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import api from "../../services/backend";
import { UserContext } from "../../context/UserContext";
require("typeface-quicksand");

function Cadastro() {
  const history = useHistory();
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const [state, setstate] = useState(initialState);
  const [display, setDisplay] = useState('none')
  const { loadSession } = useContext(UserContext);
  const [token, setToken] = useState()

  useEffect(() => {
    const {userAdmin} = loadSession()
    if (userAdmin == 1) setDisplay('block')
  }, []);

  function handleChange(e) {
    const oldState = state;
    let value = e.target['checked'] ? "1" : e.target.value
    if(value == 'on') value = "0"
    setstate({ ...oldState, [e.target.name]: value });
  }

  function passwordMatchesConfirmation() {
    return state["password"] === state["passwordConfirmation"];
  }

  function handleSubmit() {
    if (!state) return alert("preencha todo o formulário para criar uma conta");
    for (const key in state) {
      if (state[key] == null || state[key] == "")
        return alert("preencha todo o formulário para criar uma conta");
    }
    if (!passwordMatchesConfirmation())
      return alert("Senha e Confirmação são diferentes");

    try {
      const data = state;
      delete data["passwordConfirmation"];
      api
        .post("/users", data)
        .then((res) => {
          return alert("Usuário criado com sucesso!");
        })
        .catch((err) => alert("Não foi possível cadastrar usuário."));
    } catch (err) {
      return alert("Não foi possível cadastrar usuário.");
    }
  }

  return (
    <div className="Cadastro">
      <div className="button">
        <Button className="butao" variant="danger" onClick={handleSubmit}>
          Cadastrar!{" "}
        </Button>
      </div>
      <div className="background">
        <div className="background2">
          <div className="container">
            <div className="base">
              <h1 className="textbook">
                Comece sua história no Sebo Hai Kai!
                <br />
              </h1>

              <div className="containbook">
                <img
                  className="livrao"
                  src="/images/LivroFinal2Cadastro.jpg"
                ></img>
                <div className="dados1aux">
                  <Form className="dados1">
                    <Form.Group controlId="name">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        plaintext
                        name="name"
                        size="sm"
                        required
                        placeholder="Seu nome"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        plaintext
                        name="email"
                        size="sm"
                        required
                        onChange={handleChange}
                        placeholder="name@example.com.br"
                      />
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        plaintext
                        size="sm"
                        required
                        onChange={handleChange}
                        placeholder="Senha"
                      />
                    </Form.Group>

                    <Form.Group controlId="passwordConfirmation">
                      <Form.Label>Confirme sua senha</Form.Label>
                      <Form.Control
                        type="password"
                        name="passwordConfirmation"
                        plaintext
                        size="sm"
                        required
                        onChange={handleChange}
                        placeholder="Senha"
                      />
                    </Form.Group>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Admin"
                      name='admin'
                      style={{display: display}}
                      onClick={handleChange}
                    ></Form.Check>
                  </Form>
                </div>
                <div className="dados2aux">
                  <Form className="dados2">
                    <Form.Group controlId="tcontato">
                      <Form.Label>Telefone de contato</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="31992404607"
                      />
                    </Form.Group>

                    <Form.Group controlId="lfav">
                      <Form.Label>Livro favorito</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="A garota no trem"
                      />
                    </Form.Group>

                    <Form.Group controlId="CEP">
                      <Form.Label>CEP</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="00000-000"
                      />
                    </Form.Group>

                    <Form.Group controlId="endereço">
                      <Form.Label>Endereço</Form.Label>
                      <Form.Control
                        plaintext
                        size="sm"
                        placeholder="Rua das flores, 100"
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="posicaocaneta">
                  <img
                    alt="imagem"
                    src="/images/canetahaikai.png"
                    className="caneta"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
