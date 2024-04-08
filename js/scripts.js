//Creating variables
let pokemonList = [];
pokemonList = [{ name: "balbasure", height: 7, type: ["grass", "poison"] }, { name: "butterfree", height: 1, type: ["bug", "flying"] }, { name: "onix", height: 8, type: ["rock", "ground"] }];

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

for (let i = 0, 1 < pokemonList.lenght; i++) {
    if (pokemonList[i].height < 8 && pokemonList[i].height > 5) {
        console.log(pokemonList[i].height + "It's turtule");
    } else if (pokemonList[i].height < 5) {
        console.log(pokemonList[i].height + "It's bug");
    } else {
        console.log(pokemonList[i].height + "I's a rock")
    }
}