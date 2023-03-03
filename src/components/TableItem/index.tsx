import { Dispatch } from 'react';
import { CategoryType, ItemsType } from '../../types/types';
import { formatDate } from '../../helpers/dateFilter';
import { convertRealFormat, addZeroInHora } from '../../helpers/assistant';
import * as C from './styled';
import { useEffect, useState } from 'react';

type Props = {
    item: ItemsType;
    setList: Dispatch<ItemsType[]>;
    categories: CategoryType[];
    delItem: (idItem: string) => void;    
    setDate: Dispatch<string>;    
    setCategory: Dispatch<string>;    
    setTitle: Dispatch<string>;    
    setValue: Dispatch<any>;
    itemSelected: ItemsType | null;
    setItemSelected: Dispatch<ItemsType | null>;    
}
export const TableItem = ({ item, categories, delItem, setDate, setCategory, setTitle, setValue, itemSelected, setItemSelected }: Props) => {
    const [cat, setCat] = useState<CategoryType[] | undefined>([]);    
    const [modalOpening, setModalOpening] = useState(false);    

    useEffect(() => {
        if(categories) {
            const catFilter = categories.filter(cat => cat.slug.toString() === item.category);
            setCat(catFilter);               
        }
    }, [item]);

    const handleDelItem = () => {
        if(window.confirm(`Deseja excluir o item "${itemSelected?.title}" com valor de ${convertRealFormat(Number(itemSelected?.value))}?`)) {
            delItem(itemSelected?.id as string);
            setItemSelected(null);
            setModalOpening(false);
        }        
    }

    const openModal = () => {
        if(item.id !== itemSelected?.id) {
            setItemSelected(item);
            setModalOpening(true);
        }
    }

    const closeModal = () => {
        setTitle('');
        setValue({ formattedValue: `R$ `, value: '', floatValue: null });
        setCategory('');        
        setDate('');
        setItemSelected(null);
        setModalOpening(false);
    }

    const handlEditItem = () => {
        const scrollHTML = document.querySelector('html');                
        
        if(item) {                                                
            setTitle(item.title);
            setCategory(item.category);
            setValue({ value: `${item.value}`.replace('.', ',') });            
            setDate(
                `${item.date.getFullYear()}-${addZeroInHora(item.date.getMonth() + 1)}-${addZeroInHora(item.date.getDate())}`
            );            
            setModalOpening(false); 
            setTimeout(() => {
                scrollHTML?.scrollTo({ top: 100, behavior: 'smooth' });        
            }, 300);
        }
    }

    return (
        <>
            {cat && cat.map((cat, index) => (
                <C.TableLine 
                    key={index} 
                    onClick={openModal} 
                    item={itemSelected?.id === item.id}
                    editItem={itemSelected?.id ? true : false}
                >
                    <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
                    <C.TableColumn color={cat.color.toString()}>
                        <span className="category--container">                        
                            {cat.title.toString()}                       
                        </span>                
                    </C.TableColumn>            
                    <C.TableColumn break>{item.title}</C.TableColumn>
                    <C.TableColumn color={cat.slug.toString() !== 'salary' ? 'red' : 'green'}>
                        <span className="category--value">{convertRealFormat(item.value)}</span>
                    </C.TableColumn>
                </C.TableLine>
            ))}
            {modalOpening &&
                <C.ButtonCoitaner>
                    <div>
                        <span onClick={closeModal}>&#x2715;</span>
                        <C.Button color="#3d37eb" onClick={handlEditItem}>Editar</C.Button>
                        <C.Button color="#d91f16" onClick={handleDelItem}>Excluir</C.Button>
                    </div>
                </C.ButtonCoitaner>
            }
        </>
    );
}