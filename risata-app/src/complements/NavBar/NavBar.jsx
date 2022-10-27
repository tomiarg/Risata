import "../NavBar/NavBar.css";
import ImagenLogo from "../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
      <>
      <nav className="NavBar">
          <ul className="lista">
            <Link className="linkNav" to="/">Inicio</Link>
            <Link className="linkNav" to="/contacto">contacto</Link>
            <Link className="linkNav" to="/productos">productos</Link>
          </ul>
          <img src={ImagenLogo} alt="logo" className="logo"/>
          <Link className="linkCart" to="/cart">
            <CartWidget/>
          </Link>
      </nav>
      </>
     
    );
  }