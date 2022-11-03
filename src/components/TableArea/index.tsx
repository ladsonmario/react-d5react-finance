import { CategoryType, ItemsType } from '../../types/types';
import { TableItem } from '../TableItem';
import * as C from './styled';

type Props = {
    list: ItemsType[] | undefined;
    categories: CategoryType[];
}
export const TableArea = ({ list, categories }: Props) => {
    return (
        <C.Table>
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
                    <TableItem key={index} item={item} categories={categories} />
                ))}                
            </tbody>            
        </C.Table>
    );
}