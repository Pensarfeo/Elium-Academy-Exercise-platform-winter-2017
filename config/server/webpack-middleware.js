const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config');
const middleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware")

const compiler = webpack(webpackConfig);

var express = require('express').Router()

module.exports.compiler = compiler
router.use(middleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))

router.use(hotMiddleware(compiler))

module.exports.router = router