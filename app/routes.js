const router   = require('express').Router();
const path     = require("path")
const fs       = require("fs")
const chokidar = require("chokidar")
const uglifyJS = require("uglify-js");
const bodyParser = require("body-parser")
const axios      = require("axios")
const jsonFile   = require("jsonfile") 
const debug      = require('debug')("platform")

// get the app
const {app} = requireConfig("server")

const studentUI = jsonFile.readFileSync(pathTo.nodeRoot("platform.json"))
const allExercisesArray = require("./routes/index")(pathTo.app("course"))



// const bufferedResults =  {
//     file: path.join(__dirname, "bufferedResults.json"),
//     read: function() {
//         return jsonFile.readFileSync(this.file)
//     },
//     write: function(...newReports) {
//         const oldReports = this.read()
//         jsonFile.writeFileSync(this.file, [...oldReports, ...newReports])
//     },
//     clean: function() {
//         jsonFile.writeFileSync(this.file, [])
//     }
// }

// setInterval( () => {
//     const buffered = bufferedResults.read()
//     if (!buffered[0]) return
//     bufferedResults.clean()
//     debug("seding results to student platform")
//     axios.post("http://students.elium.academy/exercises", buffered)
//         .catch( function(){
//             debug("results not sent, saving them back")
//             bufferedResults.write(...buffered)
//         })
//     }, 5000
// )


function basicRep(req, res, view){
    res.locals.allExercises = allExercisesArray
    !req.header('X-PJAX') ?
        res.render(pathTo.view('..','layout'), view ) :
        res.render(view)
}

const jsonParser = bodyParser.json()

// set 
app.get("/",  (req, res) => {
    basicRep(req, res, {view: pathTo.view("course")})
})

app.get("/:week/:day/:exercise", (req, res) => {
    datePath = [req.params.week, req.params.day, req.params.exercise].map(ele => ele.toLowerCase())
    basicRoute     = pathTo.view(...datePath)
    viewParts = {
        view: {
            description: path.join(basicRoute, "description.md"),
            try:         path.join(basicRoute, "playground.ejs"),
            test:        path.join(basicRoute, "test.ejs"),
            solution:    ["/solutions", ...datePath].join("/")
        }
    }
    basicRep(req, res, viewParts )
})

app.post("/report", jsonParser, function (req, res) {
    const report = Object.assign({}, req.body.data, {userId: studentUI})
    bufferedResults.write(report)
    res.json()
})

app.get("/solutions/*", function (req, res) {
    exercisePath = req.originalUrl.split(/[\\\/]/).slice(2)
    currentSolution = pathTo.solutions(...(exercisePath))
    res.send(fs.readFileSync(currentSolution))
})




/*    app.get("/events", function(req, res){
    connection = res
    req.socket.setKeepAlive(true);
    req.socket.setTimeout(Number.MAX_VALUE);
    connection.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/event-stream;charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    'Connection': 'keep-alive'
    });
    debug("Starting connection")

    connection.flushHeaders()

    console.log(req.query)
    if(req.query.firstLoad==="false"){
        setTimeout(() => connection.write("data: window.location.reload()" + "\n\n"), 0 ) 
    }
})
*/



