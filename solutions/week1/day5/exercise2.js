
function model (operation, obj){
    var obj2 = {}
    if (operation === "add"){
        for (var v of schema){
            if (obj[v]){
                obj2[v] = obj[v] 
            } //else () {...}
        }
    }
    return DB.push(obj2)
}