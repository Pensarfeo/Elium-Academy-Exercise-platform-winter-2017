var sum = function(n1, n2){return n1 + (n2 || 0)}
var subtract = function(n1, n2){return n1 - (n2 || 0)}
var multiply = function(n1, n2){return n1 * (n2 || 1)}
var divide = function(n1, n2){
    if(n2 === 0) {
        return "denominator cannot be 0"
    }
    return n1 / (n2 || 1)
}