const accountId = 1563654
let accountEmail="madhura@gg.com"
var accountPassword="12345"
accountCity="Hydrabad"
let accountState

// accountId=232 not allowed to overwritte
console.log(accountId);
// prefer not to use var because of use in block scope and functional scope
accountCity="bengaluru"
accountPassword="223344"
accountEmail="gg@mm.com"

console.table([accountId, accountPassword,accountEmail,accountState])
