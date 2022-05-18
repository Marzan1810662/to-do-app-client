import './App.css';
import Navbar from './Pages/Shared/Navbar';
import TodoList from './Pages/TodoList/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={
          <RequireAuth>
            <TodoList />
          </RequireAuth>
        }></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
