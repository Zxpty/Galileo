import LogoGali from '../../assets/Images/logo-gali-2.png'
import './Footer.css'
import backFooter from '../../assets/Images/Background/background3.png'
function Footer() {
    return (
        <>
            <section id="footer" style={{backgroundImage: `url(${backFooter})`}}>
                <div className="footer">
                    <div className="footer-container">
                        <div className="container-flex">
                            <div className="logo">
                                <div><img src={LogoGali} alt="" /></div>
                                <div className="subtitle">Institución Educativa Privada</div>
                                <div className="title">Galileo Huacho</div>
                            </div>

                        </div>

                    </div>
                    <div className="footer-container">
                        <div className="container-flex">
                            <div className="title">Servicios</div>
                            <div>Inicial</div>
                            <div>Primaria</div>
                            <div>Secundaria</div>
                            <div>PreUniversitario</div>
                        </div>

                    </div>
                    <div className="footer-container">
                        <div className="container-flex">
                            <div className="title">Más Links</div>
                            <div>Historia</div>
                            <div>Galería</div>
                            <div>Aula Virtual</div>
                            <div>Nuestro Docentes</div>
                            <div>Libro de reclamaciones</div>

                        </div>
                    </div>
                    <div className="footer-container">
                        <div className="container-flex">
                            <div className="title">Contacto</div>
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