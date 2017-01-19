
// Set Env variables asdfasdf

process.env.NODE_ENV = process.env.NODE_ENV.trim()
if (process.env.NODE_ENV === 'development'){
    process.env.solutionFolder = "solutionsDev" 
} else {
    process.env.solutionFolder = "solutions"
}

console.log(process.env.solutionFolder)

require("./global")


const server = require("./server/config")
module.exports ={server: server}