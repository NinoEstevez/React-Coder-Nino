import style from './ListaItems.module.css'
import { Link } from 'react-router-dom'

const ListaItems = (props) => {

console.log(props.products)

return (

    
    props.products.map((item) => {

        return (

            <Link to={`/detail/${item.id}`}>
            <div key={item.id} className={style.contenedorItems}>
                <img  className={style.img} src={item.image} alt="" />
                <h4 className={style.name}> {item.title} </h4>
                <h3 className={style.price}> $ {item.price} </h3>
            </div>
            </Link>
        )

    })

    )

}

export default ListaItems;