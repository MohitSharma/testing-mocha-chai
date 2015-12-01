var mk = require('mortalkombat');
var _  = require('lodash');

exports.getRandomNames = function getRandomNames(num) {
    var randomNames =_.times(num, function() { return mk.get(); });
    return randomNames;
};