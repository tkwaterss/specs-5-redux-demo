import { createStore } from "redux";

const initialState = {
  employees: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ""
    //   return
    default:
      return state;
  }
};

const store = createStore(reducer)

export default store;