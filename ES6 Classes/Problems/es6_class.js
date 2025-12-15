/*
Problem statement
Create two classes, Person and Student, to model individuals and their behaviours. 
Implement properties and methods to display personalized messages about their identity and academic details.

1. Create a class called Person with the following properties and methods.

Properties:-
name (string)
age (number)
gender (string)

Methods:
speak() - logs a message to the console saying "Hello, my name is [name] and I am [age] years old."

Constructor:
Include a constructor in the class that accepts name, age, and gender as arguments and initializes the corresponding properties.

2. Create a class called Student with the following properties and methods:

Properties:
person (object)
major (string)
gpa (number)

Methods:
study() - logs a message to the console saying "I am studying [major] and my GPA is [gpa]."
speak() - logs a message to the console saying "Hello, my name is [name] and I am [age] years old. I am also a student studying [major]."

Constructor:
Include a constructor in the Student class that accepts a Person object, major, and gpa as arguments. 
It should initialize the person property with the provided Person object and assign the given values to major and gpa.

Expected Input:-
const person1 = new Person("John",20,"M");

person1.speak();
const stud1 = new Student(person1,"CS",9);
stud1.speak();
stud1.study();

Expected Output:-
Hello, my name is John and I am 20 years old.
Hello, my name is John and I am 20 years old. I am also a student studying CS.
I am studying CS and my GPA is 9.
 
Hint:
The Student class has a person property, which is an object of the Person class. 
To access the name and age of the student, you should use this.person.name and this.person.age.

*/

class Person{
    // properties
    name;
    age;
    gender;

    // constructor
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // method
    speak(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} year old.`);
    }
}

class Student{
    // properties
    person;
    major;
    gpa;

    // construcotr
    constructor(person,major,gpa){
        this.person = person;
        // this.name = this.person.name;
        // this.age = this.person.age;
        // this.gender = this.person.gender;
        this.major = major;
        this.gpa = gpa;
    }

    study(){
        console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
    }
    speak(){
        console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} year old.I am also a student studying ${this.major}`);
    }
}


const person1 = new Person("John",20,"M");

person1.speak();
const stud1 = new Student(person1,"CS",9);
stud1.speak();
stud1.study();