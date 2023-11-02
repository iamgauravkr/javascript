const name = "Gaurav"
const repoCount = 50

console.log(name + repoCount + "value" );  //this is outdated method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //good method

const gameName= new String('Gangstar -gs-com')   //const gameName= new String('sonu')
                                     //->undefined
                                     //->gameName
                                     //->String {'sonu'}0: "s"1: "o"2: "n"3: "u"length: 4[[Prototype]]: String[[PrimitiveValue]]: "sonu"

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
//console.log(gameName.charAt(s));    //error 
console.log(gameName.charAt(2));     //to know about character at given position
console.log(gameName.indexOf('s'));  // to know about position of given character

const newString =gameName.substring(0, 4)  //print character upto 3rd position 4th position is not included
                                           // we can't give negative value in substring
console.log(newString);
 const anotherString = gameName.slice(-8, 3) // first count from end to 8 character then print character upto 2nd position from start(i.e. Gan )
 console.log(anotherString);

 const thirdString = gameName.slice(-6, 4) //first count from end to 6 character then print character in between 6th from backend 4th position from start(i.e. ng )
 console.log(thirdString);

const anotherStringOne = "       Gaurav      "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const url = "https://gaurav.com/gaurav%20chaudhary"
 
console.log(url.replace('%20','-'));
console.log(url.includes('gaurav')); // includes will ask question that gaurav is included in the given url or not

console.log(gameName.split('-'));