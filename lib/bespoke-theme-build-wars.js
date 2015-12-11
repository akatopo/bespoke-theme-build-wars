var fs = require('fs');
var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function() {
  var css = fs.readFileSync(__dirname + '/tmp/theme.css', 'utf8');
  insertCss('@import url("https://fonts.googleapis.com/css?family=Open+Sans:300italic,300,600,700");', {
    prepend: true
  });
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};
