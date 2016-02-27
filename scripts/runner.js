require('./polyfill');
var babel = require('./babel');
var fs = require('fs');
var compile = require('./compile');
var argv = process.argv.splice(2);

if (argv.length) {
  var entry_filename = argv[0];

  var compile_file = function(filename){
    return compile(filename);
  };

  require.extensions['.js'] = function(module, filename){
    try {
      module._compile(compile_file(filename), filename);
    } catch(e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.trace();
        console.dir(e);
        // throw e;
      }
    }
  };

  require(entry_filename);
}
