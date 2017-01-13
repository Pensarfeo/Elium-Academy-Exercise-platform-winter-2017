var insideOut = function(obj, start, nselect){
    let newObj = {} 
    Object.keys(obj).map((ele, i)=>{
        if (i >= start && i<= start + nselect - 1){
            newObj[ele] = obj[ele]
        }
    })
    return newObj
}