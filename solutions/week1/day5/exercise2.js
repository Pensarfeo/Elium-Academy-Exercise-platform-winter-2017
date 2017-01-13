var filterdObj = function (obj, cb){
    newObj = {}
    for( key in obj){
        if (cb(key, obj[key])) newObj[key] = obj[key]
    }
    return newObj
}

var filtercondition = function(key, ele) {
    return schema.includes(key)
}

var model =  function(op, obj) {
    var newObj =filterdObj(obj, filtercondition)
    DB.push(newObj)
}