//node wraps all of this code in a function
//(function ( exports, require, module, __filename, __dirname){});
var url = 'www.google.com';

function log(message)
{
	console.log(message);
}

//This is where we declare the interface 
//module.exports creates a .endPoint object to the module's exports, setting it to the endpoint var
//endPoint is the API public interface, e.g. dvd buttons. url is the internal interface like pcb buttons/traces

module.exports = log; //exports function
module.exports.endPoint = url; //exports an object