// const students = [
//     {
//     name: "Tanya",
//     course: 3,
//     subjects: {
//         math: [4, 4, 3, 4],
//         algorithms: [3, 3, 3, 4, 4, 4],
//         data_science: [5, 5, 3, 4]
//         }
//     }, 
//     {
//     name: "Victor",
//     course: 4,
//     subjects: {
//         physics: [5, 5, 5, 3],
//         economics: [2, 3, 3, 3, 3, 5],
//         geometry: [5, 5, 2, 3, 5]
//         }
//     }, 
//     {
//     name: "Anton",
//     course: 2,
//     subjects: {
//         statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
//         english: [5, 3],
//         cosmology: [5, 5, 5, 5]
//         }
//     }
// ];
  
  
 //1 get subjects
 //ALTERNATIVE SOLUTION ----> ["Math", "Algorithms", "Data Science"]
// const getSubjects = (student) => {
//     const {subjects} = student;
//     return Object.keys(subjects).map( subject => {
//         return subject.split('_').map(sbj => {
//             return sbj[0].toUpperCase() + sbj.slice(1)
//         }).join(' ');
//     });
// }; 

// const getSubjects = (student) => {
//     const {subjects} = student;
//     const casedUp = Object.keys(subjects).map(subject => subject[0].toUpperCase() + subject.slice(1).toLowerCase());
//     return casedUp.map(subject => subject.split('_').join(' '));
// }
console.log('--- Subjects of a certain student ---');
console.log(getSubjects(students[0]));

//2 get average marks
const getAverage = (marks) => marks.reduce((acc,num) => acc + num) / marks.length;

const getAverageMark = (student) => {
    const {subjects} = student;
    return  getAverage(Object.values(subjects).flat()).toFixed(2);
};
console.log('--- Average mark of all subjects of a certain student ---');
console.log(getAverageMark(students[0]));


//3 get student info
const getStudentInfo = student => {
    const {course, name} = student;
    return {name, course, averageMark: getAverageMark(student)};
};
console.log('--- Student info---');
console.log(getStudentInfo(students[0]));


//4 students name in order;
const getStudentsName = students => {
    //sort with no params sorts strings by default;
    return students.map(student => student.name).sort();
};
console.log('--- Students name in order---');
console.log(getStudentsName(students));

//5 get best student
const getBestStudent = students => {
    return students.reduce((curr, prev) => getAverageMark(curr) > getAverageMark(prev) ? curr : prev ).name;
};
console.log('--- Best student with max average mark---');
console.log(getBestStudent(students));


//6 calculate word letters
const calculateWordLetters = word => {
    const reps = {}
    for(let ch of word.toLowerCase()){
        (ch in reps) ? reps[ch] += 1 : reps[ch] = 1;
    }
    return reps;
};
console.log('--- Counting letters---');
console.log(calculateWordLetters('test'));
