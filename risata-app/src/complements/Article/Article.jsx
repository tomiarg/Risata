import RisataRemove from "../assets/risataRemove.png"
import "../Article/Article.css"

export const Article = () =>{
    return (
        <article className="articleFlex">
            <img src={RisataRemove} alt="pizza" className="imagenArticle"/>
            <p>hola</p>
            <p>nosotros somos</p>
            <p>la pizzería extraterrestre</p>
            <p>tenes gansa de conocernos?</p>
            <p>los marcianos nos eligieron por</p>
            <a href="">esto</a>
        </article>
    )
}