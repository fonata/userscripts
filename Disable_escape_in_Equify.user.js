// ==UserScript==
// @name         Disable the escape key in Equify
// @run-at       document-start
// @version      0.1
// @namespace    https://tyclipso.net/
// @author       Christian Bläul
// @match        https://equify.de/Portal/*
// @downloadURL  https://github.com/Fonata/userscripts/raw/master/Disable_escape_in_Equify.user.js
// @updateURL    https://github.com/Fonata/userscripts/raw/master/Disable_escape_in_Equify.user.js
// ==/UserScript==


(function() {
    'use strict';

    function onKey(e) {
        if (e.keyCode == 27) {
            // Escape was released
            e.cancelBubble = true;
            e.stopImmediatePropagation();
        }
        return false;
    }

    var doc = (window.opera ? document.body : document);
    doc.addEventListener('keyup', onKey, !window.opera);
})();
