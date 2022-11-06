import { useEffect, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {dataBase} from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { CartEmpty } from "../CartEmpty/CartEmpty";
import Swal from "sweetalert2";
import "../CartContainer/CartContainer.css"

export const CartContainer = () =>{
    const value = useContext(CartContext);
    const {productosCarrito, totalApagar, CantidadProd, eliminarItem, eliminarTodo} = value;
    const {compraId, setCompraId} = useState("");
    const {cantidad, setCantidad} = useState(true);

   


    const sendOrder= (e)=>{
        e.preventDefault();
        const compra = {
            buyer:{
                name: e.target[0].value,
                phone: e.target[1].value,
                mail: e.target[2].value
            },
            items: productosCarrito,
            total: totalApagar(),
        }
        const queryRef = collection(dataBase,"compras");
        addDoc(queryRef, compra).then((resultado)=>{
            Swal.fire({
                icon: 'success',
                title: 'número de seguimiento: ' + resultado.id,
                text: 'Muchas Gracias por confiar!',
              });
              eliminarTodo();                     
           })    
          
          
                
    }


   

    return(
        
        <div>
            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <p></p>
            {
                CantidadProd() === 0
                ?
                <CartEmpty/>
                
                :
                <div className="todoForm">
                    <div>
                   {                  
                    productosCarrito.map((producto)=>( 
                        <div className="productoSel">
                            <img src={producto.image} alt="prod" className="imgCartc"/>
                            <div>
                              <h3>{producto.name}</h3>
                              <p>cantidad: <span>{producto.quantity}</span></p>    
                              <p>precio total: $ <span> {producto.quantityPrice}</span></p>                                
                              <button onClick={()=>eliminarItem(producto.id)}>eliminar Producto</button>                
                            </div>
                        </div>         
                    ))                      
                   }
                   </div>
                <div className="formEnv">            
                   <h5>total a pagar: $   {totalApagar()}</h5>
                   <h5>cantidad de productos: {CantidadProd()}</h5>
                    <form onSubmit={sendOrder}>
                        <p> nombre</p><span><input type="text" placeholder="nombre" /></span>                   
                        <p>teléfono</p><span><input type="tel" placeholder="teléfono" /></span>                   
                        <p>correo </p><span><input type="email" placeholder="ingrese su email"/></span>         
                    </form>
                   <button type="submit">enviar orden</button>
                </div> 
            </div>
            }
            
        </div>
    )
}
