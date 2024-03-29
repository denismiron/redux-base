const defaultState = {
    cash: 0,
}
 
export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "REMOVE_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state; //если action
  }
};
