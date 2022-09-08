/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './navbar.module.css';
import CartW from './cartwidget/CartWidget';
import Boton from '../boton/Boton'
import { Link } from 'react-router-dom';


const NavBar = (prop) => {
   
    const login = () => console.log('Iniciaste sesión')
    const registro = () => console.log('Registro completado')
    
    return (

        <nav>
            <div className={style.contenedorImagenes}>
            <div className={style.imagenNav}>
                <img className={style.nike} src="https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg" alt="logo" />                
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
            <Link to="/cart"> <CartW /> </Link>
            </div>
    
            </div>
            <ul className={style.listaNav}>
                <li>
                    <Link to='/home'> <a href="#">{prop.seccion1}</a> </Link>
                </li> 
                <li><Link to='/categories/accesorios'>{prop.seccion3}</Link> </li>
                <li><Link to='/categories/electronica'>{prop.seccion4}</Link> </li>
                <li><Link to='/categories/ropa'>{prop.seccion2}</Link> </li>
                <li><Link to='/categories/otro'>{prop.seccion5}</Link> </li>
            </ul>
        </nav>

    )
}

export default NavBar;