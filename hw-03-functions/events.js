/*
 * adding event-listners for each button, kinda manual, for the next version it will be automated with js, promise!
 */
const func1 = document.getElementById("f1-btn");
func1.addEventListener('click', function(){
    const number = document.getElementById('f1-1');
    const result = document.getElementById('f1-lbl');
    number.value = number.value || 12345;
    result.textContent = (Number(number.value)) 
            ? `--> ${getMaxDigit(number.value)}`
            : 'you need to insert a number in the input'
});

const func2 = document.getElementById('f2-btn');
func2.addEventListener('click',function(){
    const base = document.getElementById('f2-1');
    const exp = document.getElementById('f2-2');
    const result = document.getElementById('f2-lbl');
    base.value = base.value || 2;
    exp.value = exp.value || 3;
    result.textContent = (isFinite(base.value) && isFinite(exp.value))
            ? `--> ${calculatePow(Number(base.value), Number(exp.value))}`
            : 'enter just numbers, please!'
});

const func3 = document.getElementById('f3-btn');
func3.addEventListener('click', function(){
    const name = document.getElementById('f3-1');
    const result = document.getElementById('f3-lbl');
    name.value = name.value || 'eLiza';
    result.textContent = !((/\d/g).test(name.value))
            ? `--> ${firstLetterUppercased(name.value)}`
            : 'enter a name please!';
});

const func4 = document.getElementById('f4-btn');
func4.addEventListener('click', function(){
    const amount = document.getElementById('f4-1');
    const result = document.getElementById('f4-lbl');
    amount.value = amount.value || '1000';
    result.textContent = (Number(amount.value))
            ? `--> ${getTaxesPayment(amount.value)}`
            : 'enter a number please!'
});

const func5 = document.getElementById('f5-btn');
func5.addEventListener('click', function(){
    const min = document.getElementById('f5-1');
    const max = document.getElementById('f5-2');
    const result = document.getElementById('f5-lbl');
    min.value = min.value || 1;
    max.value = max.value || 9;
    result.textContent = (Number(min.value) && Number(max.value)) 
            ? `--> ${getRandomNumber(Number(min.value), Number(max.value))}`
            : 'warning, insert just numbers, please!';
});

const func6 = document.getElementById('f6-btn');
func6.addEventListener('click', function(){
    const letter = document.getElementById('f6-1');
    const word = document.getElementById('f6-2');
    const result = document.getElementById('f6-lbl');
    letter.value = letter.value || 'a';
    word.value = word.value || 'Hasta lA vista'
    result.textContent = `--> ${countLetter(letter.value, word.value)}`;
});

const func7 = document.getElementById('f7-btn');
func7.addEventListener('click', function(){
    const amount = document.getElementById('f7-1');
    const result = document.getElementById('f7-lbl');
    amount.value = amount.value || '100usd';
    result.textContent = `--> ${convertCurrency(amount.value)}`;
});

const func8 = document.getElementById('f8-btn');
func8.addEventListener('click', function(){
    const theLength = document.getElementById('f8-1');
    const result = document.getElementById('f8-lbl');
    theLength.value = theLength.value || 8;
    result.textContent = (Number(theLength.value))
            ? `--> ${getRandomPassword(Number(theLength.value))}`
            : 'enter a number, please!';
});

const func9 = document.getElementById('f9-btn');
func9.addEventListener('click', function(){
    const letter = document.getElementById('f9-1');
    const sentence = document.getElementById('f9-2');
    const result = document.getElementById('f9-lbl');
    letter.value = letter.value || 'a';
    sentence.value = sentence.value || 'blablabla'
    result.textContent = `--> ${deleteLetters(letter.value, sentence.value)}`;
});

const func10 = document.getElementById('f10-btn');
func10.addEventListener('click', function(){
    const word = document.getElementById('f10-1');
    const result = document.getElementById('f10-lbl');
    word.value = word.value || 'Аргентина манит негра';
    word.style.width = `${word.value.length*7}px`;
    result.textContent = `--> ${isPalyndrom(word.value)}`;
    console.log(word.value.length);
});

const func11 = document.getElementById('f11-btn');
func11.addEventListener('click', function(){
    const word = document.getElementById('f11-1');
    const result = document.getElementById('f11-lbl');
    word.value = word.value || 'Бисквит был очень нежный';
    word.style.width = `${word.value.length*7}px`;
    result.textContent = `--> ${deleteDuplicateLetters(word.value)}`;
});