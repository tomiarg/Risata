import {NavBar} from "./complements/NavBar/NavBar";
import { ItemListContainer } from "./complements/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./complements/ItemDetailContainer/ItemDetailContainer";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <NavBar/>    
       <Routes>
        <Route path="/" element={<ItemListContainer/>}/>  
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
       </Routes>
       <footer>datos legales</footer>
     </div>
    </BrowserRouter>
  );
}

export default App;
