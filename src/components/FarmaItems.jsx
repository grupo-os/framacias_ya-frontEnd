import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../assets/med01.png";
import "../styles/Spin.css";

export const FarmaItems = () => {
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
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <Link to="#" className="a">
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
