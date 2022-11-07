import "../NavBar/NavBar.css";
import ImagenLogo from "../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return (
      <>
      <nav className="NavBar">
          <ul className="lista">
            <Link className="linkNav" to="/">Inicio</Link>
            <NavLink className={({ isActive }) => isActive === true ? 'linkNav selected' : 'linkNav notSelected'}  to='/category/Pizza'>Pizza</NavLink>
            <NavLink className={({ isActive }) => isActive === true ? 'linkNav selected' : 'linkNav notSelected'} to="/category/Bebida">Bebida</NavLink>
            <NavLink className={({ isActive }) => isActive === true ? 'linkNav selected' : 'linkNav notSelected'} to="/category/DIP">DIP</NavLink>
            <NavLink className={({ isActive }) => isActive === true ? 'linkNav selected' : 'linkNav notSelected'} to="/category/Postre">Postre</NavLink>
          </ul>
          <img src={ImagenLogo} alt="logo" className="logo"/>
          <Link className="linkCart" to="/cart">
            <CartWidget/>
          </Link>
      </nav>
      </>
     
    );
  }