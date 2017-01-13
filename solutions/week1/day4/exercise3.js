var capitalize = function(string){
    var toArray = string.split("")
    var frist = toArray.shift()
    debugger
    return [frist.toUpperCase()].concat(toArray).join("")
}