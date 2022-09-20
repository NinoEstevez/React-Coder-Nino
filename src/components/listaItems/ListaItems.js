import style from './ListaItems.module.css'
import { Link } from 'react-router-dom'

const ListaItems = (props) => {

return (

    
    props.products.map((item) => {

        return (

            
            <div key={item.id} className={style.contenedorItems}>
                <Link to={`/detail/${item.id}`} className={style.link}>
                <img  className={style.img} src={item.image} alt="" />
                <h4 className={style.name}> {item.title} </h4>
                <h3 className={style.price}> $ {item.price} </h3>
                 </Link>
            </div>
           
        )

    })

    )

}

export default ListaItems;