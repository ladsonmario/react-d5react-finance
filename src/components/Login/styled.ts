import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #1FAB89, #9DF3C4, #D7FBE8, #9DF3C4, #1FAB89);

    div {
        margin-bottom: 20px;
        font-size: 24px;

        img {
            margin-left: 10px;
            width: 60px;
        }
    }

    button {
        display: flex;
        align-items: center;
        font-size: 20px;
        border: 0;
        padding: 15px 20px;
        border-radius: 10px;
        background-color: #62D2A2;        
        cursor: pointer;

        img {
            width: 60px;            
        }
    }
`;