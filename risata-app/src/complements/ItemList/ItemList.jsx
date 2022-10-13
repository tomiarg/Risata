import { Item } from "../Item/Item";
import "../ItemList/ItemList.css"

export const ItemList = ({detalle}) =>{
    return(    
        <div className="ContenedorItems">
            {
                detalle.map(producto =>(
                    <Item key={producto.id} item={producto}/>
                ))
                }
        </div>

    )
}