const URL = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10";
let  personajes = null;
let characterSpecies = [];



function ListaDepersonajes(personajes){
    const charactersContainer = document.getElementById("characters-container");
    charactersContainer.innerHTML = `<h1>Lista de Personajes:</h1>`;
     for(let i = 0; i < personajes.length; i++){
        const character = personajes[i];
        charactersContainer.innerHTML += `<h2> ID: ${character.id} - Nombre: ${character.name} - Especie: ${character.species}</h2>`;
        if(!characterSpecies.includes(character.species)){
            characterSpecies.push(character.species);
        }
    }
}
function MostrarEspecies(personajes){
    const speciesContainer = document.getElementById("character-species");
    speciesContainer.innerHTML = `<h1>Especies de Personajes:</h1>`;
    characterSpecies.forEach(species => {
        speciesContainer.innerHTML += `<h1>${species}</h1>`;
        for(let i = 0; i < personajes.length; i++){
            if(personajes[i].species === species){  
                speciesContainer.innerHTML += `<h2>  - Nombre: ${personajes[i].name} (ID: ${personajes[i].id})</h2>`;
            }
        }
    });
}
function CargarPersonajes(){
    if(personajes !== null){
        ListaDepersonajes(personajes);
        MostrarEspecies(personajes);
        MostrarPerfil(personajes)
    } else {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                personajes = data;
                ListaDepersonajes(personajes);
                MostrarEspecies(personajes);
                MostrarPerfil(personajes)
            });    
    }
    
}
function MostrarPerfil(personajes){
    const profileContainer = document.getElementById("character-profile");
    profileContainer.innerHTML = `<h1>Fichas de Personajes</h1>`;
    for(let i = 0; i < personajes.length; i++){
        profileContainer.innerHTML += `<h2> ID: ${personajes[i].id} - Nombre: ${personajes[i].name} - Especie: ${personajes[i].species}</h2>`;
        profileContainer.innerHTML += `<img src="${personajes[i].image}" alt="${personajes[i].name}">`;        
    }
}
CargarPersonajes();