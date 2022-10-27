import React, {useState} from "react";

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
        <div>
           <button disabled={stock ===0} onClick={restarCompra}> - </button>
           <span>{comprar}</span>      
           <button disabled={stock===0} onClick={incrementarCompra}> + </button>
           <button disabled={stock===0} onClick={()=>onAdd(comprar)}>Agregar al carrito</button>
        </div>
        </>  
     )
}     
