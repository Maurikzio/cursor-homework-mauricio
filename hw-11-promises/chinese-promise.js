const result = document.getElementById('chineseChars');
const getResults = document.getElementById('getChars');

async function getRandomChinese(length){
    let chineseChars = "";
    while(chineseChars.length < length){
        const myPromise = new Promise(function (resolve){
            setTimeout(() => {
                const sign = String(Date.now()).slice(-length);
                resolve(String.fromCharCode(sign));
            }, 50);
        });
        await myPromise.then(value => chineseChars += value);
    }
    return chineseChars;
}

async function showChineseChar(){
    this.textContent = await getRandomChinese(4);
}

getResults.addEventListener('click', showChineseChar.bind(result));

