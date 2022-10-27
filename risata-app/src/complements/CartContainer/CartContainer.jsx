import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer = () =>{
    const value = useContext(CartContext);
    const {productosCarrito, totalApagar, eliminarItem } = value;
    return(
        <div>
            <p>página de carrito</p>
            <div>
                {
                    productosCarrito.map((producto)=>( 
                        <div>
                            <h3>{producto.name}</h3>
                            <p>{producto.quantity}</p>   
                            <p>{producto.price * producto.quantity}</p>     
                            <p>{producto.quantityPrice}</p>    
                            <button onClick={()=>eliminarItem(producto.id)}>eliminar Producto</button>                
                        </div>         
                    ))                      
                }
            </div>
            <h3>{totalApagar()}</h3>
        </div>
    )
}