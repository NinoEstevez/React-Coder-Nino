import style from './ilc.module.css'
import ItemCount from '../contador/ItemCount';
import { useEffect, useState } from 'react';
import productos from '../productos/Productos';
import ListaItems from '../listaItems/ListaItems';

const ItemListContainer = (prop) => {

    const addOn = () => console.log('Agregaste al carrito')
    const cero = 0
    const ocho = 8

    const [items, setItems] = useState([]);


    useEffect(() => {

        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                
                res(productos);
    
            }, 2000)
    
    
        })
    
        traerProductos
            .then((datos) => {
    
                setItems(datos);
    
            })

        
    })
    

    return (
        <main>
            <h3 className={style.titulo}> {prop.saludo} </h3>
            
            <ListaItems 
            
            items={items}
            
            />

            <ItemCount 
            
            stock={ocho}
            initial={cero}
            funcion= {addOn}

            />
        </main>

    )

}

export default ItemListContainer;