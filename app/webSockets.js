const chokidar = require("chokidar")
const uglifyJS = require("uglify-js")
const {app, server} = requireConfig("server")

// set websocketServer
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ server: server })
let   fresh = true

const actions = {}


let exerciseIdRaw
let currentSolution

const hotExerciseReloadCommands =`
    toReactRender();
    JasmineBoot();
    runTest();
    window.onload()
`

chokidar.watch(pathTo.nodeRoot("solutions"), {ignoreInitial: true, ignored: /(^|[\/\\])\../}).on('change', (path, event) => {
    if (exerciseIdRaw && wss.clients[0] && exerciseIdRaw === path){
        try{
            code = uglifyJS.minify(path).code + hotExerciseReloadCommands
        } catch(error){
            toConsole(error)
            code = ""
        }
        wss.clients[0].send(JSON.stringify({eval: code}))
    }
});

actions.serverStatus = function serverStatus (ws, data) {
    exerciseIdRaw = pathTo.solutions(...data.exerciseIdRaw) + ".js"
    if (fresh && !data.firstLoad) {
        const data = JSON.stringify({eval: "window.location.reload()"})
        ws.send(data)
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