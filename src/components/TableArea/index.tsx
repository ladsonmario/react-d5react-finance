import { Dispatch } from 'react';
import { CategoryType, ItemsType } from '../../types/types';
import { TableItem } from '../TableItem';
import * as C from './styled';

type Props = {
    list: ItemsType[] | undefined;
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
export const TableArea = ({ list, setList, categories, delItem, setDate, setCategory, setTitle, setValue, itemSelected, setItemSelected }: Props) => {
    return (
        <C.Table itemEdit={itemSelected?.id ? true : false}>
            <thead>
                <tr>
                    <C.TableHeadColumn width={110}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>                    
                </tr>
            </thead>
            <tbody>
                {list && list.length > 0 && list.map((item, index) => (
                    <TableItem 
                        key={index} 
                        item={item} 
                        categories={categories} 
                        delItem={delItem}                         
                        setDate={setDate}                        
                        setCategory={setCategory}                        
                        setTitle={setTitle}                        
                        setValue={setValue}
                        setList={setList}                        
                        itemSelected={itemSelected as ItemsType | null}
                        setItemSelected={setItemSelected}                        
                    />
                ))}                            
            </tbody>            
        </C.Table>
    );
}