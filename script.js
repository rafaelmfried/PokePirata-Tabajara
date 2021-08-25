function pegaDados(dados) {
  console.log(dados);
}

function fetchPokemon(nome) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  .then((r) => r.json())
  .then((r) => pegaDados(r))
  .then((r) => r);
}

function criaListaPokemons(lista) {
  const pokemons = lista.reduce((acc, curr) => {
    acc[curr.name] = fetchPokemon(curr.name);
    return acc;
  }, {});
  console.log(pokemons);
}

const fetchAPI = fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
.then((r) => r.json())
.then((r) => criaListaPokemons(r.results));
