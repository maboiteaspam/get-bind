
var Promise = require('promise');

module.exports = function (port, host) {

  var p =  ((port) && Promise.denodeify(function(then){then(null, port)}) ) || require('get-port');

  return p().then(function (port){
    if (!('' + port).match(/[^:]+:[^:]+/)) port = (host||'0.0.0.0') + ':' + port;
    return port;
  })

}
