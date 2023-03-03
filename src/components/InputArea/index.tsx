import { ChangeEvent, Dispatch } from 'react';
import { CategoryType, ItemsType, PriceValuesType } from '../../types/types';
import { NumericFormat, OnValueChange } from 'react-number-format';
import * as C from './styled';

type Props = {
    onAddItem: (item: ItemsType) => void;
    categories: CategoryType[] | undefined;
    date: string;
    setDate: Dispatch<string>;
    category: string;
    setCategory: Dispatch<string>;
    title: string;
    setTitle: Dispatch<string>;
    value: any;
    setValue: Dispatch<any>;
    editItem: (idItem: string, title: string, value: any, category: string ) => void;
    itemSelected: ItemsType | null;
    setItemSelected: Dispatch<ItemsType | null>;
}
export const InputArea = ({ onAddItem, categories, date, setDate, category, setCategory, title, setTitle, value, setValue, editItem, itemSelected, setItemSelected }: Props) => { 
    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {         
        setDate(e.target.value);                
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
                title, category, value, date: new Date(`${date}T20:00:00`)
            }
            onAddItem(newItem); 
            setTitle('');
            setValue({ formattedValue: `R$ `, value: `${null}`, floatValue: null });
            setCategory('');        
            setDate('');
            alert(`Item ${title} adicionado com sucesso!`);            
        } else {
            alert('Preencha todos os campos!');
        }
    }    

    const handleEditItem = () => {
        if(itemSelected) {            
            document.querySelector('body')?.scrollTo({ top: 0 });
            setTitle('');
            setValue({ formattedValue: `R$ `, value: '', floatValue: null });
            setCategory('');        
            setDate('');
            alert(`Item ${title} atualizado com sucesso!`);
            editItem(itemSelected.id as string, title, value, category);
            setItemSelected(null);
        }
    }

    return (
        <C.Container>                        
            <div className="add--item">
                <div className="input--area">
                    <div className="input--group">
                        <div className="input--container">
                            <label htmlFor="date--input">Data</label>
                            <input type="date" id="date--input" value={date} onChange={handleDate} disabled={itemSelected?.id ? true : false} />
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
                            <input type="button" value={itemSelected?.id ? 'Salvar' : 'Adicionar'} onClick={itemSelected?.id ? handleEditItem : handleSubmit} />
                        </div>
                    </div>                    
                </div>
            </div>
        </C.Container>
    );
}