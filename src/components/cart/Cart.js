import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./cart.module.css"
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, clearCart, deleteItem, calcularTotal} = useContext(CartContext); 


    if (cart.length < 1) {

        return (

            <>
            <h2 className={style.title}> Carrito de compras </h2>
            <div className={style.contenedorEmpty}>
            <h4 className={style.title2}> No hay productos en el carrito...</h4>
            <Link to='/' className={style.linkHome}>
                <button className={style.botonBorrar}> Ir al home </button>
            </Link>

            </div>
            </>
        )

    } else {

    return (

        <div>
            <h2 className={style.title}> Carrito de compras </h2>
                <div className={style.itemCartContainer}>
                    {cart.map((p) => (

                        <div className={style.itemCartCard} key={p.id}>
                          
                            <h3>   
                                <img src={p.image} alt="" className={style.imageCart}/> 
                                {p.qty} x {p.title} - ${p.price}
                            </h3>
                            <button onClick={() => deleteItem(p)} className={style.botonBorrar}>Eliminar producto</button>
                        </div>
                       
                    ))}
                    <button onClick={clearCart} className={style.botonLimpiar}>Limpiar Carrito - ${calcularTotal()}
                    </button>
                </div>
        </div>

    )

}

}

export default Cart;