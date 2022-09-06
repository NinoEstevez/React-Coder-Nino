import style from './ilc.module.css'
import { useEffect, useState } from 'react';
import ListaItems from '../listaItems/ListaItems';

const ItemListContainer = (prop) => {

    const [items, setItems] = useState([]);

    
    const funcion = () => {

setTimeout(() => {

    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => setItems(json))

}, 2000)



        }
        
    useEffect(() => {

        funcion();
        
    }, [])
    

    return (
        <>
            <h3 className={style.titulo}> {prop.saludo} </h3>
            
            <div className={style.containerProducts}>
            <ListaItems 
            
            products={items}
            
            />
            </div>
        </>

    )

}

export default ItemListContainer;