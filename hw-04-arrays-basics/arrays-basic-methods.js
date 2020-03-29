

//TASKS
//1 - create pair of students(male,female);

// const getPairs = (listOfStudents) => {
//     return [
//         [listOfStudents[0], listOfStudents[2]], 
//         [listOfStudents[1], listOfStudents[3]], 
//         [listOfStudents[4], listOfStudents[5]]
//     ]; 
// }

console.log('--students in pairs---');
const studentsInPairs = getPairs(students);
console.log(studentsInPairs);

//2 - join previous pairs (studentsInPairs) with a project theme
// const joinPairsAndProject = (pairs, project) => {
//     const pairsAndProject = [];
//     for(let i = 0; i<project.length; i++){
//         pairsAndProject.push([pairs[i].join(' and '), project[i]]);
//     }
//     return pairsAndProject;
// }

console.log('--pairs with projects---');
const studentsAndProject = joinPairsAndProject(studentsInPairs, themes);
console.log(studentsAndProject);

//3 - join a student with a mark
const joinStudentsWithMarks = (studentsList, marksList) => {
    const pairStudentMark = [];
    for(let i=0; i<studentsList.length; i++){
        pairStudentMark.push([studentsList[i],marksList[i]]);
    }
    return pairStudentMark;
}

console.log('--students with marks---');
const marksAndStudents = joinStudentsWithMarks(students, marks);
console.log(marksAndStudents);

//4 - give to each pair a random mark(1-5) dont mutate the initial/passed array
const generateRandomMark = (min=1, max=5) => {
    const rand = min + Math.random() * max + 1 - min;
    return Math.floor(rand);
}

const assignMarksToPairs = (pairsList) => {
    return pairsList.map(pair => pair.concat(generateRandomMark()));
}

console.log('--projects with a random mark---');
console.log(assignMarksToPairs(studentsAndProject));
console.log('---initial array after adding a random mark ---');
console.log(studentsAndProject);


