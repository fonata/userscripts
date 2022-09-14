// ==UserScript==
// @name         OpenSupporterFundingDetails
// @namespace    https://blaeul.de
// @version      0.2
// @description  Open funding details
// @author       Christian Bläul
// @match        https://startnext-docker.lndo.site/*
// @match        https://*.startnext.review/*
// @match        https://test.startnext.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=startnext.com
// @downloadURL  https://github.com/Fonata/userscripts/raw/master/OpenSupporterFundingDetails.user.js
// @updateURL    https://github.com/Fonata/userscripts/raw/master/OpenSupporterFundingDetails.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (typeof jQuery === 'undefined') return;

    function clickOnDetails() {
        jQuery('.support-card-open-text:visible').click();
    }
    clickOnDetails();
    setInterval(clickOnDetails, 2000);
})();
