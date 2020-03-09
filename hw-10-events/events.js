const audios = {
    '65': new Audio('./sounds/bird.wav'),
    '83': new Audio('./sounds/cat.wav'),
    '68': new Audio('./sounds/elephant.wav'),
    '70': new Audio('./sounds/horse.wav'),
    '71': new Audio('./sounds/lion.wav'),
    '72': new Audio('./sounds/roaster.wav'),
    '74': new Audio('./sounds/small-dog.wav'),
    '75': new Audio('./sounds/wolf.wav')
};

function removeTransition(e){
    this.classList.remove('playing');
}

function setElements(identifier){
    const audio = audios[identifier];
    const key = document.querySelector(`div.key.a-${identifier}`);
    if(!audio) return; //stop the function from running all together;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', event => setElements(event.keyCode));

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', event => setElements(event.target.dataset.key));
});

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

