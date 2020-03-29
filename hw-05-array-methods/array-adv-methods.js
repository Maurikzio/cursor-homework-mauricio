//1 getRandomArray(length, min, max)
const generateRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const getRandomArray = (length, min, max) => {
  // return Array.from(new Array(length), () => generateRandomNumber(min, max));
  return Array(length).fill().map(() => Number(generateRandomNumber(min, max)));
}

//2 getModa(...numbers)
//[3, 3, 5, 5, 5]
/*const inChunks = arr => {
  const uniqs = Array.from(new Set(arr)); //[3, 5]
  const chunks = uniqs.map(item => {
    return arr.filter(element => element === item); //[3, 3]
  });
  return chunks; // [[3, 3], [5, 5, 5]]
};*/
const inChunks = arr => {
  return Array.from(new Set(arr)).map(item => {
    return arr.filter(element => element === item); 
  });
};
const getModa = (...numbers) => {
  const justInts = numbers.filter(num => Number.isInteger(num));
  const justRepetitives = justInts.filter((num, _, arr) => arr.indexOf(num) !== arr.lastIndexOf(num));
  if(justInts !== justRepetitives){
    const chunks = inChunks(justRepetitives);
    const maxLength = chunks.reduce((acc, curr) => acc.length > curr.length ? acc : curr, []).length;
    return chunks.filter(chunk => chunk.length === maxLength).map(element => element[0]);
  }
  return null;
};

//3 getAverage(...numbers)
const getAverage = (...numbers) => {
  const justInts = numbers.filter(num => Number.isInteger(num));
  return justInts.reduce((acc,num) => acc + num) / justInts.length;
}

//4 getMedian(...numbers)
const getMedian = (...numbers) => {
  const sortedArray = numbers.filter(num => Number.isInteger(num)).sort((prev, curr) => prev - curr);
  const midPoint = sortedArray.length / 2;
  const median = (sortedArray.length % 2 === 0) ? (sortedArray[midPoint-1] + sortedArray[midPoint]) / 2 : sortedArray[Math.floor(midPoint)];
  return median;
};

//5 filterEvenNumbers(...numbers)
const filterEvenNumbers = (...numbers) => numbers.filter(number => number%2 !== 0);

//6 countPositiveNumbers(...numbers)
const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;

//7 getDividedByFive(...numbers)
const divisibleBy = number => item => item % number == 0;
const getDividedByFive = (...numbers) => numbers.filter(divisibleBy(5));


//8 replaceBadWords(string)
const replaceBadWords = sentence => {
  const badWords = ['fuck', 'shit'];
  const customRegExp = new RegExp(badWords.join('|'), 'gi');
  return sentence.split(customRegExp).join('****');
}

//9 divideByThree(word)
const divideByThree = word => {
  const wordDivided = word.split(' ').join('').split('').map((value, index) => (index % 3 === 0) ? value = ' ' + value : value).join('');
  return word.length < 3 ? word : wordDivided.toLowerCase();
};

//10 generateCombinations(word)
const getFactorial = number => (number < 2) ? 1 : number * getFactorial(number - 1);

//length = 2! ->1x2 -> 2 combinations
//length = 3! ->1x2x3 -> 6 combinations
//length = 4! -> 1x2x3x4 -> 24 combinations
const generateUniqueCombination = length => {
  let combination = new Set();
  while (true) {
    if (combination.size === length) break;
    const value = generateRandomNumber(0, length - 1);
    if (combination.has(value)) continue;
    combination.add(value);
  }
  return [...combination].join('');
};
/*
ATTENTION!!!
it will generate the combinations and work, anyway a recursive implementation is on production :)
*/
const generateCombinations = (word='man') => {
  if(word.length > 9){
    alert('10 letters is the limit, please enter a shorter word');
    return;
  }
  let combinations = new Set();
  while (true) {
    if (combinations.size === getFactorial(word.length)) break;
    const value = generateUniqueCombination(word.length);
    if (combinations.has(value)) continue;
    combinations.add(value);
  }
  return [...combinations].map(comb => comb.split('').map(element => word[element]).join(''));
}

module.exports = { replaceBadWords };