
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


const CartProvider = ({children}) => {


const [cart, setCart] = useState([]);
// const [monto, setMonto] = useState();


const addToCart = (item, numero) => {

    if (isInCart(item.id)) {

        alert('Este producto ya fue agregado al carrito') 
        addQty(item, numero);
        

    } else {

     setCart([...cart, {...item, qty: numero, price: (item.price * numero)}])
     console.log('Agregaste '+numero+' -'+item.title+'- al carrito.');
     console.log("Carrito actual:")
     console.log([...cart, {...item, qty: numero, price: (item.price * numero)}]);
  
    }
   


}

const isInCart = (id) => {
    return cart.some((p) => p.id === id)
}

const addQty = (item, numero) => {

    const cartActualizado = cart.map((p) => {

        if (p.id === item.id) {

            const itemActualizado = {
                ...p,
                qty: p.qty + numero,
                price: p.price + (p.price * numero)
            }

            return itemActualizado;

        }   else {

            return p;
        }

    })

    setCart(cartActualizado);

}


const clearCart = () => {

    setCart([]);

}

const calcularTotal = () => {

    let acumulador = 0;

    cart.forEach((p) => {

        acumulador = p.price + acumulador;

    })

    return acumulador;

}


// const montoTotal = () => {
 
//     let acumulador = monto;

//     if (cart.length === 0) {

//         acumulador = 0

//     } else {

//         cart.map((p) => (
                
//         acumulador = acumulador + (p.qty * p.price)
       
//         ))

//     }

//     setMonto(acumulador);

// }

const deleteItem = (item) => {

    const cartActualizado2 = cart.filter((p) => p.id !== item.id)
    setCart(cartActualizado2);

}

return (

<CartContext.Provider value={{cart, addToCart, clearCart, deleteItem, calcularTotal}}>
    {children}
</CartContext.Provider>

)}

export default CartProvider;