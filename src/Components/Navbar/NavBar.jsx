import './navbar.css'
import LogoGali from '../../assets/Images/logo-gali.png'
import MenuResponsive from '../MenuResponsive'
import { useScrollPage } from '../../hooks/useScrollPage'


function NavBar() {
    const { isScrolled } = useScrollPage()

    const backClass = isScrolled ? 'background-scroll' : ''
    return (
        <header className={`header ${backClass}`}>
            <div className="menu-logo">
                <img src={LogoGali} alt="logo-gali" />
                <div>
                    <div className="logo-subtitle">Institución educativa Privada</div>
                    <div className="logo-title">Galileo Huacho</div>
                </div>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/Pages/nosotros.html">Nosotros</a></li>
                    <li><a href="">Nivel Educativo</a></li>
                    <li><a href="">Aula Virtual</a></li>
                </ul>
            </nav>
            <MenuResponsive />
        </header>
    )
}

export default NavBar