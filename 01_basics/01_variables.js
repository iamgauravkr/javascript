const AccountId=1800000
let Accountemail= "gaurav141052003@gmail.com"
var AccountPassword=14052003
AccountCity = "Mahua"

//AccountId=2//not allowed as we can't chane the value of constant 
Accountemail="gk900@gmail.com"
AccountPassword=147895
AccountCity="hajipur"

let AccountState;


console.log(AccountId)
/*
prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([AccountId, AccountPassword, Accountemail, AccountCity, AccountState]);