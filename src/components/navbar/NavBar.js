/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './navbar.module.css';

const Header = () => {
    return (

        <header>
            <div className={style.imagenNav}>
                <img src="https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg" alt="logo" />
            </div>
            <ul className={style.listaNav}>
                <li><a href="#">Home</a> </li> 
                <li><a href="#">Empresa</a> </li>
                <li><a href="#">Catalogo</a> </li>
                <li><a href="#">Personalización</a> </li>
                <li><a href="#">Mayorista</a> </li>
            </ul>
        </header>

    )
}

export default Header;