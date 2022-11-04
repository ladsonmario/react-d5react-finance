import { useState, ChangeEvent } from 'react';
import { CategoryType, ItemsType, PriceValuesType } from '../../types/types';
import { NumericFormat, OnValueChange } from 'react-number-format';
import * as C from './styled';

type Props = {
    onAddItem: (item: ItemsType) => void;
    categories: CategoryType[] | undefined;
}
export const InputArea = ({ onAddItem, categories }: Props) => {  
    const [date, setDate] = useState<Date>();
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<any>('');    

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {                
        setDate(new Date(`${e.target.value}T12:00:00`));        
    }
    const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }
    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }    
    const handlePrice = (values: PriceValuesType) => {        
        const { value } = values;
        setValue(value);
    }
    
    const handleSubmit = async () => {        
        if(title && date && category && value) {
            
            const newItem: ItemsType = {
                title, category, value, date
            }
            onAddItem(newItem); 
            setTitle('');
            setValue({ formattedValue: `R$ `, value: `${null}`, floatValue: null });
            setCategory('');             
            alert(`Item ${title} adicionado com sucesso!`);            
        } else {
            alert('Preencha todos os campos!');
        }
    }    

    return (
        <C.Container>                        
            <div className="add--item">
                <div className="input--area">
                    <div className="input--group">
                        <div className="input--container">
                            <label htmlFor="date--input">Data</label>
                            <input type="date" id="date--input" onChange={handleDate} />
                        </div>
                        <div className="input--container">
                            <label htmlFor="cat--input">Categoria</label>
                            <select id="cat--input" value={category} onChange={handleCategory}>
                                <option value="">Selecione uma categoria</option>
                                {categories && categories.length > 0 && categories.map((item, index) => (
                                    <option key={index} value={item.slug.toString()}>{item.title.toString()}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="input--group">
                        <div className="input--container">
                            <label htmlFor="title--input">Título</label>
                            <input type="text" id="title--input" value={title} onChange={handleTitle} />
                        </div>
                        <div className="input--container">
                            <label htmlFor="value--input">Valor</label>                        
                            <NumericFormat 
                                type="text"
                                prefix="R$ "
                                decimalSeparator=","
                                thousandSeparator="."                            
                                value={value.value}
                                onValueChange={handlePrice as OnValueChange}
                                placeholder="R$ "
                            />
                        </div>
                    </div>
                    <div className="input--button">
                        <div className="input--container">
                            <label>⠀⠀⠀</label>
                            <input type="button" value="Adicionar" onClick={handleSubmit} />
                        </div>
                    </div>                    
                </div>
            </div>
        </C.Container>
    );
}