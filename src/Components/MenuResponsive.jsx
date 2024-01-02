import { useEffect, useState } from "react"

function MenuResponsive() {
    const [menuState, setMenuState] = useState({
        mobileMenuWidth: 0,
        bodyOverFlowY: false
    })

    useEffect(() => {
        const { mobileMenuWidth, bodyOverFlowY } = menuState
        document.body.style.overflowY = bodyOverFlowY ? 'hidden' : 'auto'
        // limpiamos el efecto
        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, [menuState])

    const openNav = () => {
        setMenuState({ mobileMenuWidth: '100%', bodyOverFlowY: true });
    };

    const closeNav = (e) => {
        e.preventDefault()
        setMenuState({ mobileMenuWidth: '0%', bodyOverFlowY: false });
    };

    return (
        <>
            <a href="#" className="menu" onClick={openNav}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path
                        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z">
                    </path>
                </svg>
            </a>
            <div className="overlay" id="mobile-menu" style={{ width: menuState.mobileMenuWidth }}>
                <a href="" className="close" onClick={closeNav}>
                    &times;
                </a>
                <div className="overlay-content">
                    <a href="">Nosotros</a>
                    <a href="">Nivel Educativo</a>
                    <a href="">Aula Virtual</a>
                </div>
            </div>
        </>
    )
}

export default MenuResponsive