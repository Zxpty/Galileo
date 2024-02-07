import TitleSpace from '../Components/TitleSpace/TitleSpace';
import BackImage from '../assets/Images/Background/background4.png'
import '../index.css';
export default function nivelEducativo() {
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
        </>
    )
}