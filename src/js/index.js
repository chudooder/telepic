var Sketchpad = require('./responsive-sketchpad.js');

var padWidth;
var padHeight;
var curText;
var curTextRow;
var curPad;
var curPadRow;
var curButtonRow;

var curRound;
var numRounds;


$(window).on("load", function() {
    // Initialize game
    numRounds = 5;
    curRound = 0;

    // Initialize sketchpad size variables
    var el = $('#game-area')[0];
    padWidth = $('#game-area').width();
    padHeight = $(window).height() * 0.7;

    // First text area
    appendTextArea();

});

function appendSketchpad() {
    var gameArea = $('#game-area');
    var row = $('<div class="row pad-row"></div>');
    var col1 = $('<div class="two-thirds column"></div>');
    var panel = $('<div class="drawpanel" id="sketchpad"></div>');


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

    panel.appendTo(col1);
    col1.appendTo(row);
    buttons.appendTo(row);

    row.appendTo(gameArea);

    curPadRow = row;
    curButtonRow = buttons;

    registerButtonListeners();
};

function appendTextArea() {
    var gameArea = $('#game-area');
    var row = $('<div class="row text-row"></div>');
    var textArea = $("<div class='two-thirds column textpanel'></div>");
    var text = $("<input type='text' class='form-control input-lg text-center panel-title'>");

    if(curRound == 0) {
        text.prop('placeholder', 'What are we drawing this time?');
    } else {
        text.prop('placeholder', 'Describe the above drawing.');
    }

    curTextRow = row;
    curText = text;

    text.appendTo(textArea);
    textArea.appendTo(row);
    row.appendTo(gameArea);

    registerTextListener();
};

function inputToTitle() {
    return $('<div class="row text-row"><h2>' + curText.val() + '</h2></div>');
};

function nextRound() {
    curRound += 1;
    if(curRound == numRounds) {
        $('.text-row').show();
        $('.pad-row').show();
        return false;
    }
    return true;
}

function registerButtonListeners() {
    $(".btn").on("touchstart", function() {
        $(this).removeClass("mobileHoverFix");
    });

    $(".btn").on("touchend", function() {
        $(this).addClass("mobileHoverFix");
    });

    $("#submit-btn").click(function() {
        curTextRow.hide();
        curPad.disable();
        curButtonRow.remove();

        if(nextRound())
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

function registerTextListener() {
    $(".panel-title").keypress(function(e) {
        if(e.which == 13) {
            var repl = inputToTitle();
            curTextRow.replaceWith(repl);
            curTextRow = repl;

            if(curPadRow != null)
                curPadRow.hide();

            if(nextRound())
                appendSketchpad();
        }
    });
}