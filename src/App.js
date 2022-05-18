import './App.css';
import Navbar from './Pages/Shared/Navbar';
import TodoList from './Pages/TodoList/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoList />
      <ToastContainer/>
    </div>
  );
}

export default App;
