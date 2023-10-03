//primitive datatypes (call by value)
// 7types :string,boolean,bigInt,symbol,number,undefined,null;

const score=100
const scorevalue=100.3
// console.log(score==scorevalue);
const isloggedIn=false   //typeof isloggedIn: Boolean
const outsideTemp=null  //typeof outsideTemp is :Object
let userEmail;

const Id=Symbol('1233')   // typeof  Id:Symbol
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

console.log(typeof  myFunction);
