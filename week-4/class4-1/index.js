
//                          class work ---- week -4.1
// const a=1;
// console.log(`${a}`)

// const chalk=require("chalk")
// console.log(chalk)
// // console.log(__dirname)

// const fs=require("fs")
// function main(file_ke_nam){
//     fs.readFile(file_ke_nam, "utf-8", (err,data)=>{
//         let total=0;
//         for(let i=0; i<data.length; i++){
//             if(data[i]===' '){
//                 total++
//             }
//         }
//         console.log(total+1)
//     })
// }

// main(process.argv[2]);



/*        

#############################################################################################

CLI only works on my machine but express code can be deploy on aws and anyone can 
use it becz it create http servers   

#############################################################################################
            
            */




//$$$$$$$$$  Assignments #1 - Create a cli

//##here we are using commander lib -> node.js lib that used to build CLI based programs.

// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('mera CLI ')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of words in a file txt')
//   .argument('<file>', 'file to count words in it')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const words = data.split(' ').length;  //count spaces...
//         console.log(`There are ${words+1} words in the file ${file}`);
//       }
//     });
//   });
 

//   program.command('count_lines')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count lines in it')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const words = data.split('\n').length;  //count spaces...
//         console.log(`There are ${words} lines in the file ${file}`);
//       }
//     });
//   });

// program.parse();




/*     #### Assignment-2 : filesystem based todo list

fs (File System)
Purpose: Provides functions for interacting with the file system—reading, writing, and managing files and directories.

path
Purpose: Handles and manipulates file and directory paths in a way that's consistent across operating systems (e.g., Windows, macOS, Linux).

commander
Purpose: Makes it easier to build command-line interfaces (CLI) by handling argument parsing and command definitions.



*/



const fs=require('fs');
const path=require('path')
const { Command } = require('commander');
const program = new Command();

program
  .name('Todo application')
  .description('CLI for Filesystem based todo list.')
  .version('0.8.0');


  const todoDB_filepath=path.join(__dirname,'todos.json')



  
  /*
     Synchronous (readFileSync): No callback needed because the method completes and returns the result directly.

      Asynchronous (readFile): Uses a callback to handle the result once the operation completes, allowing the code to continue executing other tasks in parallel.
 */

  //  #######   reading todos.json file ka task

  function readtask(){
    if(!fs.readFileSync(todoDB_filepath, 'utf-8')){     //matlab file empty hai
        return []
    }
    

  /*    JSON.parse(): This is a built-in JavaScript method that parses a JSON string and converts it into 
         a corresponding JavaScript object or array. */   

    const data=fs.readFileSync(todoDB_filepath, 'utf-8')
    return JSON.parse(data || [])

  }


  //    #########       adding a new task in todos.json

  function writeTask(task){
    fs.writeFileSync(todoDB_filepath, JSON.stringify(task,null,2), 'utf-8');
    
  }


  /*  JSON.stringify is the opposite of JSON.parse. While JSON.parse converts a JSON string into a   
      JavaScript object, JSON.stringify does the reverse: it converts a JavaScript object or value into a JSON string. 

      **  JSON.stringify(todos, null, 2

      null --> means no filter or transformation: By passing null, you're telling JSON.stringify to include all properties of the object as they are, without any modifications.
      
      Providing 2 makes the JSON string more readable by adding indentation and line breaks.
      
      */


//  adding todo

program.command('add')
  .description('Adding a todo task to the todos.json file like Datatbase')
  .argument('<todo_name>', 'enter task name')
  .argument('<time>', 'enter deadline time')
  // .option('--first', 'display just the first substring')
  // .option('-s, --separator <char>', 'separator character', ',')
  .action((Taskname, deadline) => {

    const todos=readtask()   //purana wala pura todo iske pass aa gaya. ok

    const newtodo={
      task:Taskname,
      times:deadline,
      status:false
    }


    todos.push(newtodo)    //prev todod + new dono ek sath ek gagah --> todos obj me aa gaya
    //now add todos in todos.json by writetask function

    writeTask(todos)

    console.log('your todo is added successfully.')

    
  });


  //deleting todo


  program.command('delete')
  .description('delete the existing task')
  .argument('<title>', 'enter the name of the task')
  .action((task_name) => {
    const todos=readtask()  //prev store
    const newtodo=todos.filter( (td)=>td.task!== task_name)

    if(todos.length===newtodo.length){
      console.log('todo not found')
    }else{
      writeTask(newtodo)   //uptade the whole DB of task i.e todos.json
      console.log('successfully removed todo')
    }
    
    });



    //mark todo

    program.command('mark')
    .description('mark the task as done')
    .argument('<task>', 'enter the name of the task')
    .action((task_name) => {
      let todos=readtask()
      let taskfound=false;

      todos=todos.map( (td)=>{
        if(td.task===task_name){
          td.status=true
          taskfound=true
        }
        return td
      })

      if(taskfound){
        writeTask(todos)
        console.log('successfully marked the task')
      }else{
        console.log('task not found')
      }
      
      });

      //view all todos
      program.command('view')
      .description('view all the tasks')
      //.argument('<task>', 'enter the name of the task')
      .action(() => {
        const alltodo=readtask()
        console.log(alltodo)
    
      
        
        });





program.parse();


