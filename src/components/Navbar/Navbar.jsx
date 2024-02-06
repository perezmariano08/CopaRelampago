import React from 'react'
import { NavbarContainerStyled, NavbarWrapper } from './NavbarStyles'
import { HiOutlineBars3 } from "react-icons/hi2";
import logoCR from "/Logos/logoCopaRelampago.png"
import { IoIosNotifications } from "react-icons/io";

export const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <NavbarWrapper>
                <HiOutlineBars3/>
                <img src={logoCR} alt="Logo Copa Relampago" />
                <IoIosNotifications/>
            </NavbarWrapper>
        </NavbarContainerStyled>
    )
}
