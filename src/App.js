import logo from './logo.svg';
import Battlemon from './Battlemon.js'
import pokeball from './Images/poke-ball.png';
import { useState } from 'react'
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
  const pokemon = GeneratePokemon();
  const [player1, setPlayer1] = useState(null)
  return (
      <div className="Menu-header">
        <img src={pokeball} className="Menu-image"></img>
        <h1>Battlemon Game</h1>
        <div>
          
          <h5>Choose Player 1</h5>
          {pokemon.map((mon) => (
            <Button mon={mon} key={mon.id} />
          ))}
        </div>
        
      </div>
  )
}

function Button({mon}) {
  return (
    <button className="Button" onClick={() => console.log("CLICKED")}>
      {mon.name}
    </button>
  )
}

function GeneratePokemon() {
  const pokemon = [
    new Battlemon(
      13, "Pikachu", 1, 1, 1
    ),
    new Battlemon(
      1, "Bulbasaur", 2, 1, 2
    ),
    new Battlemon(
      390, "Chimchar", 3, 4, 1
    )
  ];

  return pokemon;
}

export default App;