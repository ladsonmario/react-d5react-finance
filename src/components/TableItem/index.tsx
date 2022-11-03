import { CategoryType, ItemsType } from '../../types/types';
import { formatDate } from '../../helpers/dateFilter';
import { convertRealFormat } from '../../helpers/assistant';
import * as C from './styled';
import { useEffect, useState } from 'react';

type Props = {
    item: ItemsType;
    categories: CategoryType[];
}
export const TableItem = ({ item, categories }: Props) => {
    const [cat, setCat] = useState<CategoryType[] | undefined>();

    useEffect(() => {
        if(categories) {
            const catFilter = categories.filter(cat => cat.slug.toString() === item.category);
            setCat(catFilter);               
        }
    }, [item]);

    return (
        <>
            {cat && cat.map((cat, index) => (
                <C.TableLine key={index}>
                    <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
                    <C.TableColumn color={cat.color.toString()}>
                        <span className="category--container">                        
                            {cat.title.toString()}                       
                        </span>                
                    </C.TableColumn>            
                    <C.TableColumn>{item.title}</C.TableColumn>
                    <C.TableColumn color={cat.slug.toString() !== 'salary' ? 'red' : 'green'}>
                        <span className="category--value">{convertRealFormat(item.value)}</span>
                    </C.TableColumn>
                </C.TableLine>
            ))}
        </>
    );
}