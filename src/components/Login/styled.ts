import styled from 'styled-components';

export const Container = styled.div<{ loading: boolean }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #1FAB89, #9DF3C4, #D7FBE8, #9DF3C4, #1FAB89);

    .container--items {
        background-color: #fff;
        max-width: 600px;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        border-radius: 5px;
        box-shadow: 0 0 20px #aaa;
        border: 1px solid #ddd;

        .logo--img {
            width: 150px;
            height: 150px; 
        }

        .title {
            margin-bottom: 20px;
            font-size: 18px;
            text-align: center;
            font-weight: bold;
    
            img {
                margin-left: 10px;
                width: 30px;
            }
        }

        .loading-gif {
            width: 50px;
            height: 50px;
        }

        button {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            border: 0;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #62D2A2; 
            font-size: 15px;
            color: #fff; 
            font-weight: bold;     
            text-shadow: 1px 1px 1px #000; 
            cursor: ${p => p.loading ? 'not-allowed;' : 'pointer;'}
            opacity: ${p => p.loading ? '0.3;' : '1;'}
            margin-bottom: 20px;            
    
            img {
                width: 30px;            
            }
        }
    }
`;