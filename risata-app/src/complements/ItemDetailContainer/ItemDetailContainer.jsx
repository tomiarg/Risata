import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { dataBase } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(()=>{
       const getProducto = async()=>{
          const queryRef = doc(dataBase, "items", id)
          const response = await getDoc(queryRef);
          const newDoc = {
            ...response.data(),
            id:response.id
          }
          setItem(newDoc)

       }
       getProducto();
    },[id])

    return (
        <div>
            <ItemDetail itemProduct ={item}/>
        </div>

    )

}