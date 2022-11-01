import styled from 'styled-components';

export const Container = styled.div<{ color: string; }>`
    flex: 1;
    text-align: center;
    font-weight: 700;

    .resume--title {                
        margin-bottom: 5px;
        color: #888;
    }

    .resume--value {
        color: ${p => p.color ?? '#000'};
    }
`;