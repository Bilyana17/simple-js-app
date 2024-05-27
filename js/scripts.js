//Creating variables

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

pokemonList.forEach(function (user) {
    console.log(user.name + '  ' + user.height + '  ' + user.type);
});
