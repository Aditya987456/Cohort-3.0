/*      

Create a function that takes an array of objects as input and returns the users whose age > 18 and are male           */


function vote_and_male(array){
    return array.filter(person=>person.age>=18  &&  person.gender==="male")
}


/* *************       ARRAY of OBJECTS       ************* */
const users=[

    {
        name:"buttan",
        gender:"male",
        age:45
    },

    {
        name:"sarkar",
        gender:"male",
        age:89
    },

    {
        name:"khushi",
        gender:"female",
        age:20
    },

    {
        name:"aaranya",
        gender:"female",
        age:19
    },

    {
        name:"aditya",
        gender:"male",
        age:22
    } 
]

const result= vote_and_male(users)
console.log(result)



        