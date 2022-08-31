

const Item = (prop) => {

let id = prop.id;
let nombre = prop.nombre;
let stock = prop.stock;
let precio = prop.precio;
let categoria = prop.categoria;
let imagen = prop.imagen;


return (

    <div key={id}>
    <h4> {nombre} </h4>
    <img src={imagen} alt="" />
    <h4> {precio} </h4>
    <h5> Stock: {stock} </h5>
    <h5> Categoria: {categoria}</h5>
    </div>


)


}

export default Item;