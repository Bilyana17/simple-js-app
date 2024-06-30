//Creating the repository with IIFE
let pockemonRepository = (function () {
    let pokemonList = [
        {
            name: "Balbasura",
            height: 7,
            type: ["grass", "poison"]
        },
        {
            name: "Butterfree",
            height: 1,
            type: ["bug", "flying"]
        },
        {
            name: "Onix",
            height: 8,
            type: ["rock", "ground"]
        }
    ];

    //Function to get all Pokemon
    function getAll() {
        return pokemonList;
    }

    //Function to show details
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    //Function to all evenent listener
    function onClick(button, pokemon) {
        button.addEventListener('click', function (event) {
            pockemonRepository.showDetails(pokemon);
        });
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        onClick(button, pokemon);
    }

    //Function to add a Pokemon
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //Returning the methods as public interface
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

// Using the getAll method to get the list and forEach to print details

pockemonRepository.getAll().forEach(function (pokemon) {
    pockemonRepository.addListItem(pokemon);

});

