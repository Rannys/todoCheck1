const fs = require ('fs');
var t = fs.readFileSync(process.argv[2]);
console.log(t.toString().split('\n').length - 1);