
import "../Navbar/navbar.css"
import LogoGalileo from '../../assets/Images/logo-gali-2.png'
import BackImage from '../../assets/Images/Background/background1.png'
import Cards from '../Cards/Cards';
import imgInicial from '../../assets/Images/inicial.png'
import backCards from '../../assets/Images/Background/background2.png'
// Datos para la tarjeta
const cardsData = [
    { class: 'edu-1', title: 'Inicial', url: imgInicial },
    { class: 'edu-2', title: 'Primaria', url: imgInicial },
    { class: 'edu-3', title: 'Secundaria', url: imgInicial },
    { class: 'edu-4', title: 'Pre-Universitario', url: imgInicial },
];
function Main() {
    return (
        <>
            <section id="hero" style={{ backgroundImage: `url(${BackImage})` }}>
                <div className="hero container">
                    <div>Me cuidan</div>
                    <div>Me guían</div>
                    <div>Me educan</div>
                    <div>Somos Colegio Galileo, Educación con valores.</div>
                    <button className="btn-link">Conoce Más</button>
                </div>
            </section>
            <section id="space">
                <div className="space">
                    <div>¡Bienvenidos Al</div>
                    <div>Colegio Galileo!</div>
                </div>
            </section>
            <section id="nosotros">
                <div className="nosotros">
                    <div className="nosotros-text">
                        <div>| Somos</div>
                        <div>
                            Una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes. Desde nuestra fundación en 2022, hemos brindado una educación de calidad que fomenta el crecimiento intelectual, social y emocional de nuestros alumnos.
                        </div>
                    </div>
                    <div className="nosotros-logo">
                        <img src={LogoGalileo} alt="" />
                        <div className="title">¡Galileo, tu mejor opción</div>
                        <div><button>Contactanos</button></div>
                    </div>
                </div>
            </section>
            <section id="space">
                <div className="space">
                    <div>Conoce Nuestros</div>
                    <div>Niveles Educativos</div>
                </div>
            </section>
            <section className="container-card" id="educativos" style={{backgroundImage: `url(${backCards})`}}>
                {cardsData.map((card, index) => (
                    <Cards key={index} cardClass={card.class} title={card.title} imageUrl={card.url} />
                ))}
            </section>
            <section id="space">
                <div className="space form-space">
                    <div>Solicitar Informes</div>
                    <div id="formulario" className="form">
                        <input type="text" placeholder="Nombre" />
                        <input type="tel" placeholder="Celular" />
                        <input type="email" placeholder="Correo" />
                        <input type="text" placeholder="Servicio" />
                    </div>
                    <input type="submit" value="Enviar" className="form-button" />
                </div>
            </section>
        </>
    );
}

export default Main;
