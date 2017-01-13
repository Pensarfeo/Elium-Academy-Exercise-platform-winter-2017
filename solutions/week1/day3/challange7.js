var sort = function (unsorted){
    const toArr = []
    const sorted = {}
    for (ele in unsorted) {
        toArr.push(unsorted[ele])
    }
    toArr.sort()
    for(ele in toArr){
        sorted[ele] = toArr[ele]
    }
    return sorted
}