//primitive datatypes (call by value)
// 7types :string,boolean,bigInt,symbol,number,undefined,null;

const score=100
const scorevalue=100.3
// console.log(score==scorevalue);
const isloggedIn=false   //typeof isloggedIn: Boolean
const outsideTemp=null  //typeof outsideTemp is :Object
let userEmail;

const Id=Symbol('123')   // typeof  Id:Symbol
const anotherId=Symbol('123')  //typeof anotherId: Symbol
// console.log(Id==anotherId);//false


const bigNumber=1236557894235n  //typeof bigNumber: bigint

//Reference(Non-primitive)
//Array,Objects,Functions

const heros = ['Shaktiman', 'Nagraj', 'Doga']
let myObj={                                       //typeof myObj: object
    name:"Gaurav",
    age :20,

}     

let myFunction=function(){                        //typeof  myFunction: function
    console.log("Hello World");
}

//console.log(typeof  myFunction);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Stack(Primitive i.e. call by value)   , Heap(Non-Primitive i.e reference)
//++examples of stack
let myYoutubeName = "Saurav ka safar"
let anotherName = myYoutubeName
 anotherName = "Welcome to cricket world"

 console.log(myYoutubeName);
 console.log(anotherName);
 
 //in stack data copied i.e. in ABOVE EXAMPLE data(saurav ka safar) will be copied in anotherName NOW WE CHANGE THE VALUE OF anotherName by 
 // Welcome  to cricket world here we clearly see that only the value of anotherName changed not myYoutubeName bacause data is copied.
 //but in case of heap , heap used reference type i.e. in this case dublicate and original data both will be changed


 //examples of heap
let userOne = {
    email : "user@googleg.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "gk@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

//here both original and dublicate  data changed because heap used reference data type.