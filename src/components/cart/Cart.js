import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./cart.module.css"
import { Link } from "react-router-dom";
import Form from "../form/Form";

const Cart = () => {

    const { cart, clearCart, deleteItem, calcularTotal} = useContext(CartContext); 
    const [idCompra, setIdCompra] = useState('');


    const handleId = (id) => {

        setIdCompra(id);

    }

    if(idCompra) {

        return (

            <div className={style.idCompra}>
                <h2 className={style.titleId}> Gracias por tu compra, el número de pedido es #{idCompra}</h2>
                <Link to='/' className={style.linkHome}>
                <button className={style.botonBorrar}> Ir al home </button>
            </Link>
            </div>

        )

    }

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
                    <Form cart={cart} total={calcularTotal()} clearCart={clearCart} handleId={handleId}></Form>
                </div>
        </div>

    )

}

}

export default Cart;