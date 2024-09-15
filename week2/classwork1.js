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


