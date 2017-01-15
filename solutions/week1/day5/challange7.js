var filterdObj = function (obj, old){
    var newObj = old || {}
    var condition
    for( key in schema){
        condition = schema[key].condition || function(){return false}
        if (condition(obj, DB, old) || typeof obj[key] === schema[key].type) {
            newObj[key] = obj[key]
        } else if(schema[key]["default"] && !old) {
            newObj[key] = schema[key]["default"]
        }
    }
    return newObj
}

var cleanArray = function(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]!== undefined) newArr.push(arr[i])
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] = newArr[i]
    }
    arr.splice(newArr.length, arr.length - newArr.length + 1 )
};


var model =  function(op, arg1, arg2 ) {
    modelOperations[op](arg1, arg2)
}

var modelOperations = {
    add: function(obj){
        var newObj = filterdObj(obj)
        DB.push(newObj)
    },
    update: {

    },
    delete: function(serachObj){
        var deleteList = []
        DB.map((ele, i) => {
            var keyMatched = 0
            var totKeys = 0
            for (key in serachObj ){
                if (ele[key] === serachObj[key]) keyMatched++
                totKeys ++
            }
            if (totKeys && totKeys==keyMatched) delete DB[i]
        })
        cleanArray(DB)
    },
    update: function(serachObj, updateObj){
        var deleteList = []
        DB.map((ele, i) => {
            var keyMatched = 0
            var totKeys = 0
            for (key in serachObj ){
                if (ele[key] === serachObj[key]) keyMatched++
                totKeys ++
            }
            if (totKeys && totKeys==keyMatched) {
                Object.assign({}, ele, filterdObj(updateObj, ele))
            }
        })
    }
}
