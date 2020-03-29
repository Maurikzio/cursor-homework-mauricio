// const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
// const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
// const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
// const getMyTaxes = function(salary) {
//     return salary * this.tax;
// }
console.log(`---Task 1, get my taxes:---`);
console.log(`In Ukraine: ${getMyTaxes.call(ukraine, 10000)} `);
console.log(`In Latvia: ${getMyTaxes.call(latvia, 20000)} `);
console.log(`In Litvia: ${getMyTaxes.call(litva, 30000)} `);


//2
const getMiddletaxes = function(){
    return this.tax * this.middleSalary;
};
console.log(`---Task 2, get middle taxes:---`);
console.log(`In Ukraine: ${getMiddletaxes.call(ukraine)}`);
console.log(`In Latvia: ${getMiddletaxes.call(latvia)}`);
console.log(`In Litvia: ${getMiddletaxes.call(litva)}`);


//3
const getTotalTaxes = function(){
    return this.tax * this.middleSalary * this.vacancies; //4003459.98  
};
console.log(`---Task 3, get total taxes:---`);
console.log(`In Ukraine: ${getTotalTaxes.call(ukraine)}`);
console.log(`In Latvia: ${getTotalTaxes.call(latvia)}`);
console.log(`In Litvia: ${getTotalTaxes.call(ukraine)}`);

//4
const generateRandomSalary = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};
const getMySalary = function(country){    
    const report = setInterval(() => {
        const salary = generateRandomSalary(1500, 2000);
        const taxes = Number((salary * country.tax).toFixed(2));
        const profit = salary-taxes;

        console.log({salary, taxes, profit});
    }, 10000);
    //this is just in case you forgot to close the page in 5mins, it will stop the interval execution
    setTimeout(() => {
        clearInterval(report);
        alert('auto-stop to dont waste your memory :) ')
    }, 300000)
};
console.log('Task 4, in few seconds...');
getMySalary(ukraine);