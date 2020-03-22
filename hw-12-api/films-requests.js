const resultsList = document.getElementById('results-list');
const characters = document.getElementById('characters');
const btnGetCharacters = document.getElementById('btn-get-characters');
const filmId = document.getElementById('film-id');


const charactersList = {
    'Luke-Skywalker': './images/characters/luke-skywalker.png',
    'R2-D2': './images/characters/R2-D2.png',
    'C-3PO': './images/characters/C-3PO.png',
    'Darth-Vader': './images/characters/Darth-Vader.png',
    'Leia-Organa': './images/characters/Leia-Organa.png',
    'Obi-Wan-Kenobi': './images/characters/Obi-Wan-Kenobi.png',
    'Chewbacca': './images/characters/Chewbacca.png',
    'Han-Solo': './images/characters/Han-Solo.png',
    'Wedge-Antilles': './images/characters/Wedge-Antilles.png',
    'Yoda': './images/characters/Yoda.png',
    'Palpatine': './images/characters/Palpatine.png',
    'Boba-Fett': './images/characters/Boba-Fett.png',
    'IG-88': './images/characters/IG-88.png',
    'Bossk': './images/characters/Bossk.png',
    'Lando-Calrissian': './images/characters/Lando-Calrissian.png',
    'Lobot': './images/characters/Lobot.png',
    'default': './images/characters/default-character.png'
};

//characters of a film by id -> .../film/id
async function getFilmCharacters(film){
    const url = `https://swapi.co/api/films/${film}`;
    const response = await fetch(url);
    const data = await response.json();

    return await Promise.all(data.characters.map(async function(characterReference){
        const response = await fetch(characterReference);
        const characterData = await response.json();
        return characterData
    }))
}

async function showCharacters(filmId){
    this.disabled = true;
    const characters = await getFilmCharacters(filmId);
    for(const character of characters){
        resultsList.appendChild(createCharacterCard(character));
    }
    this.disabled = false;
    btnGetCharacters.disabled = false;
}

characters.addEventListener('click', function(){
    next.disabled = true;
    previous.disabled = true;
    btnGetCharacters.disabled = true;
    resultsList.innerHTML = '';
    showCharacters.call(this, 2);
    document.body.style.background = 'white';
    this.classList.remove('dark');
    planets.classList.remove('dark');
    titleHw.style.color = 'black';
});

btnGetCharacters.addEventListener('click', function(){
    const inputValue = Number(filmId.value);
    if(inputValue){
        resultsList.innerHTML = '';
        next.disabled = true;
        previous.disabled = true;
        showCharacters.call(this, inputValue);
    }else{
        alert('Please enter a valid id-film (1-7)');
    }
});


function createCharacterCard(data){
    const card = document.createElement('li');
    const description = document.createElement('div');
    const name = document.createElement('p');
    const age = document.createElement('p');
    const gender = document.createElement('p');
    const avatar = document.createElement('img');
    let info = data.name.replace(' ', '-');

    description.classList.add('character-description');
    name.classList.add('character-name');
    age.classList.add('character-age');
    gender.classList.add('character-gender');

    if(!(info in charactersList)){
        info = 'default'
    }

    avatar.src = charactersList[info];
    name.textContent = data.name;
    age.textContent = data.birth_year;
    gender.textContent = data.gender;
    description.appendChild(name);
    description.appendChild(age);
    description.appendChild(gender);
    card.classList.add('character');

    card.appendChild(avatar);
    card.appendChild(description);

    return card;
}