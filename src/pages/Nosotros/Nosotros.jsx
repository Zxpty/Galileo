/* eslint-disable react/no-unescaped-entities */
import TitleSpace from '../../Components/TitleSpace/TitleSpace.jsx';
import '../../index.css';
import './Nosotros.css'
import BackImage from '../../assets/Images/Background/background4.png'
import slidesJS from '../../utils/slides';
import { useEffect } from 'react';
import { PrimaryButton } from '../../Components/buttons/PrimaryButton/PrimaryButton.jsx';

export default function Nosotros() {
    useEffect(() => {
        slidesJS()
    }, [])
    return (
        <>
            <section id='hero' style={{ backgroundImage: `url(${BackImage})` }}>
                <div className="header-container">
                </div>
            </section>
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
            <section className='gallery-section'>
                <div className='galeria-images'>
                    <div className='images-slide'>
                        <img src="./src/assets/images/slide-images-1/5.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/6.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/7.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/8.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/9.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/10.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/11.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/12.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/13.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/14.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/15.png" alt="" />
                        <img src="./src/assets/images/slide-images-1/16.png" alt="" />
                    </div>
                </div>
                <PrimaryButton />
            </section>




        </>
    );
}
