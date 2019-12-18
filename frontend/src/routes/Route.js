import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isTokenExpired, logout } from "../services/auth";
export default function RouterWeapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = !!localStorage.getItem("@CESTA/token");
  console.log(signed);
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/Home" />;
  }
  if (isTokenExpired()) {
    logout();
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
}
