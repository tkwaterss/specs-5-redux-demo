import { createStore } from "redux";

const initialState = {
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return { ...state, employees: [...state.employees, action.payload] };
    case "ADD_NOTE":
      let newEmployeeState = [...state.employees]
      newEmployeeState[action.payload.id].notes = [
        ...newEmployeeState[action.payload.id].notes,
        action.payload.newNote
      ];
      return {...state, employees: newEmployeeState}
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
