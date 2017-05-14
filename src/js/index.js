var Sketchpad = require('responsive-sketchpad');

var padWidth;
var padHeight;
var curPad;


$(window).on("load", function() {
    // Initialize sketchpad
    var el = $('#game-area')[0];
    padWidth = $('#game-area').width();
    padHeight = $(window).height() * 0.7;
    console.log(padWidth + " " + padHeight);
    appendTextArea();
    appendSketchpad();
});

function appendSketchpad() {
    var gameArea = $('#game-area');
    var row = $('<div class="row"></div>');
    var col1 = $('<div class="two-thirds column"></div>');
    var panel = $('<div class="drawpanel" id="sketchpad"></div>');

    panel.appendTo(col1);

    var buttons = $('<div class="one-third column">\
          <div class="row">\
            <div class="col-sm-1">\
              <div class="btn btn-lg color-btn" id="c-black-btn">Blk</div>\
            </div>\
            <div class="col-sm-1">\
              <div class="btn btn-lg color-btn" id="c-red-btn">Red</div>\
            </div>\
            <div class="col-sm-1">\
              <div class="btn btn-lg color-btn" id="c-green-btn">Grn</div>\
            </div>\
            <div class="col-sm-1">\
              <div class="btn btn-lg color-btn" id="c-blue-btn">Blu</div>\
            </div>\
            <div class="col-sm-4">\
              <div class="btn btn-lg btn-block btn-danger action-btn" id="clear-btn">Clear</div>\
            </div>\
            <div class="col-sm-4">\
              <div class="btn btn-lg btn-block btn-success action-btn" id="submit-btn">Submit</div>\
            </div>\
          </div>\
        </div>');

    curPad = new Sketchpad(panel[0], {
        line: {
            color: '#000000',
            size: 5
        },
        width: padWidth,
        height: padHeight
    });

    col1.appendTo(row);
    buttons.appendTo(row);

    row.appendTo(gameArea);

    registerButtonListeners();
};

function appendTextArea() {
    var gameArea = $('#game-area');
    gameArea.append("<div class='row'>\
        <div class='two-thids column textpanel'>\
        <input type='text' class='form-control input-lg text-center'>\
        </div></div>");
};

// Fixes buttons getting stuck down on mobile
function registerButtonListeners() {
    $(".btn").on("touchstart", function() {
        $(this).removeClass("mobileHoverFix");
    });

    $(".btn").on("touchend", function() {
        $(this).addClass("mobileHoverFix");
    });

    $("#submit-btn").click(function() {
        appendTextArea();
    });

    $('#clear-btn').click(function() {
        curPad.clear();
    });

    $('#c-black-btn').click(function() {
        curPad.setLineColor('#000000');
    });

    $('#c-red-btn').click(function() {
        curPad.setLineColor('#FF0000');
    });

    $('#c-green-btn').click(function() {
        curPad.setLineColor('#00FF00');
    });

    $('#c-blue-btn').click(function() {
        curPad.setLineColor('#0000FF');
    });
}