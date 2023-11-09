const marvel_heros = ["iron-man","thor","spiderman","doctor-strange"]
const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);  //superman

const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros] //here we use spread (i.e. ...names,...names,...names )
// console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_arr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("Gaurav"));//it will ask question whether it is array or not
console.log(Array.from("Gaurav"));//gives an array 
console.log(Array.from({name:"Gaurav"})) //interesting //yaha par kiska array banana h keys ka value isiliye ye empty array dega

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));