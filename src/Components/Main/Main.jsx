
import "../Navbar/navbar.css"
import LogoGalileo from '../../assets/Images/logo-gali-2.png'
import BackImage from '../../assets/Images/Background/background1.png'
import Cards from '../Cards/Cards';
import imgInicial from '../../assets/Images/inicial.png'
import backCards from '../../assets/Images/Background/background2.png'
import SectionNosotros from "../Nosotros/Nosotros";
import TitleSpace from "../TitleSpace/TitleSpace";
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
            <TitleSpace
                firstTitle="¡Bienvenidos Al"
                secondTitle="Colegio Galileo!"
            />
            <SectionNosotros LogoGalileo={LogoGalileo}></SectionNosotros>
            <TitleSpace
                firstTitle="Conoce Nuestros"
                secondTitle="Niveles Educativos"
            />
            <section className="container-card" id="educativos" style={{ backgroundImage: `url(${backCards})` }}>
                {cardsData.map((card, index) => (
                    <Cards key={index} cardClass={card.class} title={card.title} imageUrl={card.url} />
                ))}
            </section>
            <TitleSpace
                firstTitle="Solicitar Informes"
            >
                <div className="space form-space">
                    <div id="formulario" className="form">
                        <input type="text" placeholder="Nombre" />
                        <input type="tel" placeholder="Celular" />
                        <input type="email" placeholder="Correo" />
                        <input type="text" placeholder="Servicio" />
                    </div>
                    <input type="submit" value="Enviar" className="form-button" />
                </div>
            </TitleSpace>
        </>
    );
}

export default Main;
