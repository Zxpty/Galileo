/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export function useMenuState() {
    const [menuState, setMenuState] = useState({
        mobileMenuWidth: 0,
        bodyOverFlowY: false
    })
    useEffect(() => {
        const { mobileMenuWidth, bodyOverFlowY } = menuState
        document.body.style.overflowY = bodyOverFlowY ? 'hidden' : 'auto'
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

    return {menuState, openNav,closeNav}
}