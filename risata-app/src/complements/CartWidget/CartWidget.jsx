import ImagenWidget from "../assets/alien.png";
import "../CartWidget/CartWidget.css";


export const CartWidget = () => {
    return(
        <div className="carrito">
          <img src={ImagenWidget} alt="cart" />
          <span className="Contador">0</span>
        </div>
    )
}