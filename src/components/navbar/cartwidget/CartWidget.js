/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './cart.module.css';
import { useContext, useInsertionEffect } from 'react';
import { CartContext } from '../../../context/CartContext';
import { useState } from 'react';
import { useEffect } from 'react';

const CartW = () => {
    
    const { cart } = useContext(CartContext); 
    const[cantidadProductos, setCantidadProductos] = useState(0);

  
    useEffect(() => {

        contarProductos();

    }, [cart])

    const contarProductos = () => {

        let contador = 0;

        if (cart.lenght === 0) {

            setCantidadProductos(0);

        } else {

            cart.forEach(p => {
         
                contador = contador + p.qty
    
            })
    
            setCantidadProductos(contador)

        }

    }

        if (cart.length !== 0) {

            return (
                <div className={style.contenedorCartIcon}>
                    <h6 className={style.numberIcon}> {cantidadProductos} </h6>
                    <img src="cart2.png" alt="" className={style.cart} />           
                </div>
            )
            
        } else {

            return (
                <div className={style.contenedorCartIcon} style={{display: "none"}}>
                    <h6 className={style.numberIcon}> {cantidadProductos} </h6>
                    <img src="cart2.png" alt="" className={style.cart} />           
                </div>
            )


        }
        


}


export default CartW;