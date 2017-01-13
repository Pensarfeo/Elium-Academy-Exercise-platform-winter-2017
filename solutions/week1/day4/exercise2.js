var abbrevName = function(name){
    var namearr = name.split(" ")
    console.log(namearr[1][0])
    return [namearr[0], namearr[1][0].toUpperCase()+"."].join(" ")
}