import styled from 'styled-components';

export const TableLine = styled.tr<{ item: boolean, editItem: boolean }>`
    cursor: ${p => p.item ? 'not-allowed;' : 'pointer;'}
    ${p => p.item ? 'opacity: 1;': 'opacity: 0.2;'}                
    ${p => !p.editItem ? 'opacity: 1;' : null}
    background-color: ${p => p.item ? '#efefef;' : '#fff;'}

    &:nth-child(odd) {
        background-color: #efefef;
    }

    &:hover {        
        color: ${p => p.item ? '#000;' : '#00f;'}
        opacity: 1;        
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

export const ButtonCoitaner = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.4);  
    opacity: 1;
    z-index: 1;  

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: relative;
        margin: 0 10px;
        max-width: 400px;
        height: 150px;
        width: 100%;
        padding: 15px; 
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 20px 0px rgb(0 0 0 / 90%);         
        
        span {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all ease .3s;
            font-size: 30px;
            color: #aaa;
            cursor: pointer;

            &:hover {
                background-color: rgba(222, 222, 222, 0.7);
                color: #444;
            }
        }
    }
`;

export const Button = styled.button<{ color: string }>`
    outline: 0;
    border: 0;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    background-color: ${p => p.color};    

    &:hover {
        opacity: .9;
    }
`;