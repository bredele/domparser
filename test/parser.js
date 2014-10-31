var domparser = require('..');

var parser = domparser();
// parser.on('token', function(val){
// 	console.log(val);
// });
parser.parse('<body class="maman">olivier kjk jkj <button>hihi</button><input></br></body>');

//parser.parse('<body<>olivier<button>hihi</button><input></br></body>');


