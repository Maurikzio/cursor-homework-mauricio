const next = document.getElementById('next');
const previous = document.getElementById('previous');
const planets = document.getElementById('planets');
const titleHw = document.getElementById('title-hw');

let defaultPage = 2;


//2 planets
async function getPlanets(page){
    const url = `https://swapi.co/api/planets/?page=${page}`
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
function createPlanetCard(data){
    const planetCard = document.createElement('li');
    const planetName = document.createElement('p');
    planetCard.classList.add('planet-card');
    planetCard.style.background = `linear-gradient(30deg, rgba(${getRandomColor()},1), rgba(${getRandomColor()},0) 100%)`;
    planetName.textContent = data.name;
    planetCard.appendChild(planetName);
    return planetCard;
}

async function showPlanets(page){
    const planets = await getPlanets(page);
    if(!planets.next || !planets.previous) {
        this.disabled = true;
    }

    for(const planet of planets.results){
        resultsList.appendChild(createPlanetCard(planet));
    }   
}

planets.addEventListener('click', function(){
    resultsList.innerHTML = '';
    showPlanets(defaultPage);
    next.disabled = false;
    previous.disabled = false;
    document.body.style.background = 'black';
    titleHw.style.color = 'yellow';
    characters.className += ' dark';
    this.className += ' dark';
});

next.addEventListener('click', function(){
    resultsList.innerHTML = '';
    defaultPage++;
    showPlanets.call(this, defaultPage);
    previous.disabled = false;
});

previous.addEventListener('click', function(){
    resultsList.innerHTML = '';
    defaultPage--;
    showPlanets.call(this, defaultPage);
    next.disabled = false;
});

function getRandomColor(){
    return `${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
  }