import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    width: 100%;
    height: 40px;
    background-color: var(--gray-400);
`

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    max-width: 1200px;
    height: 100%;
 
    img {
        height: 30%;
    }
`