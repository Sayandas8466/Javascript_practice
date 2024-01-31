const accountId = 14423
let accountEmail = "sayan01@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId=1234 // not allowed

/* 
Prefer not use var variable
Beacuse of issues in block scope and functional scope
 */


accountEmail = "sd@sd.com"
accountPassword = "21232"
accountCity = "kolkata"

console.table([accountEmail,accountPassword,accountCity, accountState])

console.log(accountId); 