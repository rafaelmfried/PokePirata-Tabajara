let nomes = [];
let pokemons = [];
let player = [];

function createPlayer() {
  const n = Math.ceil(Math.random() * 50);
  console.log(pokemons);
  player.push(pokemons[1]);
  console.log(pokemons[0]);
}

function fetchPokemon(nome) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  .then((r) => r.json())
  .then(({ abilities, stats }) => {
    return ({ abilities, stats });
  });
}

async function fetchAPI() {
  const fetched = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
  const json = await fetched.json();
  const results = json.results;  
  results.forEach((poke) => nomes.push(poke.name));
  nomes.forEach(async (nome) => {
    pokemons.push([nome, await fetchPokemon(nome)]);
  })
  /*.then(() => criaListaPokemons(nomes))
  .then(() => console.log(nomes))*/
  console.log(pokemons);
  createPlayer();
} 

fetchAPI();