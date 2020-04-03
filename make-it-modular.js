var dir = process.argv[2];
var fil = process.argv[3];
var mymodule = require('./mymodule.js')


mymodule (dir,fil, function (err, data) {
    if (err) {
        console.log("There was an error")
    }
    else {
        console.log(data)
        }    

})
