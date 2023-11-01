const name = "Gaurav"
const repoCount = 50

console.log(name + repoCount + "value" );  //this is outdated method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //good method

const gameName= new String('sonu')   //const gameName= new String('sonu')
                                     //->undefined
                                     //->gameName
                                     //->String {'sonu'}0: "s"1: "o"2: "n"3: "u"length: 4[[Prototype]]: String[[PrimitiveValue]]: "sonu"
