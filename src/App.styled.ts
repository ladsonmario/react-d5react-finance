import styled from 'styled-components';

export const Container = styled.div`
    
    header {
        height: 150px;
        background-color: #1FAB89;
        text-align: center;

        h1 {
            color: #D7FBE8;
            padding-top: 30px;
        }
    }

    section {
        max-width: 980px;
        margin: auto;
        margin-bottom: 50px;        
    }

    @media (max-width: 600px) {
        section {
            padding: 10px;
        }
    }
`;