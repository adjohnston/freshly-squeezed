var Grid = (function (window, document, undefined) {
    'use strict';

    var show = function (show, cssClass) {
        
        show = show || false;

        if (show) {
            var addOverlayBaseline = (function () {
                    var htmlStr = '<div class="grid__baseline"></div><div class="grid__overlay"></div>';

                    if (cssClass && typeof cssClass == 'string') {
                        htmlStr = '<div class="grid__baseline"></div><div class="grid__overlay ' + cssClass +'"><div class="grid__overlay__outline"></div></div>';
                    }

                    document.body.insertAdjacentHTML('beforeend', htmlStr);
                } ()),

                addLines = (function () {
                    var xLines = Math.floor(document.body.clientHeight / Number(window.getComputedStyle(document.getElementsByTagName('html')[0]).lineHeight.replace('px', ''))),
                        gridBaseline = document.getElementsByClassName('grid__baseline')[0];

                    for (var i = 0; i <= xLines; i++) {
                        gridBaseline.insertAdjacentHTML('beforeend', '<div class="grid__baseline__line"></div>');
                    }
                } ()),

                addCols = (function () {
                    var gridOverlay = document.getElementsByClassName('grid__overlay')[0];

                    for (var i = 0; i < 8; i++) {
                        gridOverlay.insertAdjacentHTML('beforeend', '<div class="span1of8"></div>');
                    }

                    gridOverlay.insertAdjacentHTML('beforeend', '<div class="grid__overlay__outline"></div>');
                } ());
        }
    };

    return {
        show: show
    }

} (window, window.document));