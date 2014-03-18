
/**
 * Dependencies
 * @api privae
 */

var states = require('component-states');


var map = {
  '<' : 'open',
  '>' : 'close'
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
  this.states = states('data', {
    'data' : [
      ['open', function(val){
        //console.log('open');
      },'tag open'],
      ['token', function(val){
        console.log('markup:', val);
      }]
    ],
    'tag open': [
      ['token', function(val){
        console.log('token:', val);
      }],
      ['close', function(val) {
        //console.log('close');
      }, 'data']
    ]
  });
  if(str) this.parse(str);
}




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
      this.states.emit(topic);
      if(cache) {
        this.states.emit('token', cache);
        cache = '';
      }
      continue;
    }
    cache += character;
  }
};

// DomParser.use = function() {
  
// };