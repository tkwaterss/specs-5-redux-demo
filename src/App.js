import logo from "./logo.svg";
import "./App.css";

//! Redux imports
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AdminScreen from './screens/AdminScreen';
import AddEmployeeScreen from './screens/AddEmployeeScreen'
import EmployeeScreen from './screens/EmployeeScreen'

function App() {


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<AdminScreen />}></Route>
        <Route path="/new" element={<AddEmployeeScreen />}></Route>
        <Route path="/employee/:id" element={<EmployeeScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
