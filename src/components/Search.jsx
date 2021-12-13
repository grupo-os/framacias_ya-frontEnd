import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import "../styles/Search.css";

export const Search = () => {
  
  const value = useContext(DataContext)

  const busqueda = value.busqueda
  const handleChange = value.handleChange
  

  return (
    <div className="containerInput">
      <input
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Busqueda por nombre o empresa..."
        onChange={handleChange}
      />
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
