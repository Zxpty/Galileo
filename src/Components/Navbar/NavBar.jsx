import './navbar.css'
import LogoGali from '../../assets/Images/logo-gali.png'
import MenuResponsive from '../MenuResponsive'
import { useScrollPage } from '../../hooks/useScrollPage'
import { Link } from 'react-router-dom'


function NavBar() {
    const { isScrolled } = useScrollPage()

    const backClass = isScrolled ? 'background-scroll' : ''
    return (
        <header className={`header ${backClass}`}>
            <div className="menu-logo">
                <Link to="/"><img src={LogoGali} alt="logo-gali" /></Link>
                <div>
                    <div className="logo-subtitle">Institución educativa Privada</div>
                    <div className="logo-title">Galileo Huacho</div>
                </div>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/niveles-educativos">Nivel Educativo</Link></li>
                    <li><Link to="/aula-virtual">Aula Virtual</Link></li>
                </ul>
            </nav>
            <MenuResponsive />
        </header>
    )
}

export default NavBar