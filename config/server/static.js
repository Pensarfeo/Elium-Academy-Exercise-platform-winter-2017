const {app}        = requireConfig('./server');

const express      = require("express")
const assets       = require('express-asset-versions')
const browserify   = require('browserify-middleware');
const compileSass  = require('./scssToCss') //taken from express-compile-sass
const compression  = require('compression') // compress assets

const publicPath = pathTo.publicDir();

app.use(compileSass({
    root: publicPath,
    sourceMap: false,
    sourceComments: false,
    watchFiles: true,
    logToConsole: false
}));

app.use('/public', express.static(publicPath, {maxAge: 30*24*3600000}));
app.use(assets('/public', publicPath));



