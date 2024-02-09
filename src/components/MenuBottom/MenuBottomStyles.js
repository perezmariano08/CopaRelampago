import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuBottomContainerStyled = styled.footer`
    width: 100%;
    padding: 0 30px 30px 30px;
    position: fixed;
    bottom: 0;
`

export const MenuBottomWrapper = styled.div`
    width: 100%;
    background-color: var(--gray-500);
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
`

export const MenuBottomItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    color: var(--white);
    align-items: center;
    font-size: 12px;
    i, svg {
        font-size: 20px;
    }
    
    &.active {
        color: var(--green);
    }
`