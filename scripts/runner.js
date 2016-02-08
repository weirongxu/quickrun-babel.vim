require('./polyfill');
var babel = require('./babel');
var fs = require('fs');
var argv = process.argv.splice(2);

if (argv.length) {
  var entry_filename = argv[0];

  var compile = function(filename){
    var result = babel.transform(fs.readFileSync(filename, 'utf-8'), {
      filename: filename,
      babelrc: false,
      presets: [
        'es2015',
        'stage-0',
      ],
      ast: false,
    });
    return result.code;
  };

  require.extensions['.js'] = function(module, filename){
    try {
      module._compile(compile(filename), filename);
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
