import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../styles/Register.css";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [registrado, setRegistrado] = useState(null);

  //Creamos la función de registrarNuevoUser
  const RegistrarNuevoUser = async () => {
    let myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: password,
      rol: "user",
    });

    const options = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const postData = await fetch(
      "https://backend-farmacias-ya.herokuapp.com/usuario/create-user",
      options
    );
    const res = postData.json();
    console.log(res);
    setRegistrado(true);
  };

  console.log(email);
  console.log(password);

  useEffect(() => {
    if (registrado) {
      navigate("/login");
    }
  }, [registrado]);

  return (
    <div className="container contenedor">
      <div className="row main">
        <div className="main-login main-center" id="title">
          <h5>Registro</h5>
          <form className="" method="post" action="#">
            <div className="form-group">
              <label for="username" className="cols-sm-2 control-label">
                Correo electronico
              </label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Ingrese su correo"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="password" className="cols-sm-2 control-label">
                Contraseña
              </label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="confirm" className="cols-sm-2 control-label">
                Confirmar contraseña
              </label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    name="confirm"
                    id="confirm"
                    placeholder="Confirm your Password"
                    value={confirmPass}
                    onChange={(e) => {
                      setConfirmPass(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group ">
              <button
                target="_blank"
                type="button"
                id="button"
                className="btn btn-primary btn-lg btn-block login-button"
                onClick={(e) => {
                  RegistrarNuevoUser(e.preventDefault());
                }}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
