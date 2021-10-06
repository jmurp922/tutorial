// Same format
//const fs = require('fs');
//fs.read

const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/first.txt','utf-8');

writeFileSync('./content/third.txt',
 'My dogs name is Nova and I love her a lot.',
  {flag: 'a'}
 );
 console.log('done with this task');
 console.log('starting the next one');