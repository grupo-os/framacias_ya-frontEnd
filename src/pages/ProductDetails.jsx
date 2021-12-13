import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataContext } from "../context/DataProvider";
import "../styles/ProductoDetails.css"

export const ProductDetails = () => {
  const value = useContext(DataContext);
  const [items] = value.items;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const [images, setImages] = useState("");
  const params = useParams();

  useEffect(() => {
    console.log("re render", params._id);
    items.forEach((producto) => {
      if (producto._id === parseInt(params._id)) {
        setDetalle(producto);
      }
    });
  }, [params._id, items]);

  console.log(items);


  return (
    <div className="detalles">
      <h2>{detalle.nombre_producto}</h2>
      <p className="price">${items.precio}</p>
      <button onClick={() => addCarrito(items._id)}>Añadir al carrito</button>
    </div>
  );
};
