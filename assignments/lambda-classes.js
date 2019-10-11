// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {return `Hello my name is ${this.name}, I am from ${this.location}. `;
    }
}

class Instructor extends Person { // Extending from the main 'Person'.
    constructor(attr) {
        super(attr); // Adds all the attr from the Class 'Person'
        this.specialty = attr.specialty; // New to this Class
        this.favLanguage = attr.favLanguage; // New to this Class
        this.catchPhrase = attr.catchPhrase; // New to this Class
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject) {
        return `${student.name} recieves a perfect score on the ${this.subject} test!`;
    }
}

class Student extends Person { //Extending from the main 'Person'.
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.classname = attr.classname;
        this.favSubjects = attr.favSubjects;
    }

    listSubjects () {
        return `${this.favSubjects}`;
    }

    prAssignment () {
        return `${this.name} has submitted a PR for ${subject2}.`;
    }

    sprintChallenge() {
        return `${this.name} has began the Sprint challenge on ${subject3}.`;
    }

}

class teamLeads extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(name, studentObj) {
        return `${name} debugs ${this.name}'s code on ${studentObj}.`;
    }
    debugsCode() {
        return(`${this.name} debugs ${this.}`)
    }
}


