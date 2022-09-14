import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


const CartProvider = ({children}) => {
const [cart, setCart] = useState([]);

const addToCart = (item, numero) => {

    if (cart.indexOf(item.id) === true) {

        // Acá no encontré la forma de modificar la propiedad qty del producto repetido
        console.log('Ya agregó este producto al carrito anteriormente')

    } else {

     setCart([...cart, {...item, qty: numero}])
  
    }
}

const clearCart = () => {

    setCart([]);

}

return (

<CartContext.Provider value={{ cart, addToCart, clearCart}}>
    {children}
</CartContext.Provider>

)}

export default CartProvider;