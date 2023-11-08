                   //Arrays
// JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript arrays are zero-indexed.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArray=[0,1,2,3,4,5,6]
const myHeros = ["shaktiman","nagraj","goga"]

const myArray2 = new Array(9,4,3,5,6,8,2,0)
// console.log(myArray[6]);

               //Array method 

// myArray.push(9)
// myArray.push(10)
// myArray.pop()
// console.log(myArray);

myArray.unshift(7)  //insert 7 at the starting index
myArray.shift()     //remove the element present at starting index
// console.log(myArray);

//console.log(myArray.includes(9)); //ask queation 9 is present or not  
// console.log(myArray.indexOf(5));  

const newArry = myArray.join()
// console.log(myArray);
// console.log(typeof newArry);  //string

//Slice   , Splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C",myArray);