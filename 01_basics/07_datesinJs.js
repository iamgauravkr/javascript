//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 4, 14, 7, 8)
// let myCreatedDate = new Date("2023-1-14")  
 let myCreatedDate = new Date("01-14-2005")    
// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); 

