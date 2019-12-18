import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Produto from "../pages/Produto";
import Relatorio from "../pages/Relatorios";
import Home from "../pages/Home";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cadastro" component={Cadastro} isPrivate />
        <Route path="/Produto" component={Produto} isPrivate />
        <Route path="/Relatorio" component={Relatorio} isPrivate />
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
