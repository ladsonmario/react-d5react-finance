import { useState, useEffect } from 'react';
import * as C from './App.styled';
import { ItemsType, UserType, UserLoginType, CategoryType } from './types/types';
import { getCurrentMonth, filterListByMonth, formatCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { Warning } from './components/Warning';
import { Login } from './components/Login';
import { useAPI } from './firebase/api';

const App = () => {
  const [user, setUser] = useState<UserType>();
  const [list, setList] = useState<ItemsType[]>([]);  
  const [categories, setCategories] = useState<CategoryType[]>();
  const [currentMonth, setCurrentMonth] = useState<string>(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<ItemsType[] | undefined>();
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(list) {      
      setFilteredList( filterListByMonth(list, currentMonth) );      
    }    
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount: number = 0;
    let expenseCount: number = 0;

    if(filteredList) {
      for(let i = 0; i < filteredList.length; i++) {
          if(filteredList[i].expense) {
            expenseCount += Number(filteredList[i].value);
          } else {
            incomeCount += Number(filteredList[i].value);
          }        
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  useEffect(() => {
    if(user) {
      ( async () => {
        await getCategories();
        await updateListItems();
      })();
    }
  }, [user]);

  const updateListItems = async () => {
    if(user) {
      setList([]);
      const list: ItemsType[] = await useAPI.getListItems(user.finance);
      setList(list);
    }
  }

  const getCategories = async () => {
    const cat: CategoryType[] = await useAPI.getCategories();
    setCategories(cat);
  }

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = async (item: ItemsType) => {
    if(user) {
      await useAPI.addItem(user, item);
      await updateListItems();      
    }    
  }

  const handleLoginData = async (user: UserLoginType) => {
    const newUser: UserType = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      finance: `f_${user.uid}`
    }

    await useAPI.addUser(newUser);
    setUser(newUser);
  }

  const handleDelItem = async (idItem: string) => {
    if(user) {
      await useAPI.delItem(user.finance, idItem);
      await updateListItems();
    }
  }

  if(!user) {
    return <Login onLoginFacebookData={handleLoginData} />
  }

  return (
    <C.Container>
      <header>
        <h1>Sistema Financeiro</h1>
      </header>
      <section>

        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense} userInfo={user} />

        <InputArea onAddItem={handleAddItem} categories={categories} />

        {filteredList && filteredList.length > 0 &&
          <>          
            <Warning content="Para excluir um item da sua lista clique sobre ele e confirme!" />
            <TableArea list={filteredList} categories={categories as CategoryType[]} loading={loading} delItem={handleDelItem} />
          </>
        }        
        {!loading && filteredList?.length === 0 &&
          <Warning content={`"Não há receitas e/ou despesas no mês de ${formatCurrentMonth(currentMonth)}..."`} />
        }
      </section>
    </C.Container>
  );
}

export default App;