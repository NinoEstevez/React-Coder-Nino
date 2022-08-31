import { useState } from "react";
import styles from './count.module.css'

const ItemCount = (prop) => {

    const initial = prop.initial;
    const stock = prop.stock;

    const [numero, setNumero] = useState(initial);

   
    const sumarUno = () => {
        
        numero < stock ? setNumero(numero + 1) : alert('Máximo numero de items alcanzados. No hay más stock.')

    }

    const restarUno = () => {
        
        console.log(numero)

        numero > 0 ? setNumero(numero - 1) : alert('No hay items en el carrito.')

    }
    


    return (

        <div className={styles.contenedor}>
            <h4 className={styles.numero}> {numero} </h4>
            <button className={styles.botonContador} onClick={sumarUno}> + </button>
            <button className={styles.botonContador} onClick={restarUno}> - </button>           
            <button className={styles.botonCart} onClick={prop.funcion}>Agregar al carrito</button>
        </div>


    )

}

export default ItemCount;