var Node = require('./lib/node');


/**
 * Dependencies
 * @api privae
 */

var states = require('mood');


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
  this.root = new Node();
  this.states = states('data', {
    'data' : [
      ['open', function(val){

      },'tag open'],
      ['token', function(val){

      }]
    ],
    'tag open': [
      ['token', function(val){

      }],
      ['close', function(val) {

      }, 'data']
    ]
  });
  if(str) this.parse(str);
}




/**
 * Parse text/xml.
 * 
 * @return {String} str
 * @api public
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

