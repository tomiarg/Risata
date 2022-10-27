import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import "../ItemDetail/ItemDetail.css";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({itemProduct}) =>{
    const {addProduct} = useContext(CartContext);
    const agregarProducto= (quantity)=>{
        console.log(quantity);
        addProduct(itemProduct, quantity);
    }
    return(
        <div className="detalleProd">
            <div className="textoDetalle">
              <img src={itemProduct.image} alt={itemProduct.name} className="ImagenDetail"/>
              <h4>{itemProduct.name}</h4>
              <h5>{itemProduct.price}</h5>
              <ItemCount stock= {5} initial={1} onAdd={agregarProducto}/>
            </div>
            <div className="textoDetalle">
                <h4>detalle</h4>
                <h5>{itemProduct.description}</h5>
            </div>
        </div>

    )
}