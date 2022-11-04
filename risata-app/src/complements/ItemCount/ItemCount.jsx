import React, {useState} from "react";
import "../ItemCount/ItemCount.css"

export const ItemCount =({stock, initial, onAdd})=> {
    const [comprar, setComprar] = useState(initial);
    const incrementarCompra = ()=>{
      if(comprar<stock){
       setComprar(comprar + 1)
      }
    }
    const restarCompra=()=>{
      if(comprar>1){
        setComprar(comprar - 1)
      }
    }
    return(
        <>
        <div className="contenedorTodo">
           <div className="masMenos">
             <button disabled={stock ===0} onClick={restarCompra} className ="agregarRestar"> - </button>
             <div className="comprarComprar">{comprar}</div>      
             <button disabled={stock===0} onClick={incrementarCompra} className ="agregarRestar"> + </button>
           </div>
           <div>
             <button disabled={stock===0} onClick={()=>onAdd(comprar)} className ="agregarCarro">Agregar al carrito</button>
           </div>
        </div>
        </>  
     )
}     
