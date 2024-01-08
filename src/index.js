import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "redux";
import { Provider } from 'react-redux';


// const action = {type:"", payload: "?"}

const defaultState = {
    cash: 0,
}

const reducer = (state = defaultState, action) =>{
    switch (action.type){
      case "ADD_CASH":
        return {...state, cash: state.cash + action.payload}
      case "REMOVE_CASH":
        return {...state, cash: state.cash - action.payload };
      default: 
        return state //если action
    }
}

const store = configureStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


