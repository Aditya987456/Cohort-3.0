
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


//                                          WEEK-4.1 (ASSIGNMENTS)

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



// const fs=require('fs');
// const path=require('path')
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('Todo application')
//   .description('CLI for Filesystem based todo list.')
//   .version('0.8.0');


//   const todoDB_filepath=path.join(__dirname,'todos.json')



  
//   /*
//      Synchronous (readFileSync): No callback needed because the method completes and returns the result directly.

//       Asynchronous (readFile): Uses a callback to handle the result once the operation completes, allowing the code to continue executing other tasks in parallel.
//  */

//   //  #######   reading todos.json file ka task

//   function readtask(){
//     if(!fs.readFileSync(todoDB_filepath, 'utf-8')){     //matlab file empty hai
//         return []
//     }
    

//   /*    JSON.parse(): This is a built-in JavaScript method that parses a JSON string and converts it into 
//          a corresponding JavaScript object or array. */   

//     const data=fs.readFileSync(todoDB_filepath, 'utf-8')
//     return JSON.parse(data || [])

//   }


//   //    #########       adding a new task in todos.json

//   function writeTask(task){
//     fs.writeFileSync(todoDB_filepath, JSON.stringify(task,null,2), 'utf-8');
    
//   }


//   /*  JSON.stringify is the opposite of JSON.parse. While JSON.parse converts a JSON string into a   
//       JavaScript object, JSON.stringify does the reverse: it converts a JavaScript object or value into a JSON string. 

//       **  JSON.stringify(todos, null, 2

//       null --> means no filter or transformation: By passing null, you're telling JSON.stringify to include all properties of the object as they are, without any modifications.
      
//       Providing 2 makes the JSON string more readable by adding indentation and line breaks.
      
//       */


// //  adding todo

// program.command('add')
//   .description('Adding a todo task to the todos.json file like Datatbase')
//   .argument('<todo_name>', 'enter task name')
//   .argument('<time>', 'enter deadline time')
//   // .option('--first', 'display just the first substring')
//   // .option('-s, --separator <char>', 'separator character', ',')
//   .action((Taskname, deadline) => {

//     const todos=readtask()   //purana wala pura todo iske pass aa gaya. ok

//     const newtodo={
//       task:Taskname,
//       times:deadline,
//       status:false
//     }


//     todos.push(newtodo)    //prev todod + new dono ek sath ek gagah --> todos obj me aa gaya
//     //now add todos in todos.json by writetask function

//     writeTask(todos)

//     console.log('your todo is added successfully.')

    
//   });


//   //deleting todo
//   program.command('delete')
//   .description('delete the existing task')
//   .argument('<title>', 'enter the name of the task')
//   .action((task_name) => {
//     const todos=readtask()  //prev store
//     const newtodo=todos.filter( (td)=>td.task!== task_name)

//     if(todos.length===newtodo.length){
//       console.log('todo not found')
//     }else{
//       writeTask(newtodo)   //uptade the whole DB of task i.e todos.json
//       console.log('successfully removed todo')
//     }
    
//     });



//     //mark todo

//     program.command('mark')
//     .description('mark the task as done')
//     .argument('<task>', 'enter the name of the task')
//     .action((task_name) => {
//       let todos=readtask()
//       let taskfound=false;

//       todos=todos.map( (td)=>{
//         if(td.task===task_name){
//           td.status=true
//           taskfound=true
//         }
//         return td
//       })

//       if(taskfound){
//         writeTask(todos)
//         console.log('successfully marked the task')
//       }else{
//         console.log('task not found')
//       }
      
//       });

//       //view all todos
//       program.command('view')
//       .description('view all the tasks')
//       //.argument('<task>', 'enter the name of the task')
//       .action(() => {
//         const alltodo=readtask()
//         console.log(alltodo)
//         });

// program.parse();









//                                          WEEK-4.2  HTTP Servers (ASSIGNMENTS)




/* Assignment #1 - Trying to code a todo app and store data into the array     */


// const express=require('express');
// const app=express();



// let todoDB=[]   //in memory array to store the all todos it is like db for this program.








// //------------ in this grp there is no need of middleware app.use(express.json())   becz no need to pass json in body during delete and get


// // ##############  view todo

// app.get('/view', (req,res)=>{

//   if(todoDB.length===0){
//     return res.send('no todo found')
//   }

//   res.status(200).json({
//     todoDB
//   })
// })



// //############ deleting all todo

// app.delete('/delete', (req,res)=>{

//   if(todoDB.length===0){
//     return res.send('No todo found for delete')
//   }
  
//   todoDB=[];  //assign empty.
  
//   res.status(200).json({
//     message:"successfully deleted all todos"
//   })
// })


//####### delete todo by specific id

// app.delete('/delete/:id', (req,res)=>{

//  const currentID=parseInt(req.params.id)

//  const flag=todoDB.find( (db)=>db.id===currentID)

//  if(!flag){
//   return res.json({
//     message:"No id is there to your given id"+currentID
//   })
//  }
// //push karke dekh
// // todoDB.push(todoDB.filter( (tdb)=>tdb.id !==currentID ))

// todoDB=todoDB.filter( (tdb)=>tdb.id !==currentID )

//  res.status(200).json({
//   message:"successfully deleted the todo which has id = "+currentID
//  })


// })

// //--------------


// app.use(express.json())  //using in built middleware to parse JSON data in request body.

// //################### adding task

// app.post('/add',(req,res)=>{

//   const todo=req.body.todo
//   //const { task }=req.body
//   const id=parseInt(req.body.id)

//   //id check
//   if(!id){
//     return res.json({
//       message:"id cannot be empty"
//     })
//   }

//   const flag=todoDB.find( (db)=> db.id===id);

//   if(flag){
//     return res.json({
//       message:"id is already exist sir."
//     })
//   }


//   //todo name check

//   if(!todo || todo.trim().length===0){
//     return res.send("todo can not be empty")
//   }


//   let newtodo={
//     id:id,
//     name:todo,
//     status:false
//   }

//   todoDB.push(newtodo);

//   res.status(200).json({
//     message:"successfully added the todo"
//   })
// })


// // ################### marking todo --> true or false

// //marking status of all --> true.
// app.put('/mark', (req,res)=>{

//   if(todoDB.length===0){
//     return res.send('No todo found for marking')
//   }

//   todoDB.map( (tdb)=>tdb.status=true);

//   res.json({
//     message:"marked all todos status as true."
//   })

// })


// //marking todo by specific id

// app.put('/mark/:id', (req,res)=>{
//   const markID=parseInt(req.params.id)
  
//   const flag=todoDB.find( (tdb)=>tdb.id===markID)
//   if(!flag){
//     res.json({
//       message:"no id is matched to your entered id : "+markID
//     })
//   }

//   todoDB.filter( (td)=>td.id===markID).map( (tdd)=>tdd.status=true)

//   res.status(200).json({
//     message:"your todo status marked to true successfully."
//   })

// })




// //  ###################### update todo using its id

// app.put('/update/:id', (req,res)=>{

//   const updateID=parseInt(req.params.id)
//   const taskName=req.body.title;

//   if(todoDB.length===0){
//     return res.send('No todo found')
//   }

//   const flag=todoDB.find( (db)=>db.id===updateID )

//   if(!flag){
//    return res.json({
//      message:"No todo is there to your given id : "+updateID
//    })
//   }

//   if(!taskName || taskName.trim().length===0){
//     return res.json({
//       message:"todo should not be empty."
//     })
//   }

//   todoDB.filter( (td)=>td.id===updateID ).map( (tdd)=>tdd.name=taskName )

//   res.status(200).json({
//     message:"successfully updated the todo of the id: "+updateID
//   })



// })



// app.listen(3000, ()=>{
//   console.log('Server is running on 3000 port')
// })



//  ##  Assignment #2 - Trying to code a filesystem based todo app and store data into the file

const express=require('express')
const app=express()
const fs=require('fs')
const path=require('path')
//app.use(express.json())

const taskPath=path.join(__dirname,'task.json')

//reading file.
const readTask = ()=>{
  try {
    const data = fs.readFileSync
    (taskPath, "utf-8");
    return JSON.parse(data);
    
  } catch (err) {
    return [];
    
  }
}







/* ############################  important concept...###############################################################

Why Use JSON.stringify:
Text Format Requirement:

Files are inherently text-based, meaning any data written to a file must be in a string format. JavaScript objects or arrays cannot be directly written to a file as they are not in a text format. Using JSON.stringify converts these objects into a JSON string, which is a text format.

Data Serialization:

Serialization is the process of converting complex data structures (such as objects and arrays) into a format that can be easily stored and transmitted. JSON (JavaScript Object Notation) is a widely used serialization format. JSON.stringify performs this serialization, ensuring that your JavaScript objects are transformed into a standardized text representation.

Consistency and Interoperability:

JSON is a standardized format, making it compatible across different programming languages and systems. By using JSON.stringify, you ensure that the data written to the file is in a consistent and interoperable format, which can be read and processed by other systems or languages that support JSON.

Readability and Debugging:

The JSON.stringify method allows you to add optional formatting parameters (null, 2 in your case) to make the JSON string more readable. This is especially helpful for debugging and manual inspection of the file's contents.


################################################################################################################# */


//writing file.

const writeTask=(data)=>{
  fs.writeFileSync(taskPath, JSON.stringify(data,null,2), "utf-8")
}





//--------------------------  not req middleware express.json()----------------


// ############### view all todos from the file task.json

app.get('/view', (req,res)=>{



})

//################  delete todos

//delete all
app.delete('/delete', (req,res)=>{

  const todos=readTask()
    if(todos.length===0){
    return res.send('No todo found for delete')
  }

  writeTask([])

    res.status(200).json({
    message:"successfully deleted all todos"
  })
})

//delete by id
app.delete('/delete/:id', (req,res)=>{
  const deleteID=parseInt(req.params.id)

  const todos=readTask()
  const flag=todos.find( (db)=> db.id===deleteID);

  if(!flag){
      return res.json({
     message:"No todo is there to match your given id for delete: "+deleteID
   })
  }

  /* todos.filter(......)  not do directly becz.
  The issue lies in the line where you're using filter to remove the todo item with the specified ID. The filter method returns a new array and does not modify the original array in place. However, you're not using the result of filter, so the todos array remains unchanged 

$$$$*********** Why Use updatedTodos:***********
Immutable Operation: The filter method does not modify the original array (todos). Instead, it returns a new array that contains only the elements that satisfy the condition (td.id !== deleteID).
  
  
  */

  const updatedtodos=todos.filter( (td)=>td.id != deleteID )
  writeTask(updatedtodos)

  res.status(200).json({
    message:"your todo deleted successfully, whose id is : "+deleteID
  })




})






//##################  MARK status by ID.

//mark all
app.put('/mark', (req,res)=>{

  const todos=readTask();
  if(todos.length===0){
    return res.send("no todo found for marking , file is empty")
  }


todos.map( (tdd)=>tdd.status=true )
writeTask(todos)

res.status(200).json({
  message:"Marked all todos status as true "
})

});


//mark by only id
app.put('/mark/:id', (req,res)=>{
  const markID=parseInt(req.params.id)


  const todos=readTask();
  const flag=todos.find( (db)=> db.id===markID);

  if(!flag){
      return res.json({
     message:"No todo is there to match your given id for mark: "+markID
   })
  }

  todos.filter( (td)=>td.id===markID).map( (tdd)=>tdd.status=true)

  writeTask(todos)

    res.status(200).json({
    message:"your todo status marked to true successfully."
  })

})






//-----------------------------------------






app.use(express.json())   //parse body data -> json...

// ###################### adding todos
app.post('/add', (req,res)=>{
  const id=parseInt(req.body.id)
  const title=req.body.todo

    if(!id){
    return res.json({
      message:"id cannot be empty"
    })
  }
//reading todo from the file
  const todos=readTask();
  const flag=todos.find( (db)=> db.id===id);
  //const flag=readTask().find( (db)=> db.id===id);

  if(flag){
    return res.json({
      message:"id is already exist sir."
    })
  }

    if(!title || title.trim().length===0){
    return res.send("todo can not be empty")
  }

    let newtodo={
    id:id,
    todo:title,
    status:false
  }

  /* When you write the updated array back to the file, it will overwrite the existing content of the file. This means you won't end up with two copies; instead, the file will contain only the updated array of todos.

 $$$ The reason you can't directly do writeTask(newtodo) is that newtodo is a single object representing a single todo item. The writeTask function expects to receive an array of todos, not a single todo object. Here’s a detailed explanation:
  
todos.push(newtodo);
Write the updated array back to the file
writeTask(todos)
*/
  
todos.push(newtodo);
writeTask(todos);

// writeTask(newtodo);

  res.status(200).json({
        message:"successfully added the todo"
      })

})





//########### update by id.

app.put('/update/:id', (req,res)=>{

  const updateID=parseInt(req.params.id)
  const {todo}=req.body

  const todos=readTask();
  const flag=todos.find( (db)=> db.id===updateID);

  if(!flag){
      return res.json({
     message:"No todo is there to match your given id : "+updateID
   })
  }

  if(!todo || todo.trim().length===0){
    return res.json({
      message:"todo should not be empty."
    })
  }

  todos.filter( (td)=>td.id===updateID ).map( (tdd)=>tdd.todo=todo )

  writeTask(todos);

  res.status(200).json({
    message:"successfully updated the todo of the id: "+updateID
  })

})












app.listen(3000, ()=>{
  console.log("your server running on the port 3000")
})



