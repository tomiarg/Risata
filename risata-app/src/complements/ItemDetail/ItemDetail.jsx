export const ItemDetail = ({itemProduct}) =>{
    return(
        <div>
            <img src={itemProduct.image} alt={itemProduct.name}/>
            <h4>{itemProduct.name}</h4>
            <h5>{itemProduct.price}</h5>
        </div>
    )
}