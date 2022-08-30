import style from './boton.module.css'

const Boton = (prop) => {

    return <button onClick={prop.funcion} className={style[prop.variant]}> {prop.texto1} </button>

}

export default Boton;