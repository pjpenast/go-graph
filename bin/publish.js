const co = require('co');
const exec = require('co-exec');
const fs = require('fs-extra')
 
co(function *(){
   fs.removeSync('docs');
   yield exec('cd ..');
   yield exec('polymer build')
   fs.ensureDirSync('docs');
   yield exec('cd ..');
   fs.copySync('build/default', 'docs');
   fs.copySync('docs/bower_components/', 'docs');
   fs.removeSync('docs/bower_components');
});