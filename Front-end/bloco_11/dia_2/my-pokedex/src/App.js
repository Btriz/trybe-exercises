import './App.css';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Pokedex list={ pokemonList } />
      </main>
    </div>
  );
}

export default App;
