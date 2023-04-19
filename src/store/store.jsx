import { createStore } from "redux";

const initialState = {
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {...state, employees: [...state.employees, action.payload]}
    default:
      return state;
  }
};

const store = createStore(reducer)

export default store;