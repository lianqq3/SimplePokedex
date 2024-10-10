const MAX_POKEMON = 151;
const listWrapper = document.querySelector(".list-wrapper");
const searchInput = document.querySelector("#search-input");
const numberFilter = document.querySelector("#number-input");
const nameFilter= document.querySelector("#name");
const notFoundMessage = document.querySelector("#not-found-message");

let allPokemons = []; 
// Pokemon Storage

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
// Fetch pokemon data with set limit
.then((response) => response.json())
// Convert response to json
.then((data) => {
    allPokemons = data.results;
});

async function fetchPokemonDataBeforeRedirect(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promise.
        all([fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => 
            res.json()
        ),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => 
            res.json()
        ),
    ])
    return true
    } catch (error) {
        console.error("Failed to fetch Pokemon data before redirect");
    }
}

function displayPokemons(pokemon) {
    listWrapper.innerHTML = "";
    pokemon.forEach ((pokemon) => {
        const pokemonID = pokemon.url.split("/")
        // split gives an array of strings in the url
    })
}