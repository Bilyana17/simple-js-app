//Creating the repository with IIFE
let pockemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //function add(pokemon) {
    //   pokemonList.push(pokemon)
    //}

    //Function to add a Pokemon
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    //Function to get all Pokemon
    function getAll() {
        return pokemonList;
    }

    //Function to show details
    //function showDetails(pokemon) {
    //  console.log(pokemon);
    //}

    //Function to all evenent listener
    //function onClick(button, pokemon) {
    //button.addEventListener('click', function (event) {
    // pockemonRepository.showDetails(pokemon);
    //});
    //}

    //Function to addListItem
    function addListItem(pokemon) {
        let pokemonListElement = document.querySelector(".pokemon-list");
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        listItem.classList.add("list-group-item");
        button.innerText = pokemon.name;
        button.classList.add("btn", "btn-outline-primary", "btn-lg");
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
        button.addEventListener('click', function (event) {
            pockemonRepository.showDetails(pokemon)
        });
    }

    //Function to create modal
    function showModal(title, text, img) {
        let modalTitle = document.querySelector("#pokemonModalLabel");
        let modalBody = document.querySelector(".modal-body");
        let pockemonHeight = document.querySelector("#pokemonHeight");
        let pockemonImage = document.querySelector("#pokemonImage");

        modalTitle.innerText = title;
        pockemonHeight.innerText = text;
        pockemonImage.setAttribute('src', img);
    }

    //Function to showDetails
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(
                pokemon.name,
                "Height: " + pokemon.height,
                pokemon.imageUrl);
            $("#pokemonModal").modal('show');
        });
    }

    //Function to loadList
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    //Function to loadDetails
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }


    //Returning the methods as public interface
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

// Using the getAll method to get the list and forEach to print details

pockemonRepository.loadList().then(function () {
    pockemonRepository.getAll().forEach(function (pokemon) {
        pockemonRepository.addListItem(pokemon);
    });
});

