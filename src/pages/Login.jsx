import "../styles/Login.css";
import React, { useState } from "react";
import loginServicios from "../API/consultaLogin";

export const Login = () => {
  //Creamos un manejador de estado para los mensajes...
  const [errorMessage, setErrorMessage] = useState(null);

  //Creamos lo manejadores de estado.
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  if (localStorage.getItem(null)) {
    setUser("");
    console.log(user + " se limipo ");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //le pasamos las credenciales
      const user = await loginServicios.buscador({
        email,
        password,
      });

      //guardarmos la informacion en el localStorage
      window.localStorage.setItem(
        //Lo guardamos comos string
        "loggedUser",
        JSON.stringify(user)
      );
      //Guardamos la informacion
      setUser(user);

      //reseteamos los estados
      setemail("");
      setPassword("");
      //Redireccionamos a la ruta home
      window.location.href = "/farmacia";

      setErrorMessage("Sesion Iniciada");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } catch (e) {
      //Si hay error se envia un mensaje que dura 3s.
      setErrorMessage("Usuario o Contraseña incorrecta");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      console.log("Error", e);
    }
    console.log(email);
    console.log(password);
  };
  return (
    <div class="login-form" onSubmit={handleSubmit}>
      <div class="cotainer">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form class="card" onSubmit={handleSubmit}>
              <div class="card-header">
                <h5>Iniciar Sesión</h5>
              </div>
              <div class="card-body">
                <div class="form-group row">
                  <label
                    for="email_address"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    <b>Correo electrónico</b>
                  </label>
                  <div class="col-md-6">
                    <input
                      type="text"
                      id="email_address"
                      class="form-control"
                      name="email-address"
                      required
                      autofocus
                      value={email}
                      onChange={({ target }) => setemail(target.value)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="password"
                    class="col-md-4 col-form-label text-md-right"
                  >
                    <b>Contraseña</b>
                  </label>
                  <div class="col-md-6">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      name="password"
                      required
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" name="remember" /> Remember Me
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                  <a href="#" class="btn btn-link">
                    Forgot Your Password?
                  </a>
                  <div>
                    <br />
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
