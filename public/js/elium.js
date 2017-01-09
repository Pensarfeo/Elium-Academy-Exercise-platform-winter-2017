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

initializeWS = function (geval){

    const socketUrl = window.location.origin.replace(/^http(s?):\/\//, 'ws$1://') + "/"
    function appInfo (){
        return JSON.stringify(Object.assign({}, mule, {action: "serverStatus"}))
    }

    function onOnpen (e) {
        console.log("Connection was opened", e)
        socket.send(appInfo())
        mule.firstLoad = false
    }

    function onMessage (e) {
        console.log("message Recieved", e.data)
        const messageObject = JSON.parse(e.data)
        if(messageObject.eval){
            geval(messageObject.eval)
            console.log("evaluated:", messageObject.eval)
        }
    }

    function onError (e) {
        //console.log("we connection failed with error", e)
    }

    function onClose (e) {
        console.log("Connection was closed trying again in few ms")
        websocketWaiter()
    }

    function websocketWaiter() {
        setTimeout(function() {
            console.log("WS: trying new connection")
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
