import ItemCount from "../contador/ItemCount";
import style from "./ItemDetail.module.css"

const ItemDetail = ({item}) => {

    const addOn = () => console.log('Agregaste al carrito')
    const cero = 0
    const ocho = 8

    return (

        <div>
   
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>
            <h4>Categoría: {item.category}</h4>
            
            <ItemCount 
            
            stock={ocho}
            initial={cero}
            funcion= {addOn}

            />

        </div>



    )




}

export default ItemDetail;