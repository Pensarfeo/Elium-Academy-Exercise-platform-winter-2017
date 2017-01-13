var toReactRender = ()=>{} 
//asd
var modifyObject = function(ob, map, ov){
    if (ov || ov === undefined) {
        console.log("Overwrite mode set")
        Object.assign(ob, map)
    } else{
        console.log("Overwrite mode disabled")
        for (ele in map){
            if (!ob[ele]) ob[ele]=map[ele]
        }
    }
}