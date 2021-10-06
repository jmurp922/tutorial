const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor.js');
require('./7-mind-grenade')

console.log(names);
sayHi('susan');
sayHi(names.peter);
sayHi(names.john);
