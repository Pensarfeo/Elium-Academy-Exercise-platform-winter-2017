/*    const sseUrl = function () {
        const paramExerciseId = Object.keys(mule.exerciseId).map((ele) => ele+"="+ mule.exerciseId[ele] ).join("&")
        return "/events" + "?" + paramExerciseId + "&" + `firstLoad=${mule.firstLoad}`
    }
    const source = new EventSource( sseUrl() )

*/
//

/*    socket.addEventListener('message', (e) => {
        debugger
        geval(e.data)


    }, false)
*/

//start server send events

const initializeWS = function (geval){

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
        console.debug("new message")
        const parsedCode = Babel.transform(e.data, { presets: ['es2015', 'react'] }).code
        console.debug(parsedCode)
        geval(parsedCode.replace("use strict", ""))
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
    console.group('debugging');
    consoleLog(...args)
    console.groupEnd();
}