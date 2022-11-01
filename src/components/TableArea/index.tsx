import { ItemsType } from '../../types/types';
import { TableItem } from '../TableItem';
import * as C from './styled';

type Props = {
    list: ItemsType[] | undefined;
}
export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>                    
                </tr>
            </thead>
            <tbody>
                {list && list.length > 0 && list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    );
}