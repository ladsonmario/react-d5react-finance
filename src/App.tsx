import { useState, useEffect } from 'react';
import * as C from './App.styled';
import { Items } from './data/items';
import { Categories } from './data/categories';
import { ItemsType, UserType, UserLoginType, CategoryType } from './types/types';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { Login } from './components/Login';
import { useAPI } from './firebase/api';

const App = () => {
  const [user, setUser] = useState<UserType>();
  const [list, setList] = useState<ItemsType[]>(Items);  
  const [categories, setCategories] = useState<CategoryType[] | undefined>();
  const [currentMonth, setCurrentMonth] = useState<string>(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<ItemsType[] | undefined>();
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );    
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount: number = 0;
    let expenseCount: number = 0;

    for(let i in filteredList) {
      if(Categories[filteredList[parseInt(i)].category].expense) {
        expenseCount += filteredList[parseInt(i)].value;
      } else {
        incomeCount += filteredList[parseInt(i)].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  useEffect(() => {
    if(user) {
      ( async () => {
        const cat: CategoryType[] = await useAPI.getCategories();
        setCategories(cat);
      })();
    }
  }, [user]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: ItemsType) => {
    let newList: ItemsType[] = [...list];
    newList.push(item);
    setList(newList);
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

        <TableArea list={filteredList} />
        
      </section>
    </C.Container>
  );
}

export default App;