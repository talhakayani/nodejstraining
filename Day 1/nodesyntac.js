//"use strict" //ES5 feature

//ES5 and ES6 variables Syntax
var nameEs5 = "talha kayani es5";
console.log(nameEs5);

let nameEs6 = "talha kayani es6";
console.log(nameEs6);

const nameConstEs6 = "talha kayani const es6";
console.log(nameConstEs6);

const int_a=10, int_b=21;
const result = int_a+int_b;
//or
console.log(int_a+int_b);

const float_a = 10.0, float_b = 20.0;
console.log(float_a+ float_b);

//Declaring variables using var
var scopeVariable = 10; //here variable value is 10
{
    var sopeVariable = 2; 
    console.log('{...} ', sopeVariable);// in {...} scopeVariable is 10;
}
console.log(scopeVariable); // here variable value is 10;


//Using let
let scopeVariableLet = 200; //value is 200
{
    let scopeVariableLet = 300; 
    console.log('{...} ', scopeVariableLet); //value is 300
}
console.log(scopeVariableLet); // value is 200


//Strings;
//Concatination
console.log(nameEs5 + nameEs6);

//String can be object
let str = "talha";
let strObject = new String("talha");

console.log(str == strObject ) // result will be true;
console.log(str === strObject) // result will be false, different types (sting === object)

// comparison of 2 objects will be false


//String methods
//Length 
workingString = "Some people have curly brown hairs";
console.log(workingString.length);
console.log(workingString.slice(5,11)); //return "people" if you want specific portion from string
console.log(workingString.slice(5)); // return remaining part from 5; index is 0-based
//slice also accept negative values;
console.log(workingString.slice(-5));// return hairs

// we also apply function on function if function returns something;

console.log(workingString.slice(-5).toUpperCase().slice(-2));

//String template;
const detailObject = {
    name: "Talha",
    age: 15,
    height: 5.11
}
console.log(`Name: ${detailObject.name}\nAge: ${detailObject.age}\nHeight: ${detailObject.height}`);



// Conditions

if(true){
    console.log("condition true");
}
if(false){

}else{
    console.log("1st Condition false");
}

switch(1){
    case 2:
        console.log(2);
        break;
    case 1:
        console.log(1);
        break;
    default:
        console.log("default");
}

(10 < 20)? console.log("10 is less than 20"): console.log("10 is not less than 20");


// loops
 
for(let i = 0 ; i<3 ;i++){
    console.log(i);
}

//Using for-of;
const arrNumbers = [1,2,3,4,5,6,7];
for(const s of arrNumbers){
    if(s === 2) continue;
    console.log(s);

}

// Using for-in loop;

let object = { name: "talha", age : 20, height: 5.11};
for( const obj in object){
    console.log(obj,object[obj]);
}
//it also work on string array or every itrateable object or variable;
let resultForIn = [];
for(const w in workingString){
    resultForIn.push(workingString[w]);
}
console.log(resultForIn);


//Regluar expression

const dummyString = "welcome to InvoZone!";

console.log(dummyString.search("welcome")); 
console.log(dummyString.search(/welcome/i)) //'i' case sensitive search
console.log(dummyString.search(/o/g)); //reteurns the  number of occurance 

// password Strength using regular expression:

const password = "tal.kay#12%G.mail@com";
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
console.log(strongRegex.test(password));


//error handling

const checkForErros = 10;

try{
    if(checkForErros === 10) throw "number  is 2 digit";
}catch(err){
    console.log(err);
}


//working with object and this keyword

const person = {
    name: "talha Kayani",
    age: 23,
    cnic: "37406-23333333-3",
    height: 5.11,
    weight: 85,
    BMI: function(){
        return this.weight/((0.3048 * this.height)*2);
    },
    
    //another way of writing funtion
    //BMI: ()=> this.weight/(0.3048 * this.height)
    
}

console.log(person.BMI());

// Classes and objects 

class Person{
    constructor(name, age, height, weight,cnic){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.cnic = cnic;
    }

    BMI () {4
        return this.weight/(0.3048 * this.height);
    }

    display(){
        console.log(`Name: ${this.name}\nCNIC: ${this.cnic}\nAge: ${this.age}`);
    }
};

const p = new Person("Talha",23, 5.11, 85, "123123123123");
console.log(p.BMI());
p.display();

//Inheritance
class Vehical{
    constructor(brand, year){
        this._carBrand = brand;
        this._modal = year;
    }

    get carBrand(){
        return this._carBrand;
    }
    get modal(){
        return this._modal;
    }
    
    set carBrand(brand){
        this._carBrand = brand;
    }
    set modal(year){
        this._modal = year;
    }

    show(){
        console.log(`Brand Name: ${this._carBrand}\nModal: ${this._modal}`);
    }

}

class Car extends Vehical{
    constructor(brandName, modal, speed){
        super(brandName, modal);
        this._speed = speed;
    }
    get speed(){
        return this._speed;
    }
    set speed(s){
        this._speed = s; 
    }
    show(){
        super.show();
        console.log(`Speed: ${this._speed}`);
    }

    static calculateAccelration(){ //this method is only called by class name itself not by the object
        return 200;
    }
}

const honda =new  Car("Honda",2007,140);
honda.show();
console.log(Car.calculateAccelration()); // Static method is called here by the class name itself



//  Callbacks;
// when a function is passed to a function is called callback for that function;
function display(result) {
    console.log(result)
}
function calculator(a1, b1, thisCallBack){
    const result = a1+b1;
    thisCallBack(result);
}

calculator(1,2, display);

/// Asynchronous 
function processing() {
    console.log("process done!");
}
console.log("Please wait for 3 sec");
setTimeout(processing, 2000); 

/*In the real world, callbacks are most often used with asynchronous functions.

A typical example is JavaScript setTimeout().
*/
console.log("Other lines or functions are executing simultaneously");

