import logo from './logo.svg';
import pokeball from './Images/poke-ball.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
    </div>
  );
}

function Menu() {
  return (
      <div className="Menu-header">
        <img src={pokeball} className="Menu-image"></img>
        Battlemon Game
        <div>
          <Button mon={new Battlemon("Pikachu", 1, 1, 1, 1)} />
          <Button mon={new Battlemon("Seviper", 1, 1, 1, 1)} />

        </div>
      </div>
  )
}

function Button({mon}) {
  return (
    <div className="Button">
      {mon.name}
    </div>
  )
}

class Battlemon {
  constructor(name, health, level, atk, def) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = atk;
    this.defence = def
  }
}

export default App;
