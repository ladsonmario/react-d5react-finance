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
export const ContainerButtonCancel = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
        outline: 0;
        border: 0;
        border-radius: 5px;
        padding: 10px 15px;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        background-color: #d91f16;
        cursor: pointer;    

        &:hover {
            opacity: .9;
        }
    }
`;