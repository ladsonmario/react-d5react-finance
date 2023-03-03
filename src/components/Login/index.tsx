import * as C from './styled';
import { useAPI } from '../../firebase/api';
import { ResultLoginType, UserLoginType } from '../../types/types';
import { useState } from 'react';

type Props = {
    onLoginFacebookData: (user: UserLoginType) => void;
}
export const Login = ({ onLoginFacebookData }: Props) => {
    const [loading, setLoading] = useState(false);

    const handleLoginFacebook = async () => {
        if(!loading) {
            setLoading(true);
            const result = await useAPI.fbPopup() as ResultLoginType;
    
            if(result.user) {
                onLoginFacebookData(result.user);
            } else {
                alert('Ocorreu algum erro com seu Login!');
            }
            
            setTimeout(() => setLoading(false), 2000);
        }
    }

    return (
        <C.Container loading={loading}>
            <div className="container--items">
                <img className="logo--img" src="/ico-512.png" />
                <div className="title">
                    Bem-vindo(a) ao <br/>
                    LadayWeb Finanças
                    <img src="/service.gif" />
                </div>
                <button onClick={handleLoginFacebook}>
                    login com Facebook
                    <img src="/face.svg" />
                </button>
                {loading &&
                    <img className="loading-gif" src="/loading-gif.gif" />
                }
            </div>            
        </C.Container>
    );
}