import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td<{ color?: string; }>`
    .category--container {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        color: #fff;
        background-color: ${p => p.color};
    }
    .category--value {
        color: ${p => p.color};
    }
`;