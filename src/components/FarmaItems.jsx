import React, { useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider.jsx";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import "../styles/Spin.css";
import "animate.css";
import { axios } from "axios";
import { useNavigate } from 'react-router-dom';



export const FarmaItems = () => {
  const value = useContext(DataContext);
 // const addCarrito = value.addCarrito;
  const fetchMedicamentos = value.fetchMedicamentos;
  const [items] = value.items;
/*   const {id, nombre_producto} = useParams();
  console.log(id)
  console.log(nombre_producto) */
 // const navigate = useNavigate();
////////////////////////////////7
// Ejemplo implementando el metodo POST:
async function postData(url = 'https://backend-farmacias-ya.herokuapp.com/producto/eliminar/', data) {


  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  restart()
  alert("elemento borrado")
  return response.json(); // parses JSON response into native JavaScript objects
}


////////////////////////////////7

////////////////////////////////
/* curl --location --request PUT 'https://backend-farmacias-ya.herokuapp.com/producto/eliminar/61b41221bc4fff45c7c8d594' */
////////////////////////////////


const restart = ()=>{
  setTimeout(function(){window.location.href="/farmacia"}, 2000);
}

  useEffect(() => {
    fetchMedicamentos();
    
  }, []);
  
  return items.length > 0 ? (
    items.map((item) => {
      return (
        item.activo ? (
          <div className="producto animate__animated animate__fadeInUp">
          <div className="producto__img">
            <img src={item.img} alt="img" />
          </div>
          <div className="producto__footer">
            <h1> {item.nombre_producto} </h1>
            <p>precio:</p>

            <p className="price">${item.precio}</p>
          </div>
          <div className="buttom">
            <button className="btn" onDoubleClick={() =>{postData("https://backend-farmacias-ya.herokuapp.com/producto/eliminar/"+item._id)}}>
            
              Borrar
            </button>
            <div>
              <Link to={{pathname:'/formulariomodificado/'+item._id+'/'+item.nombre_producto}} className="a">
                Modificar
              </Link>
              {/* <Link  to ={{pathname:'/detalle/' + item._id}} class="btn-leer-mas" >Leer Más</Link> */}
            </div>
          </div>
        </div>
        ):null
      );
    })
  ) : (
    <div class="loader">Loading...</div>
  );
};