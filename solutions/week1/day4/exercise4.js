var stringChop =  function (string, step){
    if (step === undefined) return [string]
    var chopped = []
    for (i=0; i<string.length; i+=step){
        chopped.push(string.slice(i,i + step))
    }
    return chopped
}