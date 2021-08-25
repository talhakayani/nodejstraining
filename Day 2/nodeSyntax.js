//importing code module
const fileSystem = require('fs');
const data = {
    name: "Talha Kayani",
    designation: 'SE intern',
    salary: '15000',
}
console.log("Creating file...");
fileSystem.writeFileSync("test.json",JSON.stringify(data));
console.log("File Created");


//importing Own Module:
const {displayDetails, name} = require("./ownModule.js");
displayDetails(23);
console.log(name);

//Importing npm module
/*
    steps
    initialize npm using th command "npm init", it creates the package.json file which contais the 
    information about the project constaing modules version and more.
    then we are ready to install the npm module by using the command "npm install 'module_namme'"

    we already have ES6 format but due import is not supported by node so we are unable to use this 
    syntax
    
    * import validator from 'validator'
    
    we also import specific functions from the module, like

    * import isEmail from 'validator'


    */
//ES5 format
const validator =  require('validator');
console.log(validator.isEmail('talha.kayani@example.com'));
console.log(validator.isURL('googlecom'));



//Asyncnronous node.js promises
/*
    promises are used when we face the callback hell issue 
    callback hell is the case in which we have the multiple Asyncronous functions one after other
 */

setTimeout(()=>{
    console.log('1'), 1000;
    setTimeout(()=>{
        console.log('2'), 1000;
        setTimeout(()=>{
            console.log('3'), 1000;
        }, 1000);
    }, 1000);
}, 1000);

let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function() {
        const a = 10, b= 4;
        if(a-b > 5) resolve('success!');
        else reject("error!")
       // Yay! Everything went well!
    }, 4000)

    
  })
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage)
  }).catch((errorMessage) => console.log("ops" + errorMessage));
  