import { ItemCount } from "../ItemCount/ItemCount"
import "../Item/Item.css"
import { Link } from "react-router-dom"


export const Item = ({item}) =>{
    return (
        <>        
            <div className="ContenedorItem" key={item.id}>
            <img className="imagenItem"src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>$ {item.price}</p>
            <ItemCount/>
            <button>agregar al carrito</button>
            <Link to= {`/item/${item.id}`}>
                <button>ver detalle</button>
            </Link>

            </div>
        </>

     )
}
