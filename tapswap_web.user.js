// ==UserScript==
// @name         TapSwap open on the web
// @namespace    https://github.com/NabiKAZ/TapSwap-Scripts
// @version      0.1
// @description  TapSwap open on the web
// @author       https://twitter.com/NabiKAZ
// @match        https://app.tapswap.club/*
// @match        https://web.telegram.org/k/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    //Bypassing the mobile version of Tapswap
    window.ontouchstart = true;

    //Getting the Telegram mini app iframe URL
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    node.querySelectorAll('iframe').forEach(el => {
                        el.src = el.src.replace(/(tgWebAppPlatform=)[^&]+/, "$1android");
                        console.log('-='.repeat(50));
                        console.log("Use this address in your browser:", el.src);
                        console.log('-='.repeat(50));
                    });
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
