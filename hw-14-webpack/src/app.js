import { getRandomNumber } from '../../hw-03-functions/pure-functions';
import  * as task04 from '../../hw-04-arrays-basics/functions';
import { replaceBadWords } from '../../hw-05-array-methods/array-adv-methods';
import * as task06 from '../../hw-06-objects/functions';
import * as task07 from '../../hw-07-call-apply-bind/functions';
import { Student } from '../../hw-08-classes-prototypes/student';
import { setColor, generateBlocks } from '../../hw-09-dom/functions';
import { createChineseChar } from '../../hw-11-promises/functions';
import * as task12 from '../../hw-12-api/characters'
import { createIdGenerator } from '../../hw-13-generators/functions';

import '../../general.css';
import './styles.css';

const hwResults = document.getElementById('homeworkResult');

const btnTask03 = document.getElementById('btnTask03');
const btnTask04 = document.getElementById('btnTask04');
const btnTask05 = document.getElementById('btnTask05');
const btnTask06 = document.getElementById('btnTask06');
const btnTask07 = document.getElementById('btnTask07');
const btnTask08 = document.getElementById('btnTask08');
const btnTask09 = document.getElementById('btnTask09');
const btnTask11 = document.getElementById('btnTask11');
const btnTask12 = document.getElementById('btnTask12');
const btnTask13 = document.getElementById('btnTask13');


btnTask03.addEventListener('click', function(){
    hwResults.textContent = `Random number between 5 and 10 => ${getRandomNumber(5, 10)}`;
});

btnTask04.addEventListener('click', function(){
    const {students, themes, getPairs, joinPairsAndProject} = task04;
    hwResults.textContent = `Pairs of students and projects => ${JSON.stringify(joinPairsAndProject(getPairs(students), themes), null, 2)}`
});

btnTask05.addEventListener('click', function(){
    hwResults.textContent = `Replacing bad words => ${replaceBadWords('what the fuck!!')}`;
});

btnTask06.addEventListener('click', function(){
    const { students, getSubjects} = task06;
    hwResults.textContent = `Subjects of student => ${getSubjects(students[0])}`;
});

btnTask07.addEventListener('click', function(){
    const {ukraine,latvia, litva, getMyTaxes} = task07;
    hwResults.textContent = `Taxes of salary in Ukraine => ${getMyTaxes.call(ukraine, 2000)}`;
});

btnTask08.addEventListener('click', function(){
    const ivan = new Student('NULP', 3, 'Ivan Ivanovych');
    hwResults.textContent = `Student Ivan info => ${ivan.getInfo()}`;
})

btnTask09.addEventListener('click', function(){
    hwResults.textContent = '';
    const container = document.createElement('div');
    container.style.width = '250px';
    container.style.height = '250px';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    generateBlocks.call(container);
    hwResults.appendChild(container);
    setColor('block');
    setInterval(() => {
        setColor('block');
    }, 1500);
})

btnTask11.addEventListener('click', function(){
    hwResults.textContent = `Chinese character => ${createChineseChar()}`;
})

btnTask12.addEventListener('click', async function(){
    hwResults.textContent = 'Loading data...';
    this.disabled = true;
    const characters = await task12.getFilmCharacters(2);
    hwResults.textContent = '';
    for(const character of characters){
        const container = document.createElement('div');
        const person = document.createElement('p');
        const avatar = document.createElement('img');
        let info = character.name.replace(' ', '-');
        container.classList.add('chars-container');
        person.textContent = character.name;
        avatar.src = `../images/characters/${info}.png`;
        container.appendChild(person);
        container.appendChild(avatar);
        hwResults.appendChild(container);
    }
    this.disabled = false;
})

const idGenerator = createIdGenerator();
btnTask13.addEventListener('click', function(){  
    hwResults.textContent = '';
    hwResults.textContent += `id generator => ${idGenerator.next().value}`;
})