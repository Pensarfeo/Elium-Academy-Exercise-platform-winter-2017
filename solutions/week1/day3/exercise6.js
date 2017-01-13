var runOnRange = function(fun, obj){
    if (obj.step === 0) return
    obj.step = obj.step || 1
    if (obj.start < obj.end && Math.sign(obj.step) === -1) return
    if (obj.start > obj.end && Math.sign(obj.step) ===  1) return
    if (obj.start === obj.end) return
    for (i = obj.start; i<= obj.end; i+= obj.step) {
        console.log(fun(i))
    }

}
