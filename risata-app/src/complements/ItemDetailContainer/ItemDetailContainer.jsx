import { useParams } from "react-router-dom"
import { baseDatos } from "../baseDatos/baseDatos";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [item, setItem] = useState([]);

    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(baseDatos)            
        }, 2000);        
    })
    useEffect(()=>{
       const getProducto = async()=>{
          const productos = await promesa;
          const producto = productos.find(elem=>elem.id === parseInt(id));
          setItem(producto);
       }
       getProducto();
    },[id])

    return (
        <div>
            <ItemDetail itemProduct ={item}/>
        </div>

    )

}