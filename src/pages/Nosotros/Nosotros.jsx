/* eslint-disable react/no-unescaped-entities */
import TitleSpace from '../../Components/TitleSpace/TitleSpace';
import '../../index.css';
import './Nosotros.css'
export default function Nosotros() {
    return (
        <>
            <TitleSpace
                firstTitle="¡Bienvenidos Al"
                secondTitle="Colegio Galileo!"
            />
            <section id="hero">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
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
