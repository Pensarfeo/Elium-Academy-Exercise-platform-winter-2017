var Calculator = function(op, v1, v2){
    var operations = {
        sum:      function(num1, num2){return num1 + num2},
        multiply:  function(num1, num2){return num1 * num2},
        subtract: function(num1, num2){return num1 - num2},
        divide:   function(num1, num2){return num1 / num2}
    }
    return operations[op](v1, v2)
}