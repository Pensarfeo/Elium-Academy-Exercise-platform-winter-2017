var operations = {
    "add": function(fun, name){
        operations[name] = fun
        return name + " function added"
    }
}
var dynamicCalculator = function(op, v1, v2){
    return operations[op](v1, v2)
}