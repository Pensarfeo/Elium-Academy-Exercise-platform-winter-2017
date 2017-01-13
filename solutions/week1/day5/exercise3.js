var filterdObj = function (obj, cb){
    newObj = {}
    for( key in obj){
        if (cb(key, obj[key])) newObj[key] = obj[key]
    }
    return newObj
}

var filtercondition = function(key, val) {
    var schemaKeys = Object.keys(schema)
    return schemaKeys.includes(key) && typeof val === schema[key]
}

var model =  function(op, obj) {
    var newObj =filterdObj(obj, filtercondition)
    DB.push(newObj)
}