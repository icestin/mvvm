const entry = require('./webpack.entry.conf');
const json = require('../../package.json'); //引进package.json
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
newEntry.vendor = Object.keys(json.dependencies);
let config = {
    entry: newEntry,
    resolve: {
        extensions:['.js','.json','.jsx','.css','.pcss'],
    }
}
module.exports = config;