import React from "react";
import { FarmaItems } from "../components/FarmaItems";
import "../styles/Farmacia.css";

export const Farmacia = () => {

  
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="d-flex col-xs-6 col-md-4">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          
        />
        <button class="btn btn-dark" type="submit">
          Search
        </button>
      </div>
      <div className="productos">
        <FarmaItems/>
      </div>
    </>
  );
};
