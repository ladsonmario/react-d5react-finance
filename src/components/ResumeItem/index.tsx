import * as C from './styled';

type Props = {
    title: string;
    value: number;
    color?: string;
}
export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <C.Container color={color as string}>
            <div className="resume--title">{title}</div>
            <div className="resume--value">R$ {value}</div>
        </C.Container>
    );
}