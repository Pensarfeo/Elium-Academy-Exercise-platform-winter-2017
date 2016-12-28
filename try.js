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

module.exports = function group(starting){
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


const jsonFile   = require("jsonfile") 

const bufferedResults =  {
    file: path.join(__dirname, "bufferedResults.json"),
    read: function() {
        return jsonFile.readFileSync(this.file)
    },
    write: function(...newReports) {
        const oldReports = this.read() || []
        console.log(oldReports)
        jsonFile.writeFileSync(this.file, [...oldReports, ...newReports])
    },
    clean: function() {
        jsonFile.writeFileSync(this.file, [])
    }
}

//bufferedResults.write({a: 1, b: 2})
bufferedResults.clean()