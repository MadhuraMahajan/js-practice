const accountId = 1563654
let accountEmail="madhura@gg.com"
var accountPassword="12345"
accountCity="Hydrabad"

// accountId=232 not allowed to overwritte
console.log(accountId);

accountCity="bengaluru"
accountPassword="223344"
accountEmail="gg@mm.com"

console.table([accountId, accountPassword,accountEmail])
