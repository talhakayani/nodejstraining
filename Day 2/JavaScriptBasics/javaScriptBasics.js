//Practicing...
console.log(Date());
console.log(new Date().getMonth());

//Pure function
const sum = (a, b) => a+b;  // here there is no side effect because the function is not dependent on a and b
console.log(sum(10,20));

// Impure function
const a = 10, b = 19; 
const add = function() {
    return a+b; // a and b is side effect here because the function is dependent on the a and b 
}
console.log(add());

// muteable and immuteable
/* in javaScript array and objects are muteable and number and strings are immuteable */
// here is the example of immuteable String
let str = "hello";
str = str + ", talha";
// why they are immuteable because the values are changes by value not by reference


//Muteable objects
// in JS objects and array are muteable data types because it can changes its values with time 
// also it changes by reference not by value
let obj = {name: "talha"}
let obj2 = obj;
obj.name = "usman";
console.log(obj.name === obj2.name); // this will returns true because the values are same



//Declarative Programming and Imperative Programming
//Imperative Programming
let num1, num2;
num1 = 10;
num2 = 20;
const result = num1 + num2;
console.log(result);

//Declarative Programming
const num1_ = 10, num2_ = 20;
console.log(num1_+num2_);


//Higher order function
const display = (name, age, salary) => { return {name:name, age: age, salary: salary}};
const details = (name, age, salary) => display(name,age,salary);
console.log(details("talha",23,15000));
//it always returns a function 