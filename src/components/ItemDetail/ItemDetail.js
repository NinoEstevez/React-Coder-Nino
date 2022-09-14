import { useState } from "react";
import ItemCount from "../contador/ItemCount";
import style from "./ItemDetail.module.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({item}) => {


    const {cart, addToCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0);

        const addOn = (numero) => {
            
            setCantidad(numero);
                console.log('Agregaste '+numero+' '+item.title+' al carrito.');
            addToCart(item, numero);

        }
    
    console.log(cart)

    return (

        <div>
            <img src={item.image} className={style.img} alt="" />
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>
            <h4>#{item.category}</h4>
            <h5>En carrito: {cantidad}</h5>
    
        {cantidad === 0 ? (

                <ItemCount         
                stock={10}
                initial={0}
                funcion= {addOn}
                />

        ) : (

            <>
                    <div className={style.contenedor}>
                    <Link to="/cart" className={style.link}> 
                    <button className={style.botonCart}>Ir al carrito</button> 
                    </Link>
                    </div>
            </>

        )}
        
        </div>
    )
}

export default ItemDetail;