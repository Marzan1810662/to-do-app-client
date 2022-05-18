import './App.css';
import Navbar from './Pages/Shared/Navbar';
import TodoList from './Pages/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoList />
    </div>
  );
}

export default App;
