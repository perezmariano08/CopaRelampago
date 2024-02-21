import React, { useState } from 'react'
import { ContainerNoti, NavbarContainerStyled, NavbarWrapper } from './NavbarStyles'
import { HiOutlineBars3 } from "react-icons/hi2";
import logoCR from "/Logos/logoCopaRelampago.png"
import { IoIosNotifications } from "react-icons/io";
import Notifications from './Notifications/Notifications';
import { AnimatePresence } from 'framer-motion';

export const Navbar = () => {

    const [isNotiOpen, setIsNotiOpen] = useState(false);

    const toggleNoti = () => {
        setIsNotiOpen(prevState => !prevState);
    }

    return (
        <NavbarContainerStyled>
            <NavbarWrapper>
                <HiOutlineBars3/>
                <img src={logoCR} alt="Logo Copa Relampago" />
                <ContainerNoti onClick={toggleNoti}>
                    <IoIosNotifications style={{ color: isNotiOpen ? 'var(--green)' : 'white' }}/>
                </ContainerNoti>
            </NavbarWrapper>
            {isNotiOpen && (<Notifications/>)}
        </NavbarContainerStyled>
    )
}
