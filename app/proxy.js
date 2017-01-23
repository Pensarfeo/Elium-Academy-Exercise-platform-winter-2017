const {app} = requireConfig("server")
var proxy = require('http-proxy-middleware');

var options = {
        target: 'http://localhost:3001',
        pathRewrite: function (path, req) {
            console.log(path)
            var newPath = path.replace('/proxy', '') 
            if (newPath === ""){ newPath = "/"}
            return newPath
        }
    };

// create the proxy (without context)
app.use("/proxy", proxy(options))