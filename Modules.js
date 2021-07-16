const logger = require('./logger'); // can be ./ or ../file/file.js
const http = require('http');       //const instead of var so we cannot over1write the object and break things
const path = require('path');
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//HTTP Module
const server = http.createServer((req, res) => {
  if (req.url === '/')
  {
      res.write('Hello World');
      res.end();
  }
  if (req.url === '/api/courses')
  {
  	res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }

});

server.on('connection', (socket) => {
    logger('new connection');
    logger(`Total Memory: ${totalMemory}`);
    logger(`Free Memory:  ${freeMemory}`);
});
server.listen(3000);
logger('listening on port 3000'); 


//Logs the path object's properties to console
var pathObj = path.parse(__filename);
logger(pathObj);
/*{
    root: 'C:\\',
    dir: 'C:\\Users\\Meep\\Documents\\GitHub\\NodeCourse',
    base: 'path.js',
    ext: '.js',
    name: 'path'
}*/
