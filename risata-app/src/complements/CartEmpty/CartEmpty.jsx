import { Link } from "react-router-dom";
import "../CartEmpty/CartEmpty.css"

export const CartEmpty = () =>{
    return(
        <>
        <div className="Aliens">
            <p className="pWhite">ok man, we gotcha, this is the deal you just follow this Link: <span><Link className="linkBab" to="/"> Inicio</Link></span> and buy something, or we have to visit you right now.               
            </p>
        </div>
         
        </>
    )
}