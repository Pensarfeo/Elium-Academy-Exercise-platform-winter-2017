var findInArray = function (arr, ele){
    var i = 0
    for(e of arr){
        if (ele === e) i +=1
    }
    return i
}
var tally = function(arr){
    containerArray = []
    found = []
    arr.map((ele)=>{
        if (!findInArray(found,ele)) {
        containerArray.push([ele,findInArray(arr, ele)])
        found.push(ele)
        }
    })
    return containerArray
}


