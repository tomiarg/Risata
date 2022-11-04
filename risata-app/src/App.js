import {NavBar} from "./complements/NavBar/NavBar";
import { ItemListContainer } from "./complements/ItemListContainer/ItemListContainer";
import { CartContainer } from "./complements/CartContainer/CartContainer";
import { ItemDetailContainer } from "./complements/ItemDetailContainer/ItemDetailContainer";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from "./context/CartContext";
import { Footer } from "./complements/Footer/Footer";



function App() {
  return (
    <CartProvider>
     <BrowserRouter>
      <div className="App">
        <NavBar/>    
        <Routes>
         <Route path="/" element={<ItemListContainer/>}/>  
         <Route path="/category/:categoriaId" element= {<ItemListContainer/>}/>
         <Route path="/item/:id" element={<ItemDetailContainer/>}/>
         <Route path= "/cart" element={<CartContainer/>}/>
        </Routes>
        <Footer/>
      </div>
     </BrowserRouter>
    </CartProvider>
  );
}

export default App;
