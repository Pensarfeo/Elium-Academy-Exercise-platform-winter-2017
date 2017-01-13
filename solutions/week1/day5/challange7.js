var filterdObj = function (obj, cb, old){
    var newObj = {}
    var condition
    for( key in schema){
        condition = schema[key].condition
        if (condition(obj, DB, old) || cb(key, obj[key])) {
            newObj[key] = obj[key]
        } else if(schema[key]["default"]) {
            newObj[key] = schema[key]["default"]
        }

    }
    return newObj
}

var filtercondition = function(key, val) {
    return typeof val === schema[key].type
}

var model =  function(op, obj) {
    var newObj =filterdObj(obj, filtercondition)
    DB.push(newObj)
}
