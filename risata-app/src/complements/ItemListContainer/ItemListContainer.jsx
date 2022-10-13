import { ItemList } from "../ItemList/ItemList";
import { baseDatos } from "../baseDatos/baseDatos";
import "../ItemListContainer/ItemListContainer.css";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";


export const ItemListContainer = () =>{
    const {categoryId} = useParams();

    const [productos, setProductos] = useState([]);


    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(baseDatos)            
        }, 2000);
        
    })
    useEffect(()=>{
        promesa.then((resultado=>{
            if(categoryId){
                const productsFiltered = resultado.filter(elm=>elm.categoria === categoryId);
                setProductos(productsFiltered)

            }else{
                setProductos(resultado)

            }
        }))
    },[categoryId])
    return(
    
         <div className="ItemContainer">
                <ItemList detalle={productos}/>         
        </div>

    )
    
}