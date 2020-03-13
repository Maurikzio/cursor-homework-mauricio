const result = document.getElementById('chineseChars');
const getResults = document.getElementById('getChars');

function getChineseChar(time, length){
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const sign = String(Date.now()).slice(-length);
            return resolve(String.fromCharCode(sign));
        }, time);
    })
}

async function getRandomChinese(length){
    let chineseChars = "";
    while(chineseChars.length < length){
        await getChineseChar(50, length)
                .then(character => chineseChars += character)
    }
    return chineseChars;
}

async function showChineseChar(){
    this.textContent = await getRandomChinese(4);
}

getResults.addEventListener('click', showChineseChar.bind(result));

