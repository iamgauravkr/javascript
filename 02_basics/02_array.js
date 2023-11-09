const marvel_heros = ["iron-man","thor","spiderman","doctor-strange"]
const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);  //superman

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros] //here we use spread (i.e. ...names,...names,...names )
console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_arr.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);