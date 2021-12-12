import React, { useEffect } from "react";
import { DataContext } from "../context/DataProvider.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../styles/Spin.css";
import "animate.css";
import { useNavigate } from "react-router";

export const FarmaItems = () => {
  const navigate = useNavigate();
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  const fetchMedicamentos = value.fetchMedicamentos;
  const [items] = value.items;

  useEffect(() => {
    fetchMedicamentos();
  }, []);
  console.log(value.items._id);
  return items.length > 0 ? (
    items.map((item) => {
      return (
        items.activo ?
        (<div className="producto animate__animated animate__fadeInUp">
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
              <Link to="#" className="a">
                Vista
              </Link>
            </div>
          </div>
        </div>) : null
      );
    })
  ) : (
    <div class="loader">Loading...</div>
  );
};
