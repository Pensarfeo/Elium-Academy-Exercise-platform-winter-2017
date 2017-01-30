var capitalize = function(string){
    var first   = string[0].toUpperCase()
    var rest    = string.slice(1)
    var restLow = rest.toLowerCase()
    // myString = "asdf"
    // myRest   = myString.slice(1)
    // myRest => "sdf"
    return first + rest
}