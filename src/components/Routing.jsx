import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Farmacia } from "../pages/Farmacia";
import { FormularioProductos } from "../pages/FormularioProductos";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import { FormularioModificado } from "../pages/FormularioModificar";
import { NavItem } from "react-bootstrap";

export const Routing = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home data={landingPageData.Header} />}
      />
      <Route
        exact
        path="/formulario-modificado"
        element={<FormularioModificado />}
      />
      <Route exact path="/post" element={<Post />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/farmacia" element={<Farmacia />} />
      <Route
        exact
        path="/formulario-productos"
        element={<FormularioProductos />}
      />
    </Routes>
  );
};
