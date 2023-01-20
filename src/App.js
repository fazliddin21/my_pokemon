import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
 const [pokName, setPokName] = useState("");
 const [pokemon, setPokemon] = useState({
  name: "",
  species: "",
  img: "",
  attack: "",
  defense: "",
  type: ""
 })

 const fetchPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokName}`)
  .then((rest) => {
   setPokemon({
    name: pokName,
    species: rest.data.species.name,
    img: rest.data.sprites.front_default,
    attack: rest.data.stats[1].base_stat,
    defense: rest.data.stats[2].base_stat,
    type: rest.data.types[0].type.name
   });
   console.log(rest)
  })
  .catch(() => {
   console.error("there is an error!")
  })
 }

 return (
  <>
   <h1 className="themeText">Pokemon App</h1>
   <div className="searchArea">
    <input 
     className="search"
     type="text"
     onChange={(evt) => {
      setPokName(evt.target.value);
     }}
    />
    <button onClick={fetchPokemon}>Search</button>
   </div>

   <div className="resultCard">
    <div className="card">
     <h1>{pokemon.name}</h1>
     <img src={pokemon.img} />
     <p>Species: {pokemon.species}</p>
     <h3>Attack: {pokemon.attack}</h3>
     <h4>Defense: {pokemon.defense}</h4>
     <p>Type: {pokemon.type}</p>
    </div>
   </div>
  </>
 );
};

export default App;