var stringChp = function(s, chopLenght){
    if (chopLenght === undefined){
        var arr = []
        arr[0] = s
        return arr
    } else {

        var splittedArray = s.split('')
        var cA = []

    for (var i = 0; i < s.length; i += chopLenght) {
            var toJoin = splittedArray.slice(i,i + chopLenght)
            var toPush = toJoin.join('')
            cA.push(toPush)
    }
    return cA

}
