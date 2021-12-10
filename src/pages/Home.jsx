import React from "react";
import "../styles/Home.css";
import "animate.css";
import { Link } from "react-router-dom";

export const Home = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text text-center animate__animated animate__fadeInLeft">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <Link
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  to="/register"
                >
                  Iniciar{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
