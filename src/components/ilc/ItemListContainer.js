import style from './ilc.module.css'
import ItemCount from '../contador/ItemCount';

const ItemListContainer = (prop) => {

    const addOn = () => console.log('Agregaste al carrito')
    const cero = 0
    const ocho = 8

    return (
        <main>
            <h3 className={style.titulo}> {prop.saludo} </h3>
            <ItemCount 
            
            stock={ocho}
            initial={cero}
            funcion= {addOn}

            />
        </main>

    )

}

export default ItemListContainer;