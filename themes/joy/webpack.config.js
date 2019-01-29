const path = require('path');

module.exports = {
    mode: 'production',
    entry: './___development/js/theme.js',
    output: {
        filename: 'theme.js',
        path: path.resolve(__dirname, 'js')
    }
};