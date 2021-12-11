import React, { useEffect, useState } from "react";
import IMG from "../assets/med01.png";
import "../styles/Spin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export const FarmaItems = () => {
  let navigate = useNavigate();
  const URL = "https://backend-farmacias-ya.herokuapp.com/productos/todos";
  const [items, setItems] = useState([]);

  const fetchMedicamentos = async () => {
    try {
      const peticion = await fetch(URL);
      const res = await peticion.json();
      setItems(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMedicamentos();
  }, []);

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
