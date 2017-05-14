var Sketchpad = require('responsive-sketchpad');

// Initialize sketchpad
var el = $('#sketchpad')[0];
var pad = new Sketchpad(el, {
    line: {
        color: '#000000',
        size: 5
    }
});

$(document).ready(function() {
    pad.resize(window.innerWidth);
});
