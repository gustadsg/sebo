import React from 'react'
import {BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Resumo from "./Pages/Resumo";
import NossosLivros from "./Pages/NossosLivros";
import AdicionarExemplar from "./Pages/AdicionarExemplar";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={userMenu} />   
            </Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </BrowserRouter> 
    );
}

function userMenu(){
    return (
        <Menu>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/home" component={() => <Redirect to="/login"/>} />

                <Route path="/nossoslivros" component={NossosLivros} />
                <Route path="/nossoslivros" component={() => <Redirect to="/login"/>} />

                <Route path="/resumo" component={Resumo} />
                <Route path="/resumo" component={() => <Redirect to="/login"/>} />

                <Route path="/login" component={Login} />
                <Route path="/login" component={() => <Redirect to="/login"/>} />

                <Route path="/cadastro" component={Cadastro} />
                <Route path="/cadastro" component={() => <Redirect to="/login"/>} />

                <Route path="/adicionarexemplar" component={AdicionarExemplar} />
                <Route path="/adicionarexemplar" component={() => <Redirect to="/login"/>} />

            </Switch>
        </Menu>
    );
}

export default Routes;