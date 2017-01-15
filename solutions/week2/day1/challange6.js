var bankAccount = function(val) {
    this.balance = val || 0
}

bankAccount.prototype.withdraw = function(tot){
    this.balance -= tot
}
bankAccount.prototype.deposit = function(tot){
    this.balance += tot
}


var Server = function () {
    this.accounts = []
}

var parseAmmount = function(val){
    var ammount = parseInt(val)
    return isNaN(ammount) ? 0 : ammount
}

Server.prototype.router = function(url) {
    var urlArr  = url.split("/")
    var ammount = parseAmmount(urlArr[3])
    var id      = parseInt(urlArr[1])
    var account = this.accounts[id]

    if (urlArr[1]==="account" && urlArr[2]==="new" ){
        this.accounts.push( new bankAccount(ammount))
        return `account nr ${this.accounts.length - 1} create with ${ammount} euros`
    }

    if (!account) return "Account not found"

    if (urlArr[2]==="withdraw") {
        account["withdraw"]( parseAmmount(urlArr[3]) )
        return ammount + " euros taken from account nr " + id
    } else if (urlArr[2]==="deposit") {
        account.deposit( parseAmmount(urlArr[3]) )
        return ammount + " euros added to account nr " + id
    } else if (urlArr[2]==="balance") {
        var balance = account["balance"]
        return `The balance of account nr ${id} is ${balance} euros`
    } else if (urlArr[2]==="delete") {
        delete this.accounts[id]
        return `Account nr ${id} deleted`
    }

    return "404 resource not found"
};
