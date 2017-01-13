var withdraw
var deposit
var balance

var bankAccount = function(){
    var total = 0

    withdraw =  function(val){
        total -= val
    }

    deposit =  function(val){
        total += val
    }

    balance =  function(val){
        return total
    }

}

