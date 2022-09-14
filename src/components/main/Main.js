import ItemListContainer from "../ilc/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Cart from "../cart/Cart";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Form from "../form/Form";

const Main = () => {

return (

    <main>
        <Routes>

                <Route 
                    path="/"
                    element={<ItemListContainer saludo="¡50% de dcto. en Temporada INVIERNO - OTOÑO!"/>} 
                />

                <Route 
                    path='/categories/:categoryName'
                    element={<ItemListContainer saludo="¡Increíbles ofertas!"/>}
                />


                <Route 
                    path="/detail/:product"
                    element={<ItemDetailContainer />}
                />
                
                <Route 
                    path="/cart" 
                    element={<Cart />}
                 />

                <Route 
                    path="/news"
                    element={<Form />}
                
                />

        </Routes>
    </main>

    );
};

export default Main;