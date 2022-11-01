import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 15px;
    margin-top: -40px;
    display: flex;
    flex-direction: column;

    .user--area {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px dotted #ccc;

        .user--info {
            display: flex;
            align-items: center;
            gap: 10px;

            img {
                border-radius: 50%;
                width: 50px;
                height: 50px;
                box-shadow: 0 0 5px #ddd;                
            }

            span {
                font-size: 18px;

                span {                    
                    font-weight: 700;
                    color: #1FAB89;
                }
            }
        }

        button {
            background: none;
            border: 0;
            outline: 0;
            cursor: pointer;
            font-size: 16px;            
        }
    }

    .info--area {
        display: flex;
        align-items: center;

        .month--area {
            display: flex;
            align-items: center;
            flex: 1;
    
            .month--arrow {
                width: 40px;            
                cursor: pointer;
                font-size: 25px;
                text-align: center;
            }
    
            .month--title  {
                flex: 1;
                text-align: center;
            }
        }
    
        .resume--area {
            flex: 2;
            display: flex;
        }
    }
`;