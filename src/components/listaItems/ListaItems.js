import style from './ListaItems.module.css'

const ListaItems = (props) => {

console.log(props.products)

return (

    
    props.products.map((item) => {

        return (

            <div key={item.id} className={style.contenedorItems}>
                <img  className={style.img} src={item.image} alt="" />
                <h4> {item.title} </h4>
                <h4 className={style.price}> $ {item.price} </h4>
            </div>

        )

    })

    )

}

export default ListaItems;