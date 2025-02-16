

const express=require('express')
const app=express()
const cors=require('cors')




// //  #########################################    class - 5.1    #########################################

// // app.get('/add', (req,res)=>{
// //     let a=parseInt(req.query.a)
// //     let b=parseInt(req.query.b)
// //     const result=a+b

// //     res.status(200).json({
// //         ans:result
// //     })
// // })


// // app.get('/sub', (req,res)=>{
// //     let a=parseInt(req.query.a)
// //     let b=parseInt(req.query.b)
// //     const result=a-b

// //     res.status(200).json({
// //         ans:result
// //     })
// // })

// // app.get('/mul', (req,res)=>{
// //     let a=parseInt(req.query.a)
// //     let b=parseInt(req.query.b)
// //     const result=a*b

// //     res.status(200).json({
// //         ans:result
// //     })
// // })

// // app.get('/div', (req,res)=>{
// //     let a=parseInt(req.query.a)
// //     let b=parseInt(req.query.b)
// //     const result=a/b

// //     res.status(200).json({
// //         ans:result
// //     })
// // })






// // ###############################################  class-5.2  ###########################################











// /*          Assignment #1 - Create an HTTP Server
//             It should have 4 routes

//             http://localhost:3000/sum/1/2
//             http://localhost:3000/subtract/1/2
//             http://localhost:3000/multiply/1/2
//             http://localhost:3000/divide/1/2                       */



//     // app.get('/sum/:a/:b', (req,res)=>{
//     //     const num1=parseInt(req.params.a)  // parseint-> becz Data received from URLs often come as strings.
//     //     const num2=parseInt(req.params.b)
//     //     const result=num1+num2
        
//     //     res.status(200).json({
//     //         "Ans" : result
//     //     })
//     // })



//     // app.get('/subtract/:a/:b', (req,res)=>{
//     //     const num1=parseInt(req.params.a)  
//     //     const num2=parseInt(req.params.b)
//     //     const result=num1-num2
        
//     //     res.status(200).json({
//     //         "Ans" : result
//     //     })
//     // })


//     // app.get('/multiply/:a/:b', (req,res)=>{
//     //     const num1=parseInt(req.params.a)  
//     //     const num2=parseInt(req.params.b)
//     //     const result=num1*num2
        
//     //     res.status(200).json({
//     //         "Ans" : result
//     //     })
//     // })


//     // app.get('/divide/:a/:b', (req,res)=>{
//     //     const num1=parseInt(req.params.a)  
//     //     const num2=parseInt(req.params.b)
//     //     const result=num1/num2
        
//     //     res.status(200).json({
//     //         "Ans" : result
//     //     })
//     // })





//   /* ## Assignment #2 - Create a middleware function that logs each incoming request’s HTTP method, URL, 
//                         and timestamp to the console */

// //   const AccessDetails=(req,res,next)=>{
// //     //console.log(req.method)
// //     console.log(`method is: ${req.method}`)
// //     console.log(`url : ${req.hostname}`)
// //     const time=new Date()
// //     console.log(`timestamp : ${time.toLocaleString()}`)
// //     next() 
// //   }

// //   app.use(AccessDetails)

// //   app.get('/specific', (req,res)=>{
// //     res.json({
// //         message:'all is well'
// //     })
// //   })


// /*########    Assignment #3 - Create a middleware that counts total number of requests sent to a server.  
//                                 Also create an endpoint that exposes it */



// //      let count=0;                           
// //     const counter=(req,res,next)=>{
        
// //         if(req){
// //             count++;
// //             next()
// //         }else{
// //             res.json({
// //                 message:'request to kar bhai.'
// //             })
// //         }
// //     }


// //     //this endpoint count the number of http requests
// //     app.get('/count', (req,res)=>{
// //         res.json(`your total number of responses : ${count}`)
// //     })

// // app.use(counter)
// //     app.get('/', (req,res)=>{
// //         res.json({
// //             message:"successfull request sir."
// //         })
// //     })





// #######   Assignment #4 - Create a backend server in node.js, that returns the sum endpoint
app.use(cors())
app.use(express.json())

app.post('/sum',(req,res)=>{
  const a=parseInt(req.body.num1)
  const b=parseInt(req.body.num2)

  console.log('hello ji')

  console.log(a,b);

  res.json({
    answer:a+b
  })

})

//if frontend and backend are on the same domain then you don't need cors--------
    // send the index.html file as a response
  //   app.get("/", function (req, res) {

  //     res.sendFile(__dirname + "/public/index.html");
  // });


  // app.get('/', (req, res) => {
  //   //res.sendFile(path.join(__dirname+ "/public/index.html"));
  //   res.sendFile(__dirname+"/public/index.html");
  // })





app.listen(3001, ()=>{
    console.log('Your http server is running on port 3001')
})

























// const express = require('express');
// const path = require('path');  // Required to handle file paths
// const cors = require('cors');  // Only needed if there are cross-origin requests
// const app = express();
// const port = 3000;

// app.use(cors());  // Enable CORS if needed
// app.use(express.json());

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // POST endpoint to return the sum
// app.post('/sum', (req, res) => {
//   const a = parseInt(req.body.num1);
//   const b = parseInt(req.body.num2);

//   if (isNaN(a) || isNaN(b)) {
//     return res.status(400).send('Invalid input');
//   }

//   res.json({ answer: a + b });
// });

// // Serve index.html file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Your HTTP server is running on port ${port}`);
// });
