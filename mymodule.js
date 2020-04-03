var fs = require('fs')
var path = require('path');

module.exports = function(dir, fil, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }
        else {
            list.forEach( function(file) {
                if ( path.extname(file) === '.' + fil ) {
                    return callback(null, file)             
                }
            })
        }
    })
};
