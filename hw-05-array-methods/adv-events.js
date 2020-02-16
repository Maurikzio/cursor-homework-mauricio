const elementsToChange = ['fn2-nums', 'fn3-nums', 'fn4-nums', 'fn5-nums', 'fn6-nums', 'fn7-nums', 'fn8-str'];
elementsToChange.forEach(element => document.getElementById(element).style.width = '350px');
document.getElementById('fn10-res').style.display = 'none';
const defaultValue = '6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2';

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
    nums.value = (nums.value.length === 0  && !Number(nums.value)) ? defaultValue : nums.value;
    const inputValue = nums.value.trim().split(',').map(input => Number(input)).filter(num => Number.isInteger(num));
    nums.value = inputValue;
    const fnResult = getModa(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;

    //console.log(nums.value.split(',').map(num => Number(num)).filter(num => Number.isInteger(num)));
});

const fnGetAverage = document.getElementById('fn3-btn');
fnGetAverage.addEventListener('click', function(){
    const itemsList = document.getElementById('fn3');
    const [nums, , result] = [...itemsList.children];
    nums.value = (nums.value.length === 0  && !Number(nums.value)) ? defaultValue : nums.value;
    const inputValue = nums.value.trim().split(',').map(input => Number(input)).filter(num => Number.isInteger(num));
    nums.value = inputValue;
    const fnResult = getAverage(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
    // console.log(nums.length);
});

const fnGetMedian = document.getElementById('fn4-btn');
fnGetMedian.addEventListener('click', function(){
    const itemsList = document.getElementById('fn4');
    const [nums, , result] = [...itemsList.children];
    nums.value = (nums.value.length === 0  && !Number(nums.value)) ? defaultValue : nums.value;
    const inputValue = nums.value.trim().split(',').map(input => Number(input)).filter(num => Number.isInteger(num));
    nums.value = inputValue || defaultValue;
    const fnResult = getMedian(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnFilterEvenNums = document.getElementById('fn5-btn');
fnFilterEvenNums.addEventListener('click', function(){
    const itemsList = document.getElementById('fn5');
    const [nums, , result] = [...itemsList.children];
    nums.value = (nums.value.length === 0  && !Number(nums.value)) ? '1, 2, 3, 4, 5, 6' : nums.value;
    const inputValue = nums.value.trim().split(',').map(input => Number(input));
    const fnResult = filterEvenNumbers(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnCountPositiveNums = document.getElementById('fn6-btn');
fnCountPositiveNums.addEventListener('click', function(){
    const itemsList = document.getElementById('fn6');
    const [nums, , result] = [...itemsList.children];
    nums.value = (nums.value.length === 0  && !Number(nums.value)) ? '1, -2, 3, -4, -5, 6' : nums.value;
    const inputValue = nums.value.trim().split(',').map(input => Number(input));
    const fnResult = countPositiveNumbers(...inputValue);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnDividedByFive = document.getElementById('fn7-btn');
fnDividedByFive.addEventListener('click', function(){
    const itemsList = document.getElementById('fn7');
    const [nums, , result] = [...itemsList.children];
    nums.value = (nums.value.length === 0  && !Number(nums.value)) ? defaultValue : nums.value;
    const inputValue = nums.value.trim().split(',').map(input => Number(input));
    const fnResult = getDividedByFive(...inputValue);
    result.innerHTML = `<code>[${fnResult}]</code>`;
});

const fnDivideByThree = document.getElementById('fn8-btn');
fnDivideByThree.addEventListener('click', function(){
    const itemsList = document.getElementById('fn8');
    const [sentence, , result] = [...itemsList.children];
    sentence.value = sentence.value || 'FuCking sHiTttt!';
    const fnResult = replaceBadWords(sentence.value);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnReplaceBadWords= document.getElementById('fn9-btn');
fnReplaceBadWords.addEventListener('click', function(){
    const itemsList = document.getElementById('fn9');
    const [sentence, , result] = [...itemsList.children];
    sentence.value = sentence.value || 'Commandant';
    const fnResult = divideByThree(sentence.value);
    result.innerHTML = `<code>${fnResult}</code>`;
});

const fnGenerateCombs = document.getElementById('fn10-btn');
fnGenerateCombs.addEventListener('click', function(){
    const itemsList = document.getElementById('fn10');
    const [sentence, , , result] = [...itemsList.children];
    sentence.value = sentence.value || 'man';
    result.style.display = 'block';
    const fnResult = generateCombinations(sentence.value);
    result.value = fnResult;
});