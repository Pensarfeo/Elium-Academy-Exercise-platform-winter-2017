
// Set Env variables asdfasdf

process.env.NODE_ENV = (process.env.NODE_ENV || "").trim()
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development'){
    process.env.solutionFolder = "solutionsDev" 
} else {
    process.env.solutionFolder = "solutions"
}

console.log("--- global")
require("./global")

console.log("--- server")

const server = require("./server/config")
//module.exports ={server: server}