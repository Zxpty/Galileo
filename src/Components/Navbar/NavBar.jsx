import './navbar.css'
import LogoGali from '../../assets/Images/logo-gali.png'
import MenuResponsive from '../MenuResponsive'
import { useEffect, useState } from 'react'

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

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