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

module.exports = { Student };