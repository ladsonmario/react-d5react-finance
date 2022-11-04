import styled from 'styled-components';

export const TableLine = styled.tr`
    cursor: pointer;        

    &:nth-child(odd) {
        background-color: #efefef;
    }

    &:hover {
        color: #00f;        
    }

    @media(max-width: 400px) {
        font-size: 14px;
    }
`;

export const TableColumn = styled.td<{ color?: string; break?: boolean; }>`
    word-break: ${p => p.break ? 'break-word' : 'normal'};

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

    @media(max-width: 400px) {
        .category--container {
            padding: 3px 8px;
        }
    }
`;