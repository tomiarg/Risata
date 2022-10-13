import "../NavBar/NavBar.css";
import ImagenLogo from "../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
      <>
      <nav className="NavBar">
          <ul className="lista">
            <Link to="/">Inicio</Link>
            <Link to="/contacto">contacto</Link>
            <Link to="/productos">productos</Link>
          </ul>
          <img src={ImagenLogo} alt="logo" className="logo"/>
          <CartWidget/>
      </nav>
      </>
     
    );
  }