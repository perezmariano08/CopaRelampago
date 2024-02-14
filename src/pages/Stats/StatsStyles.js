import styled from "styled-components";

export const StatsContainerStyled = styled.div`
    padding: 30px 30px 140px 30px;
`
export const StatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`
export const StatsHeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
export const StatsFilter = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`
export const StatsFilterButton = styled.button`
    display: flex;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    background-color: var(--gray-300);
    color: var(--white);
    height: fit-content;
    border: 1px solid ${({ border }) => `var(--${border})`};
    border-radius: 10px;
    cursor: pointer;

    &.active {
        background-color: var(--green);
    }
`