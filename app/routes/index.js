const fs = require("fs")
const path = require("path")

function sortDate (ele1, ele2){
    var a = parseInt(ele1[0].replace(/[a-z]+/, ""))
    var b = parseInt(ele2[0].replace(/[a-z]+/, ""))
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
}


//const allExercises = glob.sync("app/course/**/*.ejs").map((path) => path.replace("app/course/", "").split("/"))

module.exports = function weeksTree(starting){
    const newList = []
    fs.readdirSync(starting).map(ele => {
        newPath = path.join(starting, ele)
        if (!fs.statSync(newPath).isFile()){
            let newTree = weeksTree(newPath)
            newTree[0] ?
                newList.push( [ele, newTree ] ):
                newList.push( [ele ] )
        }
    })
    return newList.sort( sortDate )
}