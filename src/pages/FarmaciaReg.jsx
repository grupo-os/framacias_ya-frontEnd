import React from "react";

export const FarmaciaReg = () => {
  return (
    <div className="container">
      <h1 className="text-center">Datos de la farmacia</h1>
      <br />
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Nombre del establecimiento
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            email
          </label>
          <input type="email" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            C.U.I.L.
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Telefono
          </label>
          <input type="email" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Direccion
          </label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
          />
        </div>
        
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
