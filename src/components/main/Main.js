import ItemListContainer from "../ilc/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Cart from "../cart/Cart";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const Main = () => {

return (

    <main>
        <Routes>

                <Route 
                    path="/home"
                    element={<ItemListContainer saludo="¡50% de dcto. en Temporada INVIERNO - OTOÑO!"/>} 
                />

                <Route 
                    path='/categories/:categoryName'
                    element={<ItemListContainer saludo="¡Cuidado con estas ofertas!"/>}
                />


                <Route 
                    path="/detail/:product"
                    element={<ItemDetailContainer />}
                />
                
                <Route 
                    path="/cart" 
                    element={<Cart />}
                 />

        </Routes>
    </main>

    );
};

export default Main;