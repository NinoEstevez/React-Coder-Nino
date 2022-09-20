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
            
            <a href="https://www.facebook.com/nike/" alt="">
                <Boton
                    texto1="Facebook"
                    variant="relleno"
                    funcion={registro}
                />
            </a>

            <a href="https://www.instagram.com/nike/?hl=es" alt="">
                <Boton
                    texto1="Instagram"
                    variant="simple"
                    funcion={login}
                />
            </a>
           
        
          
            <Link to="/cart" className={style.a2}> <CartW /> </Link>
            </div>
    
            </div>

            <ul className={style.listaNav}>
                <li><Link to='/' className={style.a}> {prop.seccion1} </Link> </li> 
                <li><Link to='/categories/accesorios' className={style.a}>{prop.seccion3}</Link> </li>
                <li><Link to='/categories/electronica' className={style.a}>{prop.seccion4}</Link> </li>
                <li><Link to='/categories/ropa' className={style.a}>{prop.seccion2}</Link> </li>
                <li><Link to='/news' className={style.a}>{prop.seccion5}</Link> </li>
            </ul>
        </nav>

    )
}

export default NavBar;