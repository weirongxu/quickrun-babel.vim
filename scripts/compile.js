var babel = require('./babel');
var fs = require('fs');

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

if(require.main === module) {
  // cli
  var argv = process.argv.splice(2);
  if (argv.length) {
    var filename = argv[0];

    try {
      process.stdout.write(compile(filename));
    } catch(e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.trace();
        console.dir(e);
      }
    }
  }
}
else {
  // module
  module.exports = compile;
}
