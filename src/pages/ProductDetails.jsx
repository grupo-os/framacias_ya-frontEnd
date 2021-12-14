import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { Link, useParams } from "react-router-dom";
import { Carrito } from "../components/Carrito";
import "../styles/ProductoDetails.css";
import "../styles/Spin.css";

export const ProductDetails = () => {
  const URL = "https://backend-farmacias-ya.herokuapp.com/productos/todos";
  const value = useContext(DataContext);
  const [items, setItems] = useState([]);
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const params = useParams();

  const fetchMedicamentos = async () => {
    try {
      const peticion = await fetch(URL);
      const res = await peticion.json();
      setItems(res);

      console.log(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("re render", params._id);

    items.forEach((item) => {
      if (item.id === params.id) {
        setDetalle(item);
      }
    });
  }, [params._id, items]);

  console.log(items.nombre_producto);
  useEffect(() => {
    fetchMedicamentos();
  }, []);

  return items.length > 0 ? (
    <>
      <Carrito />

      <div className="detalles">
        <img src={detalle.img} alt="img" />
        <h2>{detalle.nombre_producto}</h2>
        <p className="price">${detalle.precio}</p>
        <div className="buttom">
          <button onClick={() => addCarrito(detalle._id)}>
            Añadir al carrito
          </button>
          <button className="mapa">
            <Link to="/mapa" className="map">Ver ubicación de la farmacia</Link>
          </button>
        </div>

        <div className="description">
          <p>
            <b>Farmacia: </b> {detalle.farmacia}
          </p>
          <p>
            <b>Nombre genérico: </b> {detalle.nombre_generico}
          </p>
          <p>
            <b>Descripción: </b> Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Est rem, aut quis nam sunt repellat reprehenderit.
            Impedit veritatis enim deserunt.
          </p>
        </div>
      </div>
    </>
  ) : (
    <div class="loader">Loading...</div>
  );
};
