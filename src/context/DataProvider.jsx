import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const URL = "https://backend-farmacias-ya.herokuapp.com/productos/todos";
  const [carrito, setCarrito] = useState([]);
  const [menu, setMenu] = useState(false);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  //OBTENER LOS DATOS DEL BACK-END...
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

  //AÑADE UN ARTICULO AL CARRITO...
  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = items.filter((producto) => {
        return producto._id === id;
      });
      setCarrito([...carrito, ...data]);

      console.log(carrito);
      console.log(data);
    } else {
      alert("El producto se ha añadido al carrito");
    }
  };

  //RECUPERA LOS DATOS DE LOCAL STORAGE
  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);

  //GUARDA LOS DATOS EN LOCAL STORAGE...
  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);

  //SE SUMAN LOS PRECIOS DE LOS ARTICULOS DEL CARRITO...
  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.precio * item.cantidad;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  //ALAMCENAMOS LOS DATOS Y FUNCIONES A UTILIZAR...
  const value = {
    items: [items],
    carrito: [carrito, setCarrito],
    addCarrito: addCarrito,
    total: [total, setTotal],
    menu: [menu, setMenu],
    fetchMedicamentos : fetchMedicamentos
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};