import './App.css';
import Navbar from './Pages/Shared/Navbar';
import TodoList from './Pages/TodoList/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<TodoList />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<TodoList />}></Route>
      </Routes>
      
      <ToastContainer/>
    </div>
  );
}

export default App;
