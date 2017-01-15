var bankAccount = {
    balance: 0,
    withdraw: function(tot){
        this.balance -= tot
    },
    deposit: function(tot){
        this.balance += tot
    },
    clear: function(){
        this.balance = 0
    },
    set: function(tot){
        this.balance = tot
    },
}