(function(win, doc, $) {

    "use strict";

    var TXT = [
            "さすが！",
            "知らなかった！",
            "すごい！",
            "センスいいですね！",
            "そうなんですか！"
        ];

    var PLAYER_KEY = [
        61, // =
        44, // ,
        55, // 7
        32, // space
        50  // 2
    ];
    
    var sa = new win.SpeechSynthesisUtterance(TXT[0]),
        si = new win.SpeechSynthesisUtterance(TXT[1]),
        su = new win.SpeechSynthesisUtterance(TXT[2]),
        se = new win.SpeechSynthesisUtterance(TXT[3]),
        so = new win.SpeechSynthesisUtterance(TXT[4]);

    setup(sa);
    setup(si);
    setup(su);
    setup(se);
    setup(so);

    doc.body.addEventListener("keypress", function(evt) {
        switch (evt.keyCode) {
        case PLAYER_KEY[0]:
            evt.preventDefault();
            win.speechSynthesis.speak(sa);
            break;
        case PLAYER_KEY[1]:
            evt.preventDefault();
            win.speechSynthesis.speak(si);
            break;
        case PLAYER_KEY[2]:
            evt.preventDefault();
            win.speechSynthesis.speak(su);
            break;
        case PLAYER_KEY[3]:
            evt.preventDefault();
            win.speechSynthesis.speak(se);
            break;
        case PLAYER_KEY[4]:
            evt.preventDefault();
            win.speechSynthesis.speak(so);
            break;
        }
    }, false);
    
    $("#sasisuseso").on("click", function(evt) {
        console.log("クリックされたよ");
        var $target = $(evt.target);
        console.log($target);
        if ($target.hasClass("sa")) {
            win.speechSynthesis.speak(sa);
        }
        if ($target.hasClass("si")) {
            win.speechSynthesis.speak(si);
        }
        if ($target.hasClass("su")) {
            win.speechSynthesis.speak(su);
        }
        if ($target.hasClass("se")) {
            win.speechSynthesis.speak(se);
        }
        if ($target.hasClass("so")) {
            win.speechSynthesis.speak(so);
        }
    });

    $(window).on('keydown', function (e) {
        console.log(e.which);
    });

    function setup(obj) {
        obj.lang  = "ja-JP";
        obj.rate  = 1.2;
        obj.pitch = 1.5;
    }

    $('#dummy').hide().focus();
    
})(this, document, jQuery);

(function(win, doc) {

  "use strict";

  var btns = doc.querySelectorAll(".btn"),
      length = btns.length,
      i = length;

  while(i--) {
    new Button(btns[i]);
  }

  function Button(elm) {
    var PUSH_CLASSNAME = "push";

    _init();

    function _init() {
      elm.addEventListener("mousedown",  _handlePushStart, false);
      elm.addEventListener("touchstart", _handlePushStart, false);
      elm.addEventListener("mouseup",    _handlePushEnd,   false);
      elm.addEventListener("touchend",   _handlePushEnd,   false);
    }

    function _handlePushStart() {
      elm.classList.add(PUSH_CLASSNAME);
    }

    function _handlePushEnd() {
      elm.classList.remove(PUSH_CLASSNAME);
    }
  }

})(this, document);
