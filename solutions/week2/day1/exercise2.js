var bankAccount = function(val) {
    this.balance = val || 0
}

bankAccount.prototype.withdraw = function(tot){
    this.balance -= tot
}
bankAccount.prototype.deposit = function(tot){
    this.balance += tot
}
