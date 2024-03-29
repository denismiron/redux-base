const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMERS:
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) };
    default:
      return state; //если action
  }
};

export const addCustomerAction = (payolad) => ({ type: ADD_CUSTOMER, payolad }) 
export const removeCustomersAction = (payolad) => ({ type: REMOVE_CUSTOMERS, payolad }); 