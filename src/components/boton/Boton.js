import style from './boton.module.css'

const Boton = (prop) => {

    return <button onClick={prop.funcion} className={style[prop.variant]}> <img className={style.fb} src={prop.imagen} alt="" /> </button>

}

export default Boton;