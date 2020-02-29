const getOrdinal = (number) => {
    switch(number){
        case 1:
            return number+'st';
        case 2:
            return number+'nd';
        case 3:
            return number+'rd';
        default:
            return number+'th';
    }
};

class Student {
    //fields
        // university;
        // course;
        // fullName;
        // points = [5, 4, 4, 5];
        // isGrounded = false;

    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;

        this.points = [5, 4, 4, 5];
        this.isGrounded = false;
    };

    getInfo(){
        return `Student ${getOrdinal(this.course)} course ${this.university} ${this.fullName}.`;
    }

    get marks(){
        if(!this.isGrounded){
            return this.points;
        }
        return null;
    }

    set marks(newMark){
        if(!this.isGrounded && Number(newMark)){
            this.points.push(Number(newMark));
        }
    }

    getAverageMark(){
        if(!this.isGrounded){
            return Number((this.marks.reduce((acc, cur) => acc + cur) / this.marks.length).toFixed(2));
        }
        return null;
    }

    dismiss(){
        this.isGrounded = true;
    }

    recover(){
        this.isGrounded = false;
    }
};

class BudgetStudent extends Student {
    constructor(university, course, fullName){
        super(university, course, fullName);
        // setInterval(this.getScholarship.bind(this), 3000);
        setInterval(() => {
            this.getScholarship();
        }, 30000);
    }

    getScholarship(){
        if(!this.isGrounded && this.getAverageMark() >= 4){
            console.log('You have received 1400uah');
        }else{
            console.log('No scholarship for you this time!');
        }
    }
};

const ivan = new Student('NULP', 1, 'Ivan Ivanovych');
console.log(ivan);
console.log(ivan.getInfo());
console.log('Student marks:');
console.log(ivan.marks);
console.log('Adding mark..');
ivan.marks = '5';
console.log(ivan.marks);
console.log('Student average mark:', ivan.getAverageMark());
console.log('Dismising student...');
ivan.dismiss();
console.log(ivan.marks || 'impossible to access student marks' );
console.log('Recovering student...');
ivan.recover();
console.log(ivan.marks || 'impossible to access student marks' );

//advanced
console.log('-------------advanced------------');
const oleksandra = new BudgetStudent('NULP', 3, 'Oleksandra Oleksandrivna');
console.log(oleksandra.getInfo());
console.log(oleksandra.marks);