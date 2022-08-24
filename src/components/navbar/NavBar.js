/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './navbar.module.css';
import CartW from './cartwidget/CartWidget';


const NavBar = (prop) => {
    return (

        <header>
            <div className={style.contenedorImagenes}>
            <div className={style.imagenNav}>
                <img src="https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg" alt="logo" />                
            </div>
            <CartW />
            </div>
            <ul className={style.listaNav}>
                <li><a href="#">{prop.seccion1}</a> </li> 
                <li><a href="#">{prop.seccion2}</a> </li>
                <li><a href="#">{prop.seccion3}</a> </li>
                <li><a href="#">{prop.seccion4}</a> </li>
                <li><a href="#">{prop.seccion5}</a> </li>
            </ul>
        </header>

    )
}

export default NavBar;