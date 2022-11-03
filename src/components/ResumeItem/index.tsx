import * as C from './styled';
import { convertRealFormat } from '../../helpers/assistant';

type Props = {
    title: string;
    value: number;
    color?: string;
}
export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container color={color as string}>
            <div className="resume--title">{title}</div>
            <div className="resume--value">{convertRealFormat(value)}</div>
        </C.Container>
    );
}