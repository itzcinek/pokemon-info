const submitBtn = document.getElementById("submitBtn");
const pokemonFrontImg = document.getElementById("pokemonFrontImg");
const pokemonBackImg = document.getElementById("pokemonBackImg");
const pokemonTypes = document.getElementById("pokemonTypes");
const pokemonId = document.getElementById("pokemonId");

submitBtn.addEventListener('click', () =>{
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    getPokemonData(pokemonName);
})



async function getPokemonData(pokemonName){

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if(!response.ok){
        throw new Error("Fetch went wrong!");
    }
    const data = await response.json();
    console.log(data);

    const pokemonSpriteFront = data.sprites.front_default;
    const pokemonSpriteBack = data.sprites.back_default;
    pokemonFrontImg.src = pokemonSpriteFront;
    pokemonFrontImg.style.display = "inline";
    pokemonBackImg.src = pokemonSpriteBack;
    pokemonBackImg.style.display = "inline";



    let pokemonTypesContent = "";
    data.types.forEach(type => {
        pokemonTypesContent += type.type.name + " ";
    });

    pokemonTypes.textContent = pokemonTypesContent;
    pokemonTypes.style.display = "block";

    pokemonId.textContent = "id: " + data.id;
    pokemonId.style.display = "block";

}