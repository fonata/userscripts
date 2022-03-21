// ==UserScript==
// @name         Versammlung anzeigen
// @namespace    https://blaeul.de/
// @version      0.1
// @description  Die Worte „Versammlung anzeigen“ markieren
// @author       Christian
// @match        https://www.dresden.de/*
// @icon         https://www.google.com/s2/favicons?domain=dresden.de
// @grant        none
// @downloadURL  https://github.com/Fonata/userscripts/raw/master/Dresden-Versammlung-anzeigen.user.js
// @updateURL    https://github.com/Fonata/userscripts/raw/master/Dresden-Versammlung-anzeigen.user.js
// ==/UserScript==

(function() {
    jQuery('a:contains("Versammlung anzeigen")').css('background', 'yellow').after('😎');
    jQuery('a:contains("Veranstaltungswerbung"), a:contains("Sondernutzung")').css('background', 'yellow').after('😊');
    jQuery('h1:contains("Versammlung anzeigen")').css('font-style', 'normal').append('🙂');
})();
