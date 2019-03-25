const path = require('path')

module.exports = path.dirname(process.mainModule.filename);

// process.mainModule.filename => 
//         This refers to the file responsible for app running

// dirname() => get the path to that dierectory