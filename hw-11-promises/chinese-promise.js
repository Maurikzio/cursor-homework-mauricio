const result = document.getElementById('chineseChars');
const getResults = document.getElementById('getChars');


const sleep = ms => new Promise(res => setTimeout(res, ms));

// async function getRandomChinese(length){
//     let chineseChars = "";
//     while(chineseChars.length < length){
//         chineseChars += await getChineseChar(50, length);
//     }
//     return chineseChars;
// }

const getRandomChinese = async (length) => {
    const array = Array.from({ length });

    const charArray = await Promise.all(
        array.map(async (el, index) => {
            const creationTime = 50;
            await sleep(creationTime * index);
            const char = createChineseChar();
            return char;
        })
    )
    const str = charArray.join('');
    return str
}

// async function showChineseChar(){
//     this.textContent = await getRandomChinese(4);
// }

// getResults.addEventListener('click', showChineseChar.bind(result));
getResults.addEventListener('click', function(){
    getRandomChinese(5).then(el => {
        result.textContent = el;
    });
});

