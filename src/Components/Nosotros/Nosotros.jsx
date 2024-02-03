/* eslint-disable react/prop-types */
import './Nosotros.css'
export default function SectionNosotros({ LogoGalileo }) {
    return (
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
    )
}