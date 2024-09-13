
function filter_evennum(array){
   return arr.filter(num=>num%2===0)              //filter ek naya array return karta hai
}

function filter_oddnum(array){
   return arr.filter(num=>num%2 !== 0)
}


const arr=[1,2,3,4,5,6,7,8,9]
result=filter_evennum(arr)
result2=filter_oddnum(arr)
console.log(" even array are :   ",result)  
console.log(" odd array are :   ",result2) 
