//importing core module
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
  

  //calling multiple promisses in parallel
  const task1 = false;
  const task2 = false;
  const task3 = true;
  const taskOnePromis = new Promise(
      (resolve, reject) => {
          setTimeout(() => {
               task1 ? resolve('task 1 completed') : reject("task 1 fails");
          }, 1000);
         
      }
  );
  const taskTwoPromis = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            task2 ? resolve('task 2 completed') : reject("task 2 fails");
        }, 2000);
    }
    );
    const taskThreePromis = new Promise(
        (resolve, reject) => {
           setTimeout(() => {
                task3 ? resolve('task 3 completed') : reject("task 3 fails");
           }, 500);
        }
    );  
    // Execute all promises without waiting for any of the promise to be completed 
    // if any of the promise is failed then it  will not execute remaining 
    // for removing this issue we use a function from promise which is allSettled
    Promise.all([taskOnePromis,taskTwoPromis, taskThreePromis]).then(
        (messages)=> console.log(...messages)
    ).catch(
        (messages) => console.log (messages)
    );
    /// this will execute and return the first promice when success or fails
   Promise.race([taskOnePromis,taskTwoPromis, taskThreePromis]).then(
        (message)=> console.log(message)
    ).catch(
        (message) => console.log(message)
    )

   /* // it is not available in the version which we are using node version(10.16.0):
   Promise.allSettled([taskTwoPromis,taskOnePromis, taskThreePromis]).then(
        (message) => console.log(message)
    ).catch((message)=> console.log(message));
*/

// async await 
/*these are usefull if we are working with asyncronous functions 
    it returns pomise and it will be handeled same as  normal promise
 syntax */
    const hello = async function() {
        return 'here is somthing happeining';
    }

    hello().then((message) => console.log(message));
/*
the above code is just letting me know about the async 
now let's start working on the await 
await is basically used in async function which helps us to maintain the sequance of the 
function calling like if we want to wait for any function to be executed first we will use async 
along with the await :) 
*/
const welcome = async (user) =>{
    return await Promise.resolve("welcome, "+ user );
}

welcome("talha kayani").then(console.log);

//Now  implement async and await with practical example!
// reading from the test.json file and display that data 


const readDataFromFile = async function() {
    
    try{
        const datas = await fileSystem.readFileSync("test2.json");
        if(datas) throw new Error("something went wrong");
        else return JSON.parse(datas); 
    }catch(err){
        throw new Error(err)
    }
}

readDataFromFile().then(console.log).catch((err)=> console.log('error catched: '+err));

/* 
in above practical example we are waiting for the file to read the content of the file 
once we read the information then it returns the result as promise and we get the data
I also handling the errors in this :)  

*/