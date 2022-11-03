import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 15px;
    margin-top: 20px;

    .add--item {
        width: 100%;

        .input--area {
            display: flex;  
            gap: 10px;          

            .input--group {
                width: 100%;
                display: flex; 
                justify-content: center;
                gap: 10px;               
            }

            .input--container {
                display: flex;
                flex-direction: column;
                
                .input--group {
                    display: flex;
                }
                
                label {
                    font-weight: 700;
                    font-size: 18px;
                    margin-bottom: 5px;
                }

                input, select {
                    width: 100%;
                    height: 30px;
                    font-size: 16px;
                    padding: 0 5px;
                    outline: 0;
                    border-radius: 5px;
                    border: 1px solid #ddd;

                    &[type="button"] {
                        background-color: #1FAB89;
                        color: #D7FBE8;
                        text-transform: uppercase;
                        font-weight: 700;
                        border: 0;

                        &:hover {
                            background-color: #62D2A2;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 600px) {
        .input--area {
            flex-direction: column;

            .input--group {                
                .input--container {
                    width: 100%;
                }

                .input--container input, select { 
                    height: 40px !important;
                }
            }

            .input--button input[type="button"] {
                height: 50px;
            }
        }
    }
`;