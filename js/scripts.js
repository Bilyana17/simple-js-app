//Creating variables
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

    /*for (let i = 0; 1 < pokemonList.length; i++) {
        let displayText = pokemonList[i].name + " (height: " + pokemonList[i].height + ")";
        if (pokemonList[i].height > 7) {
            displayText += " - It's a bug!";
        } else if (pokemonList[i].height === 7) {
            displayText += " - It's a turtule!";
        } else {
            displayText += " - It's a rock!"
        }
    
        document.write(displayText + "<br>");
    }*/

    function getAll() {
        return pokemonList;
    }
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    return {
        getAll,
        add: add
    }
})();

console.log(pockemonRepository.getAll());

pokemonList.forEach(function (user) {
    console.log(user.name + '  ' + user.height + '  ' + user.type);
});