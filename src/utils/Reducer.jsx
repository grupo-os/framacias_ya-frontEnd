import React from "react";
import { Navigate, Route } from "react-router";

const usuarioT = localStorage.getItem("loggedUser");
//const user = {id: 1, username: "lenny123"}

export default function PrivateRoute({ element: Element, ...rest }) {
  return (
    <Route {...rest}>{usuarioT ? <Navigate to="/" /> : <Element />}</Route>
  );
}
