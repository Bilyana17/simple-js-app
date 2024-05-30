//Creating the repository with IIFE
let pockemonRepository = (function () {
    let pokemonList = [
        {
            name: "balbasura",
            height: 7,
            type: ["grass", "poison"]
        },
        {
            name: "butterfree",
            height: 1,
            type: ["bug", "flying"]
        },
        {
            name: "onix",
            height: 8,
            type: ["rock", "ground"]
        }
    ];

    //Function to get all Pokemon
    function getAll() {
        return pokemonList;
    }

    //Function to add a Pokemon
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //Returning the methods as public interface
    return {
        getAll: getAll,
        add: add
    };
})();

// Using the getAll method to get the list and forEach to print details

pockemonRepository.getAll().forEach(function(pokemon) {
    let displayText = pokemon.name + " (height: " + pokemon.height + ")";
    if (pokemon.height > 7) {
        displayText += " - It's a bug!";
    } else if (pokemon.height === 7) {
        displayText += " - It's a turtule!";
    } else {
        displayText += " - It's a rock!"
    }

    //Using document.write to display the text on the webpage   
    document.write(displayText + "<br>");
});

