import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import UserPrivate from "./routes/UserPrivate";
import AdminPrivate from "./routes/AdminPrivate";

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Resumo from "./Pages/Resumo";
import NossosLivros from "./Pages/NossosLivros";
import AdicionarExemplar from "./Pages/AdicionarExemplar";
import UserEdit from "./Pages/EditarUsuario/";
import BookEdit from "./Pages/EditarLivro";
import Wishlist from "./Pages/ListaDesejos";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={UserMenu} />
      </Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </BrowserRouter>
  );
}

function UserMenu() {
  return (
    <Menu>
      <Switch>
        <Route path="/home" component={Home} />

        <UserPrivate path="/user/:user_id" component={UserEdit} />

        <UserPrivate path="/desejos" component={Wishlist} />

        <AdminPrivate path="/editBook/:book_id" component={BookEdit} />

        <Route path="/nossoslivros" component={NossosLivros} />

        <Route path="/resumo" component={Resumo} />

        <Route path="/login" component={Login} />

        <Route path="/cadastro" component={Cadastro} />

        <AdminPrivate path="/adicionarexemplar" component={AdicionarExemplar} />
      </Switch>
    </Menu>
  );
}

export default Routes;
