//Singleton
//object.create


//Object literals

const mysym = Symbol("key1")

const jsuser = {
    name:"Gaurav",
    "full name": "gaurav kumar",//we can't access full name with using dot i.e. jsuser.full name
    [mysym] :"mykey1", //[]sq. bracket is used to represent symbol if just remove only sq. bracket then it becomes normal key like string
    age:20,
    location:"Bihar",
    email: "gaurav14052003@gmail.com",
    isLoggedIn:false,
    lastLogininDays:["monday","saturday"]
    
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

jsuser.email = "gauravaiml@gmail.com"
// Object.freeze(jsuser)
jsuser.email ="gk900735@gmail.com"
// console.log(jsuser);


const greeting = function(){
 console.log("hello js user");
}

const greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
   }
console.log(jsuser.greeting);
console.log(jsuser.greetingTwo());
