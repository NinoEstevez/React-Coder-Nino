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
                <img className={style.nike} src="https://elementor.com/marketing/wp-content/uploads/2021/10/Elementor-Logo-Symbol-White.png" alt="logo" />                
            </div>

            <div className={style.contenedorBoton}>
            
            <a href="https://www.facebook.com/nike/" alt="">
                <Boton
                    variant="relleno"
                    imagen="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    funcion={registro}
                />
            </a>

            <a href="https://www.instagram.com/nike/?hl=es" alt="">
                <Boton
                    imagen="https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png"
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