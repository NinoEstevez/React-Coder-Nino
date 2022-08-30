/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './navbar.module.css';
import CartW from './cartwidget/CartWidget';
import Boton from '../boton/Boton'


const NavBar = (prop) => {
   
    const login = () => console.log('Iniciaste sesión')
    const registro = () => console.log('Registro completado')
    
    return (

        <nav>
            <div className={style.contenedorImagenes}>
            <div className={style.imagenNav}>
                <img src="https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg" alt="logo" />                
            </div>

            <div className={style.contenedorBoton}>
            <Boton
                texto1="Registrarse"
                variant="relleno"
                funcion={registro}
            />
        
            <Boton
                texto1="Iniciar Sesión"
                variant="simple"
                funcion={login}
            />
            <CartW />
            </div>
    
            </div>
            <ul className={style.listaNav}>
                <li><a href="#">{prop.seccion1}</a> </li> 
                <li><a href="#">{prop.seccion2}</a> </li>
                <li><a href="#">{prop.seccion3}</a> </li>
                <li><a href="#">{prop.seccion4}</a> </li>
                <li><a href="#">{prop.seccion5}</a> </li>
            </ul>
        </nav>

    )
}

export default NavBar;