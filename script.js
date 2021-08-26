let nomes = [];
let pokemons = [];
let player = {
  nome: 'Ash',
};
const mockPokemons = [
  [
    "bulbasaur",
    {
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "charmander",
    {
      abilities: [
        {
          ability: {
            name: "blaze",
            url: "https://pokeapi.co/api/v2/ability/66/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "solar-power",
            url: "https://pokeapi.co/api/v2/ability/94/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 39,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 52,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 43,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 60,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "pikachu",
    {
      abilities: [
        {
          ability: {
            name: "static",
            url: "https://pokeapi.co/api/v2/ability/9/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "lightning-rod",
            url: "https://pokeapi.co/api/v2/ability/31/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 55,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "squirtle",
    {
      abilities: [
        {
          ability: {
            name: "torrent",
            url: "https://pokeapi.co/api/v2/ability/67/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "rain-dish",
            url: "https://pokeapi.co/api/v2/ability/44/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 44,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 48,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 64,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 43,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "venusaur",
    {
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 82,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 83,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 100,
          effort: 2,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 100,
          effort: 1,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "caterpie",
    {
      abilities: [
        {
          ability: {
            name: "shield-dust",
            url: "https://pokeapi.co/api/v2/ability/19/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "run-away",
            url: "https://pokeapi.co/api/v2/ability/50/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 45,
          effort: 1,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "kakuna",
    {
      abilities: [
        {
          ability: {
            name: "shed-skin",
            url: "https://pokeapi.co/api/v2/ability/61/",
          },
          is_hidden: false,
          slot: 1,
        },
      ],
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 50,
          effort: 2,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "rattata",
    {
      abilities: [
        {
          ability: {
            name: "run-away",
            url: "https://pokeapi.co/api/v2/ability/50/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "guts",
            url: "https://pokeapi.co/api/v2/ability/62/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "hustle",
            url: "https://pokeapi.co/api/v2/ability/55/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 30,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 56,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 25,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 72,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "golbat",
    {
      abilities: [
        {
          ability: {
            name: "inner-focus",
            url: "https://pokeapi.co/api/v2/ability/39/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "infiltrator",
            url: "https://pokeapi.co/api/v2/ability/151/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 75,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 70,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 75,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 90,
          effort: 2,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
  [
    "vulpix",
    {
      abilities: [
        {
          ability: {
            name: "flash-fire",
            url: "https://pokeapi.co/api/v2/ability/18/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "drought",
            url: "https://pokeapi.co/api/v2/ability/70/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 38,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 41,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
    },
  ],
];

function createPlayer() {
<<<<<<< HEAD
  const n = Math.ceil(Math.random() * 50);
  // console.log(pokemons.length);
  player.push(pokemons[1]);
  // console.log(pokemons[0]);
=======
  const n = Math.floor(Math.random() * 10);
  player.pokemon = mockPokemons[n];
  //  console.log(player);
>>>>>>> d010a830ef0a84499ee6118b69ba6d76bfeb104d
}

createPlayer();

function fetchPokemon(nome) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then((r) => r.json())
    .then(({ abilities, stats }) => {
      return { abilities, stats };
    });
}

async function fetchAPI() {
  const fetched = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  const json = await fetched.json();
  const results = json.results;
  results.forEach((poke) => nomes.push(poke.name));
  nomes.forEach(async (nome) => {
    pokemons.push([nome, await fetchPokemon(nome)]);
<<<<<<< HEAD
  })
  /*.then(() => criaListaPokemons(nomes))
  .then(() => console.log(nomes))*/
  // console.log(pokemons);
  createPlayer();
} 
=======
  });
  //  console.log(pokemons);
}

fetchAPI();

function luta(oponente) {
  const nomeOponente = oponente[0];
  let hpOponente = oponente[1].stats[0].base_stat;
  const ataqueOponente = oponente[1].stats[1].base_stat;
  const defesaOponente = oponente[1].stats[2].base_stat;
  const velocidadeOponente = oponente[1].stats[5].base_stat;
  const pokemon = player.pokemon[0];
  let hpPokemon = player.pokemon[1].stats[0].base_stat;
  const ataquePokemon = player.pokemon[1].stats[1].base_stat;
  const defesaPokemon = player.pokemon[1].stats[2].base_stat;
  const velocidadePokemon = player.pokemon[1].stats[5].base_stat;
  //  console.log(oponente);
  console.log(`Oponente = ${nomeOponente}`);
  console.log(`HP = ${hpOponente}`);
  console.log(`Ataque = ${ataqueOponente}`);
  console.log(`Velocidade = ${velocidadeOponente}`);
  console.log(`Defesa = ${defesaOponente}`);
  console.log(`Pokemón do ${player.nome} é: ${pokemon}`);
  console.log(`HP = ${hpPokemon}`);
  console.log(`Ataque = ${ataquePokemon}`);
  console.log(`Velocidade = ${velocidadePokemon}`);
  console.log(`Defesa = ${defesaPokemon}`);
  do {
    const golpePokemon = parseFloat((Math.random() * ataquePokemon / 6 * velocidadePokemon / defesaOponente).toFixed(0));
    hpOponente = hpOponente - golpePokemon;
    const golpeOponente = parseFloat((Math.random() * ataqueOponente / 6 * velocidadeOponente / defesaPokemon).toFixed(0));
    hpPokemon = hpPokemon - golpePokemon;
    console.log(`${nomeOponente} levou ${golpePokemon} de dano e seu HP diminiu para ${hpOponente}`);
    console.log(`${pokemon} levou ${golpeOponente} de dano e seu HP diminiu para ${hpPokemon}`);
  } while (hpOponente > 0 && hpPokemon > 0);
  hpPokemon > 0 ? console.log(`Seu pokemón ${pokemon} venceu a batalha!`) : console.log(`O pokemón oponente ${nomeOponente} venceu a batalha!`);
}
>>>>>>> d010a830ef0a84499ee6118b69ba6d76bfeb104d

luta(mockPokemons[(Math.floor(Math.random() * 10))]);
/// console.log(mockPokemons);
