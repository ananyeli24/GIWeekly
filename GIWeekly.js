/*EASY: Write a function that would allow you to do this:
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running" 
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"

function exercise(activity) {
    return () => "Today's exercise: " + activity 
    }

var run = exercise('running');
console.log(run()); // prints "Today's exercise: running" 
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"

//MEDIUM: Write a function that would allow you to do this:
//var sharePizza = cutPizzaSlices(8); 
//console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza" 
//console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"


function  cutPizzaSlices(slices) {
    return function (people) {
        var slicesPerPerson = slices/people;
        return "Each person gets: " + slicesPerPerson 
    }
    
}

var sharePizza = (cutPizzaSlices(8)); 
console.log(sharePizza(2));
 //prints "Each person gets 4.00 slices of pizza" 
 console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"

//HARD: Data security exercise. Inside of a closure, create an object called pii 
//(Personally Identifiable Information)that cannot be accessed directly. 
//The object should have at least two properties: name and ssn.
// Only the name property should be accessible, and it should be called through a public function. 
//The ssn property should not be accessible at all.

const dataSecurity = () => {
    const myInfo = () => {
        let pii = {
            name: "Rose",
            SSN: "809-77-8899",
            getName: function(){
                return this.name;
            }
        };
        return pii.getName()
    }
    return myInfo()
}
let getName = dataSecurity();
console.log(getName);

VERY HARD: Object prototype chain and prototypal inheritance exercise.
1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to incorporate the syntax.
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { }
*/

class Programmer {
    constructor (name, job, language, age){
        this.name=name;
        this.job=job;
        this.language=language;
        this.age=age;
        this.busy=busy;
    }
}
var anotherProgrammer= new Programmer(person1.name,person1.job,"English",person1.age);
console.log(individual1);

class School {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}
exercise(){
    return "Running is fun! - said no one ever"
}
fetchJob(){
    return `${this.name}` + "is a" + `${this.job}`
}

let niky = new Person ("Niky", "Student", "27")
console.log(niky,niki.name);
console.log(niki.fetch.Job(), niky.exercise());

completeTask() {
    this.busy = false;
}
acceptNewTask() {
    this.busy = false;
}

offerNewTask(){
    is(this.busy) {
        console.log(`${this.name} can't accept any new task`);
    } else {
        console.log(`${this.name} would like to take new responsibility`);
    }
}