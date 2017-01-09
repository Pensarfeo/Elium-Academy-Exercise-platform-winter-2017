var source = new EventSource('/events')
const geval = eval
source.addEventListener('message', (e) => {
    geval(e.data)
    toReactRender()
    JasmineBoot()
    runTest()
    window.onload()
}, false)

source.addEventListener('open', function(e) {
    console.log("Connection was opened", e)
}, false)

source.addEventListener('error', function(e) {
    if (e.readyState == EventSource.CLOSED) {
        console.log("Connection was closed", e)
    }
}, false)