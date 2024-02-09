import styled from "styled-components";

export const TableContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--gray-300);
    border-radius: 20px;
    overflow: hidden;
    padding: 20px 0;
    gap: 20px;
`

export const TableTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0 20px;
    h3 {
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
    }

    p {
        font-weight: 300;
        font-size: 8px;
        line-height: 8px;
        color: var(--green);
    }
`

export const TableTitleDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--gray-200);
`

export const TableWrapper = styled.table`
    background-color: var(--gray-300);
    width: 100%;
    border-collapse: collapse;

    th, td {
        text-align: center;
        padding: 5px 12px;
    }

    .my-team {
        color: var(--green);
    }

    .team {
        text-align: left;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .team img {
        height: 15px;
    }

    th {
        color: var(--gray-200);
    }

    .one {
        border-left: 2px solid var(--green);
    }

    .two {
        border-left: 2px solid var(--red);
    }

    .three {
        border-left: 2px solid var(--red);
    }
`