import margarita from "../assets/productos/margarita.jpeg";
import laroja from "../assets/productos/laroja.jpeg";
import Diavola from "../assets/productos/Diavola.jpeg";
import Fugazza from "../assets/productos/Fugazza.jpeg";
import JyQ from "../assets/productos/JyQ.jpeg";
import Napo from "../assets/productos/Napo.jpeg";
import Nuestra from "../assets/productos/Nuestra.jpeg";
import Garbanzo from "../assets/productos/garbanzo.jpeg";
import Pesto from "../assets/productos/pesto.jpeg";
import Berenjena from "../assets/productos/berenjena.jpeg";
import Picante from "../assets/productos/picante.jpeg";
import AndesIpa from "../assets/productos/andesIpa.JPG";
import AndesRoja from "../assets/productos/andesRoja.JPG";
import AndesRubia from "../assets/productos/andesRubia.JPG";
import AwaManzana from "../assets/productos/awaFrutManzana.JPG";
import AwaNaranja from "../assets/productos/awaFrutNaranja.JPG";
import AwaPomelo from "../assets/productos/awaFrutPomelo.JPG";
import Mirinda from "../assets/productos/mirindaLata.JPG";
import PatagoniaAmber from "../assets/productos/patagoniaAmberLager.JPG";
import Patagonia24 from "../assets/productos/patagoniaLata.JPG";
import PatagoniaPilsener from "../assets/productos/patagoniaPilsener.JPG";
import PepsiBlack from "../assets/productos/pepsiBlackLata.JPG";
import PepsiLata from "../assets/productos/pepsiLata.JPG";
import SevenUp from "../assets/productos/sevenUpLata.JPG";
import SevenFree from "../assets/productos/sevenUpFreeLata.JPG";
import StellaArtois from "../assets/productos/stelaArtois.JPG";
import StellaNoire from "../assets/productos/stellaNoire.JPG";
import FraNuiCh from "../assets/productos/fraNuiChocolate.JPG";
import FraNuiAm from "../assets/productos/fraNuiSemiAmargo.JPG";

//import { createPath } from "react-router-dom";

export const baseDatos = [
    {id: 1, name: "La Roja", price: 800, image: laroja, description: "Salsa de tomate italiani, ajo, albahca, orégano orgánico y aceite de oliva extra virgen", categoria: "Pizza"},
    {id: 2, name: "Margarita", price: 850, image: margarita, description: "Mozzarella, salsa de tomate italiano, albahca fresca y aceite de oliva extra virgen", categoria: "Pizza"},
    {id: 3, name: "Fugazza", price: 850, image: Fugazza, description: "Mozzarella, cebolla morada y blanca, salsa de tomate italiano, orégano y aceite de oliva extra virgen", categoria: "Pizza"},
    {id: 4, name: "Napolitana", price: 900, image: Napo, description: "Mozzarella, tomates cherry, ajo, albahaca fresca, salsa de tomate italiano y aceite de oliva extra virgen", categoria: "Pizza"},
    {id: 5, name: "La Nuestra", price: 950, image: Nuestra, description: "Mozzarella, provolone, panceta ahumada, verdeo, salsa de tomate italiano y aceite de oliva extra virgen", categoria: "Pizza"},
    {id: 6, name: "Jamón y Queso", price: 950, image: JyQ, description: "Mozzarella, jamon cocido, provolone, salsa de tomate italiano, orégano orgánco y acete de oliva extra virgen", categoria: "Pizza"},
    {id: 7, name: "Diavola", price: 900, image: Diavola, description: "Mozzarella, salsa de tomate italiano, salame de Oncativo, ají y aceite de oliva extra virgen",  categoria: "Pizza"},
    {id: 8, name: "Fugazza Vegan", price: 800, image: Fugazza, categoria: "Pizza"},
    {id: 9, name: "Napolitana Vegan", price: 850, image: Napo, categoria: "Pizza"},
    {id: 10, name: "Margarita Vegan", price: 750, image: margarita, categoria: "Pizza"},
    {id: 11, name: "Pepsi", price: 100, image: margarita, categoria: "Bebida"},
    {id: 12, name: "7up", price: 100, image: margarita, categoria: "Bebida"},
    {id: 13, name: "Fanta", price: 100, image: margarita, categoria: "Bebida"},
    {id: 14, name: "Andes", price: 200, image: margarita, categoria: "Bebida"},
    {id: 15, name: "Pesto", price: 200, image: Pesto, categoria: "Dip"},
    {id: 16, name: "Garbanzo", price: 200, image: Garbanzo, categoria: "Dip"},
    {id: 17, name: "Berenjena Ahumada", price: 200, image: Berenjena, categoria: "Dip"},
    {id: 18, name: "Picante", price: 200, image: Picante, categoria: "Dip"},
    {id: 19, name: "Andes Ipa", price: 230, image: AndesIpa, categoria: "Bebida"},
    {id: 20, name: "Andes Roja", price: 230, image: AndesRoja, categoria: "Bebida"},
    {id: 21, name: "Andes Rubia", price: 230, image: AndesRubia, categoria: "Bebida"},
    {id: 22, name:"Patagonia Pilsener", price: 260, image: PatagoniaPilsener, categoria: "Bebida" },
    {id: 23, name: "Patagonia Amber Lager", price: 260, image: PatagoniaAmber, categoria: "Bebida"},
    {id: 24, name: "Patagonia 24.7", price: 260, image: Patagonia24, categoria: "Bebida"},
    {id: 25, name: "Stella Artois", price: 300, image: StellaArtois, categoria: "Bebida"},
    {id: 26, name: "Stella Noire", price: 300, image: StellaNoire, categoria: "Bebida"},
    {id: 27, name: "Awafrut Manzana", price: 180, image: AwaManzana, categoria: "Bebida"},
    {id: 28, name: "Awafrut Naranja", price: 180, image: AwaNaranja, categoria: "Bebida"},
    {id: 29, name: "Awafrut Pomelo", price: 180, image: AwaPomelo, categoria: "Bebida"},
    {id: 30, name: "Mirinda", price: 140, image: Mirinda, categoria: "Bebida"},
    {id: 31, name: "Pepsi Black", price: 190, image: PepsiBlack, categoria: "Bebida"},
    {id: 32, name: "Pepsi Original", price: 190, image: PepsiLata, categoria: "Bebida"},
    {id: 33, name: "7up", price: 150, image: SevenUp, categoria: "Bebida"},  
    {id: 34, name: "7up Free Lata", price: 180, image: SevenFree, categoria: "Bebida"},     
    {id: 35, name: "Fra Nui Chocolate con Leche", price: 800, image: FraNuiCh, categoria: "Postre"},     
    {id: 36, name: "Fra Nui Semi Amargo", price: 800, image: FraNuiAm, categoria: "Postre"},  
]