//normally this file would be called store

//! getting started with redux

//^ Imports
import { createStore } from "redux";

//^ Declare Initial State
const initialState = {
  name: "Tobin",
  count: 0,
};

//^ Create reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.payload}
    default:
      return state;
  }
};

//^ create store using reducer function
const store = createStore(reducer);

//^ export store
export default store;
