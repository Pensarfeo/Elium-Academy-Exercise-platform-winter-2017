const chokidar = require("chokidar")
const uglifyJS = require("uglify-js")
const fs       = require("fs")
const pathMod  = require('path')

const {app, server} = requireConfig("server")

// set websocketServer
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ server: server })
let   fresh = true

const actions = {}


let exerciseIdRaw
let currentSolution

const hotExerciseReloadCommands =`
    console.debug("new Exercise version found, retesting");
    toReactRender();
    JasmineBoot();
    runTest();
    exercuteTest()
`
const send = {
    js: function(path) {

        try{
            code =  "JS\n" + fs.readFileSync(path).toString() + hotExerciseReloadCommands
        } catch(error){
            code = `
            console.debug("Invalid JS in solution - Parsing error at")
            console.debug(\"file: ${error.message}\")
            console.debug(\"file: ${error.filename}\")
            console.debug(\"line: ${error.line}\")
            console.debug(\"col: ${error.col}\")
            `
        }
        wss.clients[0].send(code)
    },
    html: function(path, type){
        try{
            code =  "HTML\n" + fs.readFileSync(path).toString()
        } catch(error){
            code = `
            console.debug("Invalid JS in solution - Parsing error at")
            console.debug(\"file: ${error.message}\")
            console.debug(\"file: ${error.filename}\")
            console.debug(\"line: ${error.line}\")
            console.debug(\"col: ${error.col}\")
            `
        }
        wss.clients[0].send(code)
    }
}

chokidar.watch(pathTo.nodeRoot("solutions"), {ignoreInitial: true, ignored: /(^|[\/\\])\../}).on('change', (path, event) => {
    toConsole(path.includes(exerciseIdRaw))
    if (exerciseIdRaw && wss.clients[0] && path.includes(exerciseIdRaw)){
        const pathDif = path.replace(exerciseIdRaw, "")
        if (pathDif === ".js"){
            send.js(path)
        } else if (pathDif === ".html"){
            send.html(path)
        }
    }
});

chokidar.watch(pathTo.nodeRoot("app", "course"), {ignoreInitial: true, ignored: /(^|[\/\\])\../}).on('change', (path, event) => {
    var playygroundPath = pathMod.join(exerciseIdRaw.replace(".js", "").replace("solutions", pathMod.join("app", "course")), "playground.js")
        //toConsole(exerciseIdRaw , wss.clients[0] , playygroundPath === path, playygroundPath, path )
    if (exerciseIdRaw && wss.clients[0] && playygroundPath === path){
        console.log("rendering new react example")
        code = fs.readFileSync(path).toString()
        wss.clients[0].send(code)
    }
});


actions.serverStatus = function serverStatus (ws, data) {
    exerciseIdRaw = pathTo.solutions(...data.exerciseIdRaw)
    if (fresh && !data.firstLoad) {
        ws.send("window.location.reload()")
    }
    fresh = false
}

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming (message) {
        try{
            data = JSON.parse(message)
            actions[data.action](ws, data)
        } catch (error) {

        }
    });
});

module.exports = wss