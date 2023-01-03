import logo from './logo.svg';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<EmployeeList />}/>
          <Route path='/employees/add' element={<AddEmployee />} />
          <Route path='/employees/:empID/update' element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
