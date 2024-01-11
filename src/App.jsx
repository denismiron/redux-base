import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)
  const customers = useSelector((state) => state.customers.customers);
 
  
  const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})
  }

  const removeCash = (cash) => {
      dispatch({ type: "REMOVE_CASH", payload: cash});
  }

  const addCustomer = (name) => {
      const customer = {
        name,
        id: Date.now(),
      }
      dispatch({type: "ADD_CUSTOMER", payload: customer})
  }

  const removeCustomer = (customer) =>{
    dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
  }

  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{ display: "flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button onClick={() => removeCash(Number(prompt()))}>Снять со счёта</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => removeCash(Number(prompt()))}>Удалить клиента</button>
      </div>
      {customers.length > 0 
      ? <div>
        {customers.map(customer => 
          <div onClick={() => removeCustomer(customer)}>
            {customer.name}
          </div>
        )}
      </div>
      : <div style = {{fontSize: '5rem', marginTop: '20px'}}>
        Клиентов нет
      </div>
      }
    </div>
  );
}

export default App;
