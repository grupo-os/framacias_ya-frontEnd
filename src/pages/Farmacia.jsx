import React, { useContext } from "react";
import { FarmaItems } from "../components/FarmaItems";
import { DataContext } from "../context/DataProvider";
import "../styles/Farmacia.css";
import "../styles/CarritoIcon.css";
import { Carrito } from "../components/Carrito";

export const Farmacia = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  //ABRE LA VENTANA DEL CARRITO...
 /*  const toogleMenu = () => {
    setMenu(!menu);
    console.log(menu);
    //
    -26.184941, -58.182381
    //
  }; */

  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="d-flex col-xs-6 col-md-4">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Nombre del medicamento..."
          aria-label="Search"
        />
        <button class="btn btn-dark" type="submit">
          Search
        </button>
      </div>

     {/*  <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div> */}
     {/*  <Carrito /> */}
      <div className="productos">
        <FarmaItems />
      </div>
    </>
  );
};
