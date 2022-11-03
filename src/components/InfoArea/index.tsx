import * as C from './styled';
import { UserType, ItemsType } from '../../types/types';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;    
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
    userInfo: UserType;
    setUser: React.Dispatch<UserType>;
    setList: React.Dispatch<ItemsType[]>
}
export const InfoArea = ({ setUser, setList, currentMonth, onMonthChange, income, expense, userInfo }: Props) => {
    const handleMonth = (action: string) => {
        let [year, month]: string[] = currentMonth.split('-');
        let currentDate: Date = new Date(parseInt(year), parseInt(month) - 1, 1);
        let monthManipulated = action === '-' ? +1 : -1;
        currentDate.setMonth( currentDate.getMonth() - monthManipulated );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleExit = () => {
        if(window.confirm('Deseja realmente sair?')) {
            setList([]);
            setUser(Object(null));

            window.location.reload();
        }
    }

    return (
        <C.Container>
            <div className="user--area">
                <div className="user--info">
                    <img src={userInfo.image} alt="" />
                    <span>Olá, <span>{userInfo.name}</span></span>
                </div> 
                <button onClick={handleExit}>Sair 🟢</button>               
            </div>
            <div className="info--area">
                <div className="month--area">
                    <div className="month--arrow" onClick={() => handleMonth('-')}>⬅️</div>
                    <div className="month--title">{formatCurrentMonth(currentMonth)}</div>
                    <div className="month--arrow" onClick={() => handleMonth('+')}>➡️</div>
                </div>
                <div className="resume--area">
                    <ResumeItem title="Receitas" value={income} />
                    <ResumeItem title="Despesas" value={expense} />
                    <ResumeItem title="Balanço" value={income - expense} color={(income - expense) < 0 ? 'red' : 'green'} />
                </div>
            </div>            
        </C.Container>
    );
}