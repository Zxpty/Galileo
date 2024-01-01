import React from 'react'
import './navbar.css'
import LogoGali from '../../assets/Images/logo-gali.png'
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
            <a href="#" class="menu">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path
                        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z">
                    </path>
                </svg>
            </a>
            <div class="overlay" id="mobile-menu">
                <a href="" class="close">
                    &times;
                </a>
                <div class="overlay-content">
                    <a href="">Nosotros</a>
                    <a href="">Nivel Educativo</a>
                    <a href="">Aula Virtual</a>
                </div>
            </div>
        </header>
    )
}

export default NavBar