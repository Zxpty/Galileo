/* eslint-disable react/no-unescaped-entities */
import TitleSpace from '../../Components/TitleSpace/TitleSpace';
import '../../index.css';
import './Nosotros.css'

export default function Nosotros() {
    return (
        <>
            <TitleSpace
                firstTitle="Conoce"
                secondTitle="Nuestra Historia"
            />
            <section className='section-historia'>
                <div className='historia-image'>
                    <img src="./src/assets/images/historia1.png" alt="" />
                </div>
                <div className='historia-content'>
                    El inicio de nuestro Colegio Privado Galileo se realiza el 13 de diciembre de 2022
                    en la hermosa ciudad de Huacho, Perú. Desde entonces, nos hemos comprometido apasionadamente
                    a brindar una educación de excelencia, formando mentes brillantes con sólidos principios y valores.
                    Desde nuestra fundación, hemos construido una trayectoria de éxito en la que cada
                    logro y aprendizaje de nuestros estudiantes han sido celebrados y valorados.
                    Esperamos continuar creciendo y creando un impacto positivo en la educación,
                    guiados por nuestro lema "Educación con Valores".
                </div>
            </section>
            <TitleSpace
                firstTitle="Nuestra"
                secondTitle="Misión y Visión"
            />
            <div className='section-vision-mision'>
                <div className='mision'>
                    <div>
                    <img src="./src/assets/images/MISION.png" alt="" />
                    <h1>MISIÓN</h1>
                    </div>
                </div>
                <div className='vision'>
                    <div>
                    <img src="./src/assets/images/VISION1.png" alt="" />
                    <h1>VISIÓN</h1>
                    </div>
                </div>
            </div>
            <TitleSpace
                firstTitle="Conoce"
                secondTitle="Nuestros Pilares"
            />
            <TitleSpace
                secondTitle="Galeria"
            />
        </>
    );
}
