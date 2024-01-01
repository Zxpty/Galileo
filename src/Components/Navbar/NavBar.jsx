import React from 'react'
import './navbar.css'
import LogoGali from '../../assets/Images/logo-gali.png'
import MenuResponsive from '../MenuResponsive'
function NavBar() {
    return (
        <header class="header background-scroll">
            <div class="menu-logo">
                <img src={LogoGali} alt="logo-gali" />
                <div>
                    <div class="logo-subtitle">Institución educativa Privada</div>
                    <div class="logo-title">Galileo Huacho</div>
                </div>
            </div>
            <nav>
                <ul class="nav-links">
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