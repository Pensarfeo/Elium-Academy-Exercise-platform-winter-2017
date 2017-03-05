//start server send events

const messageType = function(string){
    const splittedString = string.split("\n")
    return [splittedString[0], splittedString.slice(1).join("\n")]
}


const readMessage = function(e) {
    const [type, message] = messageType(e.data)
    console.debug("new message", "type: " + type, message )
    if (type === "JS" || type === "JSX") {
        const parsedCode = Babel.transform(message, { presets: ['es2015', 'react'] }).code
        readMessage.runEval(parsedCode.replace("use strict", ""))
    } else if (type === "HTML") {
        $(".jasmine-testground").empty()
        $(".jasmine-testground").append(message)
        window.runTheTest()
    }

    //console.debug(parsedCode)
}


const initializeWS = function (gEval){
    readMessage.runEval = readMessage.runEval || gEval
    var socketUrl = window.location.origin.replace(/^http(s?):\/\//, 'ws$1://') + "/"
    let socket
    function appInfo (){
        return JSON.stringify(Object.assign({}, mule, {action: "serverStatus"}))
    }

    function onOnpen (e) {
        console.debug("Connection was opened", e)
        socket.send(appInfo())
        mule.firstLoad = false
    }

    function onMessage (e) {
        readMessage(e)
    }

    function onError (e) {
        console.debug("we connection failed with error", e)
    }

    function onClose (e) {
        console.debug("Connection was closed trying again in few ms")
        websocketWaiter()
    }

    function websocketWaiter() {
        setTimeout(function() {
            console.debug("WS: trying new connection")
            socket = new WebSocket(socketUrl)
            socket.onopen    = onOnpen
            socket.onmessage = onMessage
            socket.onerror   = onError
            socket.onclose   = onClose
        }, 250)
    }

    websocketWaiter()
}

initializeWS(eval)

function randEle(){
    const possibleLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz"
    return {letter: possibleLetters[Math.floor(Math.random()*(possibleLetters.length))],
        number: Math.ceil(Math.random()*100)}
}

function randObj(){
    const obj = {}
    for(i = 0; i<Math.ceil(Math.random()*10); i++){
        let {number, letter} = randEle()
        obj[letter] = number
    }
    return obj
    
}

var toReactRender = function(){}


const consoleLog = console.log

console.debug = function(...args){
    if (mule.env.type === "development"){
        console.group('debugging');
        consoleLog(...args)
        console.groupEnd();
    }
}

const defaultRunTheTest = function () {
    JasmineBoot();
    runTest();
    exercuteTest()
}

window.runTheTest = window.runTheTest || defaultRunTheTest


String.prototype.join = function(){
    return this
}

String.prototype.generalize = function(){
    return this.trim().toLowerCase()
}


Boolean.prototype.join = function(){
    return this + ""
}