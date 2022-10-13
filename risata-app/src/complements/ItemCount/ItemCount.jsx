import React, {useState} from "react";

export const ItemCount =()=> {
    const [comprar, setComprar] = useState(0);
    const incrementarCompra = ()=>{
       setComprar(comprar + 1)
    }
    const restarCompra=()=>{
        setComprar(comprar - 1)
    }
    return(
        <>
        <div>
           <button onClick={restarCompra}> - </button>
           <span>{comprar}</span>      
           <button onClick={incrementarCompra}> + </button>
        </div>
        </>  
     )
}     
