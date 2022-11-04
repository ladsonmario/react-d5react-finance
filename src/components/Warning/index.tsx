import * as C from './styled';

type Props = {
    content: string;
}

export const Warning = ({ content }: Props) => {
    return (
        <C.Container>{content}</C.Container>
    );
}