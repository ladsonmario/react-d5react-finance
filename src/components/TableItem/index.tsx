import { ItemsType } from '../../types/types';
import { formatDate } from '../../helpers/dateFilter';
import { Categories } from '../../data/categories';
import * as C from './styled';

type Props = {
    item: ItemsType;
}
export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn color={Categories[item.category].color}>
                <span className="category--container">
                    {Categories[item.category].title}
                </span>                
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn color={Categories[item.category].expense ? 'red' : 'green'}>
                <span className="category--value">R$ {item.value}</span>
            </C.TableColumn>
        </C.TableLine>
    );
}