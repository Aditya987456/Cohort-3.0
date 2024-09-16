// function sum(a,b){
//     return a+b
// }

// let ans=sum(45,5)
// console.log(ans)

//      ++++++++++++++   sum upto 'n'

// function sum(n){


//     let ans=0
//     for(let i=0; i<=n; i++){
//         ans=ans+i
//     }
//     return ans
// }
// console.log(sum(5))




//******************  I/P heavy operation...     */

//1.  reading a file.

// const fs=require("fs");

// const contents=fs.readFileSync("a.txt","utf-8");
// console.log(contents);





// const libr = require("fs");

// const first_file = libr.readFileSync("week2/a1.txt", "utf-8");  //synchronously
// console.log(first_file);



// const second_file = libr.readFile("week2/b1.txt", "utf-8");    //asynchronously
// console.log(second_file);




//  ********************  passing function to an another function as an argument   ***********************

//simple calculator

/*
function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function do_operation(num1,num2,operation){
    return operation(num1,num2)
}

let result=do_operation(95,5,divide)
console.log(result)
*/




//*********     Asynchronous code and callbacks     ************************/


/*

const libr=require("fs")

function print(err,data){             //known as error first function
    console.log(data)
}
libr.readFile("week2/a1.txt", "utf-8", print)
libr.readFile("week2/b1.txt", "utf-8", print)
console.log("done dana dan")

*/



// function readFile(filepath, encoding, op){      //op --> ya fir callback
//     //readfile
//     op("error","file_data")   //handle error pahle of this file then do print of data....
// }


////////////writing as actual function of print function..

// const libr=require("fs")

// function print(err,data){ 
//     if(err){
//         console.log("galat hai brooooooooo" , err)
//     }else{           
//     console.log("data is " ,data)
//     }
// }
// libr.readFile("week2/a1.txt", "utf-8", print)
// libr.readFile("week2/b1.txt", "utf-8", print)
// console.log("done dana dan")




console.log("helllllllloooooooo")

function timeout(){
    console.log("asynch call timeout")
}

setTimeout(timeout,10000)

console.log("hi there...")

let c=0
for(let i=0; i<20; i++){
    c=c+1
}
console.log(c)

//ab yaha pe callback queue se call stack me jayege api request --->  settimeout...






