const {app, server}  = requireConfig('server');
const logger       = require('morgan');
const serverTools  = require("./tools")

//Set up logger
app.use(logger('dev'));

//helpers
require("./helpers")

//Set up stati server
require("./static")


// set routes
appRequire('routes.js');

// set webSockets
appRequire('webSockets.js');


//set view engine server
app.set('view engine', 'ejs')
app.set('view cache', false);

const port = serverTools.normalizePort(process.env.PORT || '3000');
app.set('port', port);

server.listen(port, process.env.IP || "0.0.0.0");
server.on('error',     serverTools.onError(server));
server.on('listening', serverTools.onListening(server));