const path = require('path')

module.exports = {
    mode:'development',
    entry: './js/index',//em vez index poderia ser main
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    }
}