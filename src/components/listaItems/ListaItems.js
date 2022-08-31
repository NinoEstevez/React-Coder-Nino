import Item from "../item/Item";


const ListaItems = (items) => {

    items.map((item) => {

        return (

            <Item 
            
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            stock={item.stock}
            categoria={item.categoria}
            imagen={item.imagen}

            />

        )

    })



}

export default ListaItems;