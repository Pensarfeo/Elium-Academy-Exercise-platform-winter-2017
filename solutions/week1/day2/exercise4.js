//aasd

var insideOut = function(obj) {
    newObj = {}
    for ( key in obj ){
        newObj[obj[key]] = key
    }
    return newObj
}