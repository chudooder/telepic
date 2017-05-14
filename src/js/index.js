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

});

// Fixes buttons getting stuck down on mobile
$(".btn").on("touchstart", function() {
    $(this).removeClass("mobileHoverFix");
});

$(".btn").on("touchend", function() {
    $(this).addClass("mobileHoverFix");
});

$('#clear-btn').click(function() {
    pad.clear();
});

$('#c-black-btn').click(function() {
    pad.setLineColor('#000000');
});

$('#c-red-btn').click(function() {
    pad.setLineColor('#FF0000');
});

$('#c-green-btn').click(function() {
    pad.setLineColor('#00FF00');
});

$('#c-blue-btn').click(function() {
    pad.setLineColor('#0000FF');
});
