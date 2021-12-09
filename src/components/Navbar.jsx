import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo2.png"

export function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.nav}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${styles.logo}`} to="/">
          <img src={logo} alt="logo"  width="50"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Inicio{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post">
                FarMaps{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formulario-productos">
                FormularioProductos{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/farmacia">
                Farmacia{" "}
              </Link>
            </li>
          </ul>
            <Link className="btn btn-secondary mx-2" type="submit" to="/login">
                Iniciar sesión{" "}
            </Link>
            <Link className="btn btn-secondary mx-2" type="submit" to="/register">
                Registrarse{" "}
            </Link>
        </div>
      </div>
    </nav>
  );
}
