import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Farmacia } from "../pages/Farmacia";
import { FormularioProductos } from "../pages/FormularioProductos";

export const Routing = () => {
    return (
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/farmacia" element={<Farmacia />} />
        <Route exact path="/formulario-productos" element={<FormularioProductos />} />
      </Routes>
    );
  };