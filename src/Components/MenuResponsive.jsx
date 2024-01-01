import React from 'react'
import { nav } from '../scripts/nav'
function MenuResponsive() {
    return (
        <>
            <a href="#" class="menu" onClick={nav}>
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
        </>
    )
}

export default MenuResponsive