import React from 'react'
import LogoGali from '../../assets/Images/logo-gali-2.png'
import "../Navbar/navbar.css"
import backFooter from '../../assets/Images/Background/background3.png'
function Footer() {
    return (
        <>
            <section id="footer" style={{backgroundImage: `url(${backFooter})`}}>
                <div class="footer">
                    <div class="footer-container">
                        <div class="container-flex">
                            <div class="logo">
                                <div><img src={LogoGali} alt="" /></div>
                                <div class="subtitle">Institución Educativa Privada</div>
                                <div class="title">Galileo Huacho</div>
                            </div>

                        </div>

                    </div>
                    <div class="footer-container">
                        <div class="container-flex">
                            <div class="title">Servicios</div>
                            <div>Inicial</div>
                            <div>Primaria</div>
                            <div>Secundaria</div>
                            <div>PreUniversitario</div>
                        </div>

                    </div>
                    <div class="footer-container">
                        <div class="container-flex">
                            <div class="title">Más Links</div>
                            <div>Historia</div>
                            <div>Galería</div>
                            <div>Aula Virtual</div>
                            <div>Nuestro Docentes</div>
                            <div>Libro de reclamaciones</div>

                        </div>
                    </div>
                    <div class="footer-container">
                        <div class="container-flex">
                            <div class="title">Contacto</div>
                            <div>Av. Grau - Huacho</div>
                            <div>981 392 701</div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer