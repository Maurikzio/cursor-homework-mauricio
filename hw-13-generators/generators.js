const btnTask1 = document.getElementById('btn-task1');
const resTask1 = document.getElementById('res-task1');
const btnAgain = document.getElementById('btn-again');

const btnUp = document.getElementById('btnUp');
const btnCurrent = document.getElementById('btnCurrent');
const btnDown = document.getElementById('btnDown');
const size = document.getElementById('size');
const currentSize = document.getElementById('current-size');

//task1
// function *createIdGenerator(){
//     let id = 0;
//     while(true){
//         yield ++id;
//     }
// }

let idGenerator = createIdGenerator();

btnTask1.addEventListener('click', function(){
    resTask1.textContent += ` ${idGenerator.next().value}`
});
btnAgain.addEventListener('click', function(){
    resTask1.textContent = '';
    idGenerator = createIdGenerator();
})

//task2
function *newFontGenerator(value){
    while(true){
        let size = yield value;
        if(size === 'up'){
            value += 2;
        }
        if(size === 'down'){
            value -= 2;
        }
    }
}
const fontGenerator = newFontGenerator(14);


btnUp.addEventListener('click', function(){
    size.style.fontSize = `${fontGenerator.next(this.textContent).value}px`;
    showAndHide.call(currentSize);
});

btnCurrent.addEventListener('click', function(){
    currentSize.style.visibility = 'visible';
    currentSize.textContent = `Current size: ${fontGenerator.next().value}`;
});

btnDown.addEventListener('click', function(){
    size.style.fontSize = `${fontGenerator.next(this.textContent).value}px`;
    showAndHide.call(currentSize);
});

function showAndHide(){
    this.style.visibility = 'visible'; 
    this.textContent = `Current size: ${fontGenerator.next().value}`;
    setTimeout(() => {
        this.style.visibility = 'hidden';
    }, 1000);
}