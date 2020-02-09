//1 - max digit
function getMaxDigit(number){
    return Math.max(...number.toString().split(''));
}

//2 = pow function
function calculatePow(base, exp){
    let result = 1;
    for(let i=0; i<exp; i++){
        result *= base;
    }
    return result;
}

//3 - capitalize just the first letter
function firstLetterUppercased(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

//4 - calculate the amount remaining after paying taxes
function getTaxesPayment(amount){
    return amount - (amount * 0.195);
}

//5 - get a random number between N(min) and M(max)
function getRandomNumber(min, max){
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}
// console.log(getRandomNumber(1, 9));

//6 - count how many times a certain letter is repeated in a word
function countLetter(letter, word){
    return word.toLowerCase().split("").filter(value => value === letter).length;
}

//7 - convert dollars to hryvnias and vice versa
function convertCurrency(amount){
    //the currency can be at the beginning or at the end, so with this we can remove that possibility
    const justNumbers = Number(amount.replace(/\D/g,""));
    const currency = amount.replace(/[0-9]/g, '');
    let result = '';
    
    switch(currency.toLowerCase()){
        case 'uah':
            result = `${justNumbers / 25} $`;
            break;
        case '$':
        case 'usd':
            result = `${justNumbers * 25} UAH`;
            break;
        case '':
            result = 'you need to add you amount with a currency like: 100usd, 100$, 100uah';
            break;
        default:
            result = `WARNING!! currency: '${currency}' is not accepted!`
    }
    return result;
}

//8 - generate a random passowrd of numbers length by defaut:8
function getRandomPassword(len = 8){
    //getRandomNumber(function 5) is passed as the mapping function argument of Array.from()
    return Array.from(new Array(len), () => getRandomNumber(0,9)).join('');
}

//9 - remove all letters from sentence
function deleteLetters(letter, sentence){
    return (sentence.includes(letter)) 
            ? sentence.split('').filter(value => value !== letter).join('')
            : `${letter} was not found`
}

//10 - check is a word is a palindrome one.
function isPalyndrom(word){
    //short way, regex->(/[,.\s\W]/g,'') for take nonalphanumeric characters out
    //if we use \W ukrainian alphabet wont be considered, so I just took additional ',' and '.' for being removed
    const cleanedWord = word.replace(/[,.\s]/g,'');
    return [...cleanedWord].reverse().join('').toLowerCase() === cleanedWord.toLowerCase();
}

//11 - remove letters that occur more than once.
function deleteDuplicateLetters(word){
    const lowerCased = word.toLowerCase();
    return lowerCased.split('').filter(value => lowerCased.indexOf(value) === lowerCased.lastIndexOf(value)).join('');
}



