import logo from './logo.svg';
import './App.css';

const ToDo = ['Comprar coisas', 'Regar plantas', 'Dizer algo'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {ToDo.map(task => Task(task))}
    </ol>
  );
}

export default App;
