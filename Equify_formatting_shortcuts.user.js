// ==UserScript==
// @name         Equify: WYSIWYG-Shortcuts
// @namespace    https://blaeul.de
// @version      0.1
// @description  Allow pressing Ctrl+B for bold font
// @author       Christian Bläul
// @match        https://equify.de/*
// @icon         https://www.google.com/s2/favicons?domain=equify.de
// @downloadURL  https://github.com/Fonata/userscripts/raw/master/Equify_formatting_shortcuts.user.js
// @updateURL    https://github.com/Fonata/userscripts/raw/master/Equify_formatting_shortcuts.user.js
// @grant        none
// ==/UserScript==

(function() {
    function clickButton(e, buttonClass) {
        var textarea = jQuery(document.activeElement);
        textarea.closest('form').find('.' + buttonClass + ' a').click();
        textarea.focus();
        e.preventDefault();
        return false; // Prevent the Browser's default binding.
    }

    function onCtrlB(e) {
        return clickButton(e, 'tyMessageFormatBold');
    }

    function onKeydown(evt) {
        if (evt.ctrlKey && evt.key == 'b') {
            return onCtrlB(evt);
        }
    }

    document.addEventListener('keydown', onKeydown, true);
})();
