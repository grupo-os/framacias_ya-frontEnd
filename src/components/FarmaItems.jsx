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
        
        item.activo ? (
          <div className="producto">
          <Link to="#">
            <div className="producto__img">
              <img src={item.img} alt="img" />
            </div>
          </Link>
          <div className="producto__footer">
            <h1> {item.nombre_producto} </h1>
            <p>precio:</p>
            <p className="price">${item.precio}</p>
          </div>
          <div className="btn col-auto md-12">
            <button
              className="btn-warning"
              onClick={() => {
                navigate("/home");
              }}
            >
              modificar
            </button>
            <button
              className="btn-danger"
              onDoubleClick={() => {
                navigate("/home");
              }}
            >
              borrar
            </button>
          </div>
        </div>
        ):(null)
      );
    })

  ) : (
    <div class="loader">Loading...</div>
  );
};
