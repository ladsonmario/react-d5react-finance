import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 15px;
    margin-top: 20px;

    td {
        padding: 10px 0;    
    }

    
`;

export const TableHeadColumn = styled.th<{ width?: number; }>`
    width: ${p => p.width ? `${p.width}px` : '50%'};
    padding: 10px 0;
    text-align: left;            
`;