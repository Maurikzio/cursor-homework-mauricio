//data
const students = ['Sasha' , 'Ihor', 'Lena', 'Ira', 'Alex', 'Svetlana'];
const themes = ['Differential equations', 'Automata theory', 'Algorithms and data structure'];
const marks = [4, 5, 5, 3, 4, 5];


const getPairs = (listOfStudents) => {
    return [
        [listOfStudents[0], listOfStudents[2]], 
        [listOfStudents[1], listOfStudents[3]], 
        [listOfStudents[4], listOfStudents[5]]
    ]; 
}

const joinPairsAndProject = (pairs, project) => {
    const pairsAndProject = [];
    for(let i = 0; i<project.length; i++){
        pairsAndProject.push([pairs[i].join(' and '), project[i]]);
    }
    return pairsAndProject;
}

module.exports = {students, themes, getPairs, joinPairsAndProject };