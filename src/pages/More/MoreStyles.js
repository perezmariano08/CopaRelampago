import styled from "styled-components";

export const MoreStyledContainer = styled.div`
    padding: 30px 30px 140px 30px;
`
export const MoreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const MoreTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 10px;

    h2 {
        font-size: 30px;
        font-weight: 800;
    }
`
export const MoreContainerImg = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 60%;
    }
`

export const MoreMid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const MoreAction = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: start;
    background: var(--gray-500);
    padding: 15px;
    border-radius: 15px;
    cursor: pointer;
`
export const MoreIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background: var(--green);
    color: white;
`