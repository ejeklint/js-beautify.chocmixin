var beautify = require('js-beautify').js_beautify;
var cfg = require('./config.json');

Hooks.addMenuItem("Actions/JavaScript/Beautify", "cmd-ctrl-b", function() {
    Recipe.run(function (r) {
        r.text = beautify(r.text, cfg);
    }); 
});