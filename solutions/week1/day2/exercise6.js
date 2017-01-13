var sumAll = function(obj){
    var sum = 0
    for(key in obj){
        sum += obj[key]
    }
    return sum
}