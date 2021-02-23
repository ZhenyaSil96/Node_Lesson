const morning = require('./morning')
const evening = require('./evening')

module.exports = {
    getMorningMessage: function() {console.log(morning)},
    getEvningMessage: function() {console.log(evening)}
}