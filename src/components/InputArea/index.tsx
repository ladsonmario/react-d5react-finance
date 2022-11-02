import { SyntheticEvent } from 'react';
import { CategoryType, ItemsType } from '../../types/types';
import * as C from './styled';

type Props = {
    onAddItem: (item: ItemsType) => void;
    categories: CategoryType[] | undefined;
}
export const InputArea = ({ onAddItem, categories }: Props) => {    
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <C.Container>
            <form onSubmit={handleSubmit}>
                <div className="input--area">
                    <div className="input--container">
                        <label htmlFor="date--input">Data</label>
                        <input type="date" id="date--input" />
                    </div>
                    <div className="input--container">
                        <label htmlFor="cat--input">Categoria</label>
                        <select id="cat--input">
                            {categories && categories.length > 0 && categories.map((item, index) => (
                                <option key={index} value={item.slug.toString()}>{item.title.toString()}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input--container">
                        <label htmlFor="title--input">Título</label>
                        <input type="text" id="title--input" />
                    </div>
                    <div className="input--container">
                        <label htmlFor="value--input">Valor</label>
                        <input type="number" id="value--input" />
                    </div>
                    <div className="input--container">
                        <label>⠀⠀⠀</label>
                        <input type="submit" value="Adicionar" />
                    </div>
                </div>
            </form>
        </C.Container>
    );
}