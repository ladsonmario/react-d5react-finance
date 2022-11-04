import * as C from './styled';
import { useAPI } from '../../firebase/api';
import { ResultLoginType, UserLoginType } from '../../types/types';

type Props = {
    onLoginFacebookData: (user: UserLoginType) => void;
}
export const Login = ({ onLoginFacebookData }: Props) => {
    const handleLoginFacebook = async () => {
        const result = await useAPI.fbPopup() as ResultLoginType;

        if(result.user) {
            onLoginFacebookData(result.user);
        } else {
            alert('Ocorreu algum erro com seu Login!');
        }
    }

    return (
        <C.Container>
            <div className="title">
                LadayWeb Finanças
                <img src="/service.gif" />
            </div>
            <button onClick={handleLoginFacebook}>
                Fazer login com Facebook
                <img src="/face.svg" />
            </button>
        </C.Container>
    );
}