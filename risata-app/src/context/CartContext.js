import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider =({children}) =>{
    const [productosCarrito, setProductosCarrito] = useState([]);

    const IsInCart = (id) =>{
        const ProductExist = productosCarrito.some((element) => element.id === id);
        return ProductExist;
    }

    const addProduct = (itemProduct, quantity) =>{
        const productosCarritoCopy = [...productosCarrito];

        if(IsInCart(itemProduct.id)){
            const PositionProd = productosCarritoCopy.findIndex((element)=> element.id === itemProduct.id);
            productosCarritoCopy[PositionProd].quantity = productosCarritoCopy[PositionProd].quantity + quantity;
            productosCarritoCopy[PositionProd].quantityPrice = productosCarritoCopy[PositionProd].quantity * productosCarritoCopy[PositionProd].price;
            setProductosCarrito(productosCarritoCopy);           

        }else{
            const newProduct= {
                ...itemProduct,
                quantity:quantity,
                quantityPrice:quantity*itemProduct.price
            };
            productosCarritoCopy.push(newProduct);
            setProductosCarrito(productosCarritoCopy);
        }

    }
    const totalApagar = () =>{
        const precioTotal = productosCarrito.reduce((acc,curr)=> acc+curr.quantityPrice, 0);
        return precioTotal;
    }
    const CantidadProd = () => {
        const ProductosElegidos = productosCarrito.reduce((acc,curr)=> acc+curr.quantity,0);
        return ProductosElegidos;
    }
    const eliminarItem = (id) => {
        const borrarProd = productosCarrito.filter((element)=> element.id !==id);
        setProductosCarrito(borrarProd)
    }
    const eliminarTodo = () => setProductosCarrito([]);

    return(
        <CartContext.Provider value={{productosCarrito, addProduct, totalApagar, CantidadProd, eliminarItem,eliminarTodo}}>
            {children}
        </CartContext.Provider>
    )

}