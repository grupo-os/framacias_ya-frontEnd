import React from "react";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo2.png";

export const FormularioModificar = () => {
  let schemaProductos = yup.object().shape({
    nomFarmacia: yup.string().required(),
    nomProducto: yup.string().required(),
    nomProductoGen: yup.string().required(),
    codigoProducto: yup.number().required().positive(),
    imagen: yup.string().required(),
    descrip: yup.string().required(),
    precio: yup.number().required().positive(),
    descuento: yup.number().required().positive(),
    stock: yup.number().required().positive().integer()
  });

  const navigate = useNavigate();
  const [nomFarmacia, setNomFarmacia] = useState("");
  const [nomProducto, setNomProducto] = useState("");
  const [nomProductoGen, setNomProductoGen]=useState("");
  const [codigoProducto, setCodigoProducto]=useState("");
  const [imagen, setImagen] = useState("");
  const [descrip, setDescrip] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");
  const [habilitado, setHabilitado] = useState(false);
  //////////////////////////////

  useEffect(() => {
    schemaProductos
      .isValid({
        nomFarmacia,
        nomProducto,
        nomProductoGen,
        codigoProducto,
        imagen,
        descrip,
        precio,
        descuento,
        stock
      })
      .then((valid) => {
        valid ? setHabilitado(true) : setHabilitado(false);
      });
  }, [nomFarmacia, nomProducto, nomProductoGen, codigoProducto, imagen, descrip, precio, descuento, stock]);

  //////////////////////////////

  const enviarD = async () => {
    ////////////////////
    let myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      farmacia: nomFarmacia,
      nombre_producto: nomProducto,
      nombre_generico:nomProductoGen,
    codigo_producto:codigoProducto,
      img: imagen,
      descripcion: descrip,
      precio: precio,
      descuento: descuento,
      stock: stock
    });

    /* const options = {
      method: "PUT",
      //mode:'no-cors',
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }; */

    const postData = await fetch(
      "https://backend-farmacias-ya.herokuapp.com/producto/eliminar/"+_id/* , options */
    );
    setTimeout(function(){  navigate("/farmacia");; }, 4000);
    //const res = postData.json();
    //console.log(res);
    ////////////////////
  };



  return (
    <div>
      <main className="form-signin mx-auto w-25 my-5">
        <form>
          <div className="row mx-auto w-25 my-5">
          <img className="mb-4" src={logo} alt="" width="25" height="45" />
          </div>
          <div className="form-row mx-auto col-md-12">
          <h3>Formulario de productos</h3>
            <div className="form-group col-md-12">
              <label for="inputEmail4">Nombre de la farmacia</label>
              <input
                type="text"
                className="form-control"
                id="nombreF"
                placeholder="Farmacia"
                onChange={(e) => {
                  setNomFarmacia(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputPassword4">nombre del producto</label>
              <input
                type="text"
                className="form-control"
                id="producto"
                placeholder="Producto"
                onChange={(e) => {
                  setNomProducto(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputEmail4">Nombre generico</label>
              <input
                type="text"
                className="form-control"
                id="nombreGen"
                placeholder="nombre generico"
                onChange={(e) => {
                  setNomProductoGen(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputEmail4">codigo de producto</label>
              <input
                type="number"
                className="form-control"
                id="codProd"
                placeholder="codigo de producto"
                onChange={(e) => {
                  setCodigoProducto(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-md-12">
            <label for="inputAddress">link de imagen</label>
            <input
              type="text"
              className="form-control"
              id="imagen"
              placeholder="ingrese el link de la imagen"
              onChange={(e) => {
                setImagen(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-12">
            <label for="inputAddress2">descripcion</label>
            <input
              type="text"
              className="form-control"
              id="descrip"
              placeholder="detalles"
              onChange={(e) => {
                setDescrip(e.target.value);
              }}
            />
          </div>
            <div className="form-group col-md-12">
              <label for="inputCity">Precio</label>
              <input
                type="number"
                className="form-control"
                id="precio"
                onChange={(e) => {
                  setPrecio(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputZip">Descuento</label>
              <input
                type="number"
                className="form-control"
                id="decuento"
                onChange={(e) => {
                  setDescuento(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputZip">Stock</label>
              <input
                type="number"
                className="form-control"
                id="stock"
                onChange={(e) => {
                  setStock(e.target.value);
                }}
              />
            </div>
            <button
            type="submit"
            className="btn btn-warning col-md-12"
            disabled={habilitado ? false : true}
            onClick={(e) => {
              enviarD(e.preventDefault());
            }}
          >
            {habilitado ?"Enviar":"Deshabilitado"}
          </button>
          </div>
        </form>
      </main>
    </div>
  );
};
