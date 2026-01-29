const accountId = 123456
let accountEmail = "Amit@9797"
var accountPassword = "12345"
  accountCity = "jaipur"

// accountId = 2  not allow

/*
never use var because issue in block and functional scope
*/

accountEmail = "amit@8052"
accountPassword = "456748"
accountCity = "delhi"

console.table([accountId,accountEmail,accountPassword,accountCity])