var domparser = require('..');

var parser = domparser();
parser.on('token', function(val){
	console.log(val);
});
parser.parse('<body>olivier<button>hihi</button><input></br></body>');