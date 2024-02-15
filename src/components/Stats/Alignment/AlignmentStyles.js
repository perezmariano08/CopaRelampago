import styled from "styled-components";

export const AlignmentWrapper = styled.div`
    background-color: var(--gray-300);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    border-radius: 20px;
    min-width: 85%;
`
export const AlignmentDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--gray-200);
`
export const AlignmentTeams = styled`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
export const AlignmentTeam = styled.div`
    display: flex;
    align-items: center;
    gap: 5;

    img {
        width: 50px;
    }

    p {
        font-size: 12px;
        font-weight: 600;
    }
`