import ImagenWidget from "../assets/alien.png";
import "../CartWidget/CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {
    const {CantidadProd} = useContext(CartContext);
    return(
        <div className="carrito">
          <img src={ImagenWidget} alt="cart" />
          <span className="Contador">{CantidadProd()}</span>
        </div>
    )
}