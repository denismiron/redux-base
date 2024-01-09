import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)
  console.log(cash)
  const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})
  }

  const removeCash = (cash) => {
      dispatch({ type: "REMOVE_CASH", payload: cash});
  }
  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{ display: "flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button onClick={() => removeCash(Number(prompt()))}>Снять со счёта</button>
      </div>
    </div>
  );
}

export default App;
