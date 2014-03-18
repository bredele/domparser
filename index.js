
/**
 * Dependencies
 * @api privae
 */

var Emitter = require('component-emitter');


var map = {
	'<' : 'tag open',
	'>' : 'tag close'
};


/**
 * Expose 'domparser'
 */

module.exports = DomParser;


/**
 * domparser constructor.
 * @api public
 */

function DomParser(str) {
	if(!(this instanceof DomParser)) return new DomParser(str);

	if(str) this.parse(str);
}


Emitter(DomParser.prototype);


/**
 * [parse description]
 * @return {[type]} [description]
 * @api private
 */
DomParser.prototype.parse = function(str) {
	var cache = '';
	for(var i = 0, l = str.length; i < l; i++) {
		var character = str[i];
		var topic = map[character];
		if(topic) {
			this.emit(topic);
			if(cache) {
				this.emit('token', cache);
				cache = '';
			}
			continue;
		}
		cache += character;
	}
};

// DomParser.use = function() {
	
// };