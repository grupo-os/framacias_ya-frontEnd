import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Farmacia } from "../pages/Farmacia";
import { FormularioProductos } from "../pages/FormularioProductos";
import { useState, useEffect, createContext, useContext } from "react";
import JsonData from "../data/data.json";
import { ProductDetails } from "../pages/ProductDetails";
import { FarmaciaReg } from "../pages/FarmaciaReg";
import React from "react";
import PrivateRoute from "../utils/Reducer";
import { Maps } from "./Maps";

export const UserContext = createContext();

export const Routing = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home data={landingPageData.Header} />} />
      <Route exact path="/post" element={<Post />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <PrivateRoute
        exact
        path="/formulario-productos"
        element={<FormularioProductos />}
      />
      <Route exact path="/farmacia" element={<Farmacia />} />
      <Route exact path="/producto/:_id" element={<ProductDetails />} />
      <Route exact path="/register/farmacia" element={<FarmaciaReg />} />
      <Route exact path="/mapa" element={<Maps />} />
      
    </Routes>
  );

  // if (state) {
  //   return (
  //     <Routes>
  //       <Route
  //         exact
  //         path="/"
  //         element={<Home data={landingPageData.Header} />}
  //       />
  //       <Route exact path="/post" element={<Post />} />
  //       <Route exact path="/login" element={<Login />} />
  //       <Route exact path="/register" element={<Register />} />
  //     </Routes>
  //   )
  // }
  // if (!state) {
  //   return (
  //     <Routes>
  //       <Route
  //         exact
  //         path="/formulario-productos"
  //         element={<FormularioProductos />}
  //       />
  //       <Route exact path="/farmacia" element={<Farmacia />} />
  //       <Route exact path="/producto/:_id" element={<ProductDetails />} />
  //       <Route exact path="/register/farmacia" element={<FarmaciaReg />} />
  //     </Routes>
  //   );
  // }
};
