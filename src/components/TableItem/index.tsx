import { CategoryType, ItemsType } from '../../types/types';
import { formatDate } from '../../helpers/dateFilter';
import { convertRealFormat } from '../../helpers/assistant';
import * as C from './styled';
import { useEffect, useState } from 'react';

type Props = {
    item: ItemsType;
    categories: CategoryType[];
    delItem: (idItem: string) => void;
}
export const TableItem = ({ item, categories, delItem }: Props) => {
    const [cat, setCat] = useState<CategoryType[] | undefined>();

    useEffect(() => {
        if(categories) {
            const catFilter = categories.filter(cat => cat.slug.toString() === item.category);
            setCat(catFilter);               
        }
    }, [item]);

    const handleDelItem = (item: ItemsType) => {
        if(window.confirm(`Deseja excluir o item "${item.title}" com valor de ${convertRealFormat(item.value)}?`)) {
            delItem(item.id as string);
        }        
    }

    return (
        <>
            {cat && cat.map((cat, index) => (
                <C.TableLine key={index} onClick={() => handleDelItem(item)}>
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
        </>
    );
}