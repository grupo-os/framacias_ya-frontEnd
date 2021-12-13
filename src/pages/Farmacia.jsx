import React, { useContext } from "react";
import { FarmaItems } from "../components/FarmaItems";
import { DataContext } from "../context/DataProvider";
import { Carrito } from "../components/Carrito";
import "../styles/Farmacia.css";
import "../styles/CarritoIcon.css";
import { Search } from "../components/Search";

export const Farmacia = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  //ABRE LA VENTANA DEL CARRITO...
  const toogleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <Search />

      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
      <Carrito />
      <div className="productos">
        <FarmaItems />
      </div>
    </>
  );
};
