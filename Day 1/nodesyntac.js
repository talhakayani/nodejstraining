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
