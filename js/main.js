(function(win, doc, $) {

    "use strict";

    var TXT = [
            "さすが！",
            "知らなかった！",
            "すごい！",
            "センスいいですね！",
            "そうなんですか！"
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

    function setup(obj) {
        obj.lang  = "ja-JP";
        obj.rate  = 1.2;
        obj.pitch = 1.5;
    }
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
