var signOfSum =  function (args){
    sumString = args.reduce((a, b) => a + b, 0).toString()[0]
    console.log(sumString)
    return (sumString === "-") ? "-" : "+"
}