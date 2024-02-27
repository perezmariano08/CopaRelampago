import styled from "styled-components";

export const FormacionesPlanillaWrapper = styled.div`
    background-color: var(--gray-300);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    border-radius: 20px;
    min-width: 85%;
`
export const FormacionesPlanillaTitle = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-weight: 600;
    }
`
export const PlanillaButtons = styled.button`
    background: transparent;
    border: 1px solid var(--green);
    padding: 5px 10px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    &.local {
        background: var(--green);
    }
`
export const TablePlanillaWrapper = styled.table`
    background-color: var(--gray-300);
    width: 100%;
    border-collapse: collapse;

    td, th {
        padding: 5px;
    }
    th {
        color: var(--gray-200);
        text-align: start;
    }

    td {
        text-align: start;

    }

    .dorsal {
        background: white;
        color: var(--gray-300);
        font-weight: 700;
        font-size: 17px;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
    }

    .text {
        font-weight: 600;
    }
`;