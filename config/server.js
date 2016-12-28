const express        = require('express');
const http           = require('http');
const logger         = require('morgan');

const md             = require("./lib/md")
const serverTools  = require("./server/tools")
const serverStatic = require("./server/static")



const passRoutesTo = appRequire('routes.js');

let app = express()

app.use(logger('dev'));

serverStatic(app, express)

app.use(function(req, res, next){

    res.locals.imageUrl = function(arg) {
        return "/public/images/" + arg
    }
    res.locals.backgroundImage = function(image){
        return "background-image: url( \'"+res.locals.imageUrl(image)+"\')"
    }

    res.locals.AppRoutes = AppRoutes

    res.locals.md = md

    res.locals.spaceDate = function(word){
        return word.replace(/(\w{1})(\w+)([1-9]+)/, (a, b, c, d) => {
            return b.toUpperCase() + c + " " + d })
    }

    next()
})

//pass routes to server
passRoutesTo(app);



app.set('view engine', 'ejs')



var port = serverTools.normalizePort(process.env.PORT || '3000');
app.set('port', port);
app = http.createServer(app);
console.log(port)
app.listen(port, process.env.IP);

app.on('error', serverTools.onError(app));
app.on('listening', serverTools.onListening(app));

module.exports = app;
