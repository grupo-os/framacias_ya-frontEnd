import React, { useEffect } from "react";
import { DataContext } from "../context/DataProvider.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../styles/Spin.css";
import "animate.css";
import { useState } from "react";

export const FarmaItems = () => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const fetchMedicamentos = value.fetchMedicamentos;
  const [itemBuscado] = value.itemBuscado;
  // const [items] = value.items;
  // const [meds] = value.meds;

  useEffect(() => {
    fetchMedicamentos();
  }, []);

  return itemBuscado.length > 0 ? (
    itemBuscado.map((item) => {
      return (
        <div className="producto animate__animated animate__fadeInUp">
          <div className="producto__img">
            <img src={item.img} alt="img" />
          </div>
          <div className="producto__footer">
            <h1> {item.nombre_producto} </h1>
            <p>precio:</p>
            <p className="price">${item.precio}</p>
          </div>
          <div className="buttom">
            <button className="btn" onClick={() => addCarrito(item._id)}>
              Añadir al carrito
            </button>
            <div>
              <Link to={`/producto/${item._id}`} className="a">
                Vista
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div class="loader">Loading...</div>
  );
};
