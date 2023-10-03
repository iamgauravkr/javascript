let score="33abc"

//console.log(typeof score);  
//console.log(typeof(score));

let valueInNumber = Number(score) //convert the string into number 

//console.log(typeof valueInNumber );
//console.log(valueInNumber); //

// "33" => 33
// "33abc" => nan
// "true" => 1 or "false" => 0
// undefined => undefined
//null => 0

let isLoggedIn= 1
let booleanIsLoggedIn=Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 =>true; 0 =>false
// "" =>false
// " " =>true
// "gaurav" =>true

let someNumber=33

let stringNumber=String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// ************************Operations***********************

let value=3
let negvalue=-value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(3%2);

let str1="gaurav"
let str2=" sonu"
let str3=str1 + str2

// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

// console.log((3+4)*5%3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 =2+2;
let gameCounter=100;
++gameCounter;
console.log(gameCounter);

//read prefix and post through mdn link given below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment