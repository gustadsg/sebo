import React, { useContext } from "react";
import "./cadastro.css";
import { useHistory } from "react-router-dom";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import api from '../../services/backend'
require("typeface-quicksand");

function Cadastro() {
  const history = useHistory();
  const [state, setstate] = useState();

  function handleChange(e) {
    const oldState = state;
    setstate({...oldState, [e.target.name]: e.target.value})
  }
  
  function passwordMatchesConfirmation(){
    if(!state['passwordConfirmation']) alert('Digite a confirmação da senha para prosseguir');
    return state['password'] === state['passwordConfirmation']
  }

  function handleSubmit(){
    if (!state) return alert('preencha o formulário para se cadastrar')
    if(!passwordMatchesConfirmation()) {
      alert('Senha e Confirmação são diferentes')
      return;
    }
    try {
      const data = state;
      delete data['passwordConfirmation']
      console.log(data)
      api.post('/users', data).then((res)=>{
        alert('Usuário criado com sucesso!');
      });
    } catch (err) {
      alert('Não foi possível cadastrar usuário.')
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
                        placeholder="Seu nome"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        plaintext
                        name='email'
                        size="sm"
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
                        onChange={handleChange}
                        placeholder="Senha"
                      />
                    </Form.Group>
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
