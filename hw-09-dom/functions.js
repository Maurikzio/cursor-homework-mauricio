function generateRandom(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min)); 
}

class Color{
    constructor(){
        this.r = generateRandom(0,255);
        this.g = generateRandom(0,255);
        this.b = generateRandom(0,255);
    }
    getColor(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
}
const setColor = function(identifier){
    const blocks = document.getElementsByClassName(identifier);
    [...blocks].forEach(element => {
        const color = new Color()
        element.style.backgroundColor = color.getColor();
    });
}

const generateBlocks = function(){
    this.innerHTML = `<div class='block'></div>`.repeat(25);
    setColor('block');
}

module.exports = { setColor, generateBlocks }