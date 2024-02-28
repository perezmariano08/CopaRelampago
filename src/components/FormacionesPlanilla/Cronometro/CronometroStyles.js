import styled from "styled-components";

export const CronometroContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
`;

export const CronometroWrapper = styled.div`
    margin: 0px;
    background: black;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--gray-300);
    gap: 10px;
    box-shadow: 1px 1px 10px var(--gray-500);

    button {
        border: none;
        background-color: var(--gray-400);
        color: var(--green);
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 25px;
    }
`
export const CronometroH1 = styled.h1`
    text-align: center;
    color: white;
    font-size: 20px;
    background-color: var(--gray-400);
    padding: 10px;
    border-radius: 10px;
`
export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`