import React from "react";
import "./adicionar.css";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  FormControl,
  FormGroup,
  Button,
  InputLabel,
  Input,
  TextareaAutosize,
} from "@material-ui/core";
import api from "../../services/backend";

require("typeface-quicksand");




function Required(){
  const style = {
    color: 'red'
  }

  return <span style={style}>*</span>
}





function AdicionarExemplar() {
  const initialState = {title: null, author: null, image_path: null, quantity: null, description: null, sale: null}
  const context = useContext(UserContext);
  const sessionToken = context.loadSession().accessToken
  const [state, setState] = useState(initialState);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setState({ ...state, [target.name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      headers: {
        authorization: 'BEARER ' + sessionToken,
      },
    };
    const validState = state;
    if(validState['author'] === null) delete validState['author']
    if(validState['image_path'] === null) delete validState['image_path']
    if(validState['quantity'] === null) delete validState['quantity']
    if(validState['description'] === null) delete validState['description']
    if(validState['sale'] === null) delete validState['sale']
    api.post("/books", validState, config).then(res=>{
      if (res.data['message']) alert(res.data['message']);
      else alert('Livro adicionado com sucesso');
      setState(initialState);
    });  
  }

  return (
    <div className="AdicionarEx">
      <div className="background">
        <div className="background2">
          <div className="container">
            <div className="base"></div>
            <div class="card border">
              <div class="card-body">
                <h1 class="card-title">Cadastro de Livro</h1>

                <label class="card-text"></label>

                <form>
                  <FormGroup method="POST">
                    <FormControl className="form">

                      <InputLabel htmlFor="title">Título do livro <Required/></InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="título da obra"
                        name="title"
                        value={state.title}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="author">Autor</InputLabel>
                      <Input
                        id="author"
                        aria-describedby="autor da obra"
                        name="author"
                        value={state.author}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="image_path">
                        Link para a capa do livro
                      </InputLabel>
                      <Input
                        id="image_path"
                        aria-describedby="link para a capa do livro"
                        name="image_path"
                        value={state.image_path}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="quantity">
                        Quantidade de exemplares disponíveis
                      </InputLabel>
                      <Input
                        id="quantity"
                        aria-describedby="quantidade de exemplares disponíveis"
                        name="quantity"
                        type="number"
                        value={state.quantity}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <InputLabel htmlFor="sale">
                        Está em promoção?
                      </InputLabel>
                      <Input
                        id="sale"
                        aria-describedby="quantidade de exemplares disponíveis"
                        name="sale"
                        type="number"
                        value={state.sale}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <label htmlFor="description" className="label">
                        Resumo da obra
                      </label>

                      <TextareaAutosize
                        id="description"
                        aria-describedby="resumo da obra"
                        name="descriprion"
                        type="text"
                        className="textarea"
                        rowsMin="3"
                        value={state.description}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </FormGroup>
                  <Button
                    color="secondary"
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Cadastrar{" "}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdicionarExemplar;
