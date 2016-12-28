const browserify   = require('browserify-middleware');
const compileSass  = require('./scssToCss') //taken from express-compile-sass
const compression  = require('compression') // compress assets

const publicPath = pathTo.publicDir();

module.exports = function(app, express){
    //log html requests

    app.use(compileSass({
        root: publicPath,
        sourceMap: false,
        sourceComments: false,
        watchFiles: true,
        logToConsole: false
    }));

    app.use('/public', express.static(publicPath, {maxAge: 30*24*3600000}));
}



