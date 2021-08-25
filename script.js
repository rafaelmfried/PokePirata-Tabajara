let nomes = [];
let pokemons = [];

function fetchPokemon(nome) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  .then((r) => r.json())
  .then(({ abilities, stats }) => {
    return ({ abilities, stats });
  });
}

const fetchAPI = fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
.then((r) => r.json())
.then((r) =>  dadosIniciais = r.results)
.then((r) => r.forEach((poke) => nomes.push(poke.name)))
.then(() => nomes.forEach(async (nome) => {
  pokemons.push([nome, await fetchPokemon(nome)]);
}))
/*.then(() => criaListaPokemons(nomes))*/
.then(() => console.log(nomes))
.then(() => console.log(pokemons)); 
