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
            <Link className="linkNav" to='/category/Pizza'>Pizza</Link>
            <Link className="linkNav" to="/category/Bebida">Bebida</Link>
            <Link className="linkNav" to="/category/DIP">DIP</Link>
            <Link className="linkNav" to="/category/Postre">Postre</Link>
          </ul>
          <img src={ImagenLogo} alt="logo" className="logo"/>
          <Link className="linkCart" to="/cart">
            <CartWidget/>
          </Link>
      </nav>
      </>
     
    );
  }