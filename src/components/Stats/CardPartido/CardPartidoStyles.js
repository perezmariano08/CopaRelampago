import styled from "styled-components";

export const CardPartidoWrapper = styled.div`
    background-color: var(--gray-300);
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    border-radius: 20px;
    width: 100%;
`
export const CardPartidoTitles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;

    h3 {
        font-size: 12px;
        font-weight: 600;
        line-height: 12px;
    }

    p {
        font-size: 8px;
        font-weight: 300;
        color: var(--green)
    }
`

export const CardPartidoTeams = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
export const CardPartidoTeam = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    img {
        width: 50px;
    }

    h4 {
        font-size: 12px;
        font-weight: 300;
        min-height: 24px;
    }
`
export const CardPartidoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    h5 {
        font-size: 18px;
        font-weight: 800;
    }

    p {
        font-size: 10px;
        font-weight: 300; 
    }

    h4 {
        font-size: 36px;
        line-height: 36px;
        font-weight: 800;
    }

    span {
        font-size: 14px;
        line-height: 14px;
        font-weight: 800;
    }
`

