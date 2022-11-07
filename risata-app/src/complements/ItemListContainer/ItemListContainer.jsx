import { ItemList } from "../ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Article } from "../Article/Article";
import { dataBase } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


export const ItemListContainer = () =>{
    const {categoriaId} = useParams();

    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const queryRef = categoriaId ? query(collection(dataBase,"items"), where("category", "==", categoriaId)) : collection(dataBase,"items")
        getDocs(queryRef).then((response)=>{
            const result = response.docs;
            const docs = result.map(doc=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
            })
            setProductos(docs);
            setLoading(false);
        })  
    },[categoriaId])
    return(
       <>
          <main className="mainStyle"/>
          <Article/>
          <div className="ItemContainer">
            {
                loading ? 
                <div class="spinner"></div>
                :
                <ItemList detalle={productos}/>  
            }
                       
          </div>
       </>

    )
    
}