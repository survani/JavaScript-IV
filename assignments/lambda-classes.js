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
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} recieves a perfect score on the ${this.subject} test!`;
    }
}

class Student extends Person { //Extending from the main 'Person'.
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listSubjects () {
        return `${this.favSubjects}`;
    }

    prAssignment () {
        return `${this.name} has submitted a PR Assignment for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun the Sprint challenge on ${subject}.`;
    }

}

class teamLeads extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(chan) {
        return `${this.name} announces to ${chan}, @chan standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}

//! Below is an expirement I am doing.... 

// const studentOne = new Student ({
//     name: 'Giovani',
//     age: 18,
//     location: 'California',
//     previousBackground: 'Lyft',
//     className: 'Web Dev',
//     favSubjects: ['JavaScript, CSS, HTML, Design']
// });

// const studentTwo = new Student ({
//     name: 'John',
//     age: 45,
//     location: 'California',
//     previousBackground: 'Lyft',
//     className: 'JS-I',
//     favSubjects: studentOne.favSubjects,
// });

// console.log(studentOne.sprintChallenge('JavaScript'));
// console.table(studentTwo);


