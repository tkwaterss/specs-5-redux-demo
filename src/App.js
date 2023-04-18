import logo from "./logo.svg";
import "./App.css";

//! Redux imports
import { useSelector, useDispatch } from "react-redux";

function App() {
  //^ getting state values to display
  const name = useSelector((state) => state.name);

  const dispatch = useDispatch();

  const handleClick = () => {
    let nameArr = ['Tobin', 'Jeremy', 'Billy', 'Bobby', 'Timmy', 'Tommy']
    let newName = nameArr[Math.floor(Math.random() * nameArr.length)]
    dispatch({ type: "CHANGE_NAME", payload: newName });
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
