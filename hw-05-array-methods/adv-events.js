document.getElementById('fn2-nums').style.width = '350px';
document.getElementById('fn3-nums').style.width = '350px';
document.getElementById('fn4-nums').style.width = '350px';
document.getElementById('fn8-str').style.width = '350px';

const fnRandomArr = document.getElementById('fn1-btn');
fnRandomArr.addEventListener('click', function(){
    const father = document.getElementById('fn1');
    const [length, min, max, , result ] = [...father.children];
    length.value = Number(length.value) || 5;
    length.style.width = '30px';
    min.style.width = '30px';
    max.style.width = '30px';
    min.value = Number(min.value) || 0;
    max.value = Number(max.value) || 5;
    const fnResult = getRandomArray(Number(length.value), Number(min.value), Number(max.value));
    result.innerHTML = `<code>[${fnResult}]</code>`;
});

const fnGetModa = document.getElementById('fn2-btn');
fnGetModa.addEventListener('click', function(){
    const itemsList = document.getElementById('fn2');
    const [nums, , result] = [...itemsList.children];
    // nums.value =  | '6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2';
    const inputValue = nums.value.split(',').map(input => Number(input));
    const fnResult = getModa(...inputValue)
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnGetAverage = document.getElementById('fn3-btn');
fnGetAverage.addEventListener('click', function(){
    const itemsList = document.getElementById('fn3');
    const [nums, , result] = [...itemsList.children];
    // nums.value =  | '6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2';
    const inputValue = nums.value.split(',').map(input => Number(input));
    const fnResult = getAverage(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnGetMedian = document.getElementById('fn4-btn');
fnGetMedian.addEventListener('click', function(){
    const itemsList = document.getElementById('fn4');
    const [nums, , result] = [...itemsList.children];
    const inputValue = nums.value.split(',').map(input => Number(input));
    const fnResult = getMedian(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnFilterEvenNums = document.getElementById('fn5-btn');
fnFilterEvenNums.addEventListener('click', function(){
    const itemsList = document.getElementById('fn5');
    const [nums, , result] = [...itemsList.children];
    const inputValue = nums.value.split(',').map(input => Number(input));
    const fnResult = filterEvenNumbers(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnCountPositiveNums = document.getElementById('fn6-btn');
fnCountPositiveNums.addEventListener('click', function(){
    const itemsList = document.getElementById('fn6');
    const [nums, , result] = [...itemsList.children];
    const inputValue = nums.value.split(',').map(input => Number(input));
    const fnResult = countPositiveNumbers(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnDividedByFive = document.getElementById('fn7-btn');
fnDividedByFive.addEventListener('click', function(){
    const itemsList = document.getElementById('fn7');
    const [nums, , result] = [...itemsList.children];
    const inputValue = nums.value.split(',').map(input => Number(input));
    const fnResult = getDividedByFive(...inputValue);
    result.innerHTML = `<code>[${fnResult}]</code>`;
});

const fnDivideByThree = document.getElementById('fn9-btn');
fnDivideByThree.addEventListener('click', function(){
    const itemsList = document.getElementById('fn9');
    const [sentence, , result] = [...itemsList.children];
    const fnResult = divideByThree(sentence.value);
    result.innerHTML = `<code>${fnResult}</code>`;
});
const fnGenerateCombs = document.getElementById('fn10-btn');
fnGenerateCombs.addEventListener('click', function(){
    const itemsList = document.getElementById('fn10');
    const [sentence, , , result] = [...itemsList.children];
    const fnResult = generateCombinations(sentence.value);
    // result.innerHTML = `<code>${fnResult}</code>`;
    result.value = fnResult;
});