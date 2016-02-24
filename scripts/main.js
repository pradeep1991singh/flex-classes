'use strict';
// common variables
var alignments = ['flex-start', 'flex-end', 'center',
    'baseline', 'stretch'];
// flex container
// =====================================
var directions = ['row', 'row-reverse', 'column', 'column-reverse'], wraps = ['nowrap', 'wrap', 'wrap-reverse'], justifyContent = ['flex-start', 'flex-end', 'center',
    'space-between', 'space-around'], alignContents = ['flex-start', 'flex-end', 'center',
    'space-between', 'space-around', 'stretch'];
// build ui-pane for flex-direction
var directionsElement = document.getElementById('directions'), directionsCtr = 0;
for (var _i = 0; _i < directions.length; _i++) {
    var direction = directions[_i];
    var html = (directionsCtr === 0)
        ? "<h2>flex-direction:</h2>\n    <h3>// Default is row <br />\n      flex__container direction__" + direction + "\n    </h3>"
        : "<h3>flex__container direction__" + direction + "</h3>";
    html += "<div class=\"flex__container direction__" + direction + "\">\n      <div class=\"flex__item\">\n        flex item 1\n      </div>\n      <div class=\"flex__item\">\n        flex item 2\n      </div>\n      <div class=\"flex__item\">\n        flex item 3\n      </div>\n    </div>\n    <br />";
    directionsElement.innerHTML = directionsElement.innerHTML + html;
    directionsCtr++;
}
// ui-pane for flex-wrap
var wrapsElement = document.getElementById('wraps'), wrapsCtr = 0;
for (var _a = 0; _a < wraps.length; _a++) {
    var wrap = wraps[_a];
    var html = (wrapsCtr === 0)
        ? "<h2>flex-wrap:</h2>\n      <h3>// Default is nowrap <br />\n        flex__container wrap__" + wrap + "\n      </h3>"
        : "<h3>flex__container wrap__" + wrap + "</h3>";
    html += "<div class=\"flex__container wrap__" + wrap + "\">\n      <div class=\"flex__item\">\n        flex item 1 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 2 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 3 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 4 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 5 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 6 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 7 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 8 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 9 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 10 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 11 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 12 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 13 wrap nowrap\n      </div>\n      <div class=\"flex__item\">\n        flex item 14 wrap nowrap\n      </div>\n    </div>\n    <br />";
    wrapsElement.innerHTML = wrapsElement.innerHTML + html;
    wrapsCtr++;
}
// build ui-pane for flex-flow
var flowElement = document.getElementById('flows'), flowCtr = 0;
for (var _b = 0; _b < directions.length; _b++) {
    var direction = directions[_b];
    for (var _c = 0; _c < wraps.length; _c++) {
        var wrap = wraps[_c];
        var html = (flowCtr === 0)
            ? "<h2>flex-flow:</h2>\n      <h3>// Default is row && nowrap\t<br />\n        flex__container flow__" + direction + "__" + wrap + "\n      </h3>"
            : "<h3>flex__container flow__" + direction + "__" + wrap + "</h3>";
        html += "<div class=\"flex__container flow__" + direction + "__" + wrap + "\">\n        <div class=\"flex__item\">\n          flex item 1 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 2 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 3 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 4 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 5 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 6 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 7 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 8 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 9 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 10 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 11 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 12 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 13 wrap wrap\n        </div>\n        <div class=\"flex__item\">\n          flex item 14 wrap wrap\n        </div>\n      </div>\n      <br />";
        flowElement.innerHTML = flowElement.innerHTML + html;
        flowCtr++;
    }
}
// build ui-pane for justify-content
var justifyElement = document.getElementById('justify'), justifyCtr = 0;
for (var _d = 0; _d < justifyContent.length; _d++) {
    var justify = justifyContent[_d];
    var html = (justifyCtr === 0)
        ? "<h2>justify-content:</h2>\n    <h3>// Default flex-start<br />\n      flex__container justify__" + justify + "\n    </h3>"
        : "<h3>flex__container justify__" + justify + "</h3>";
    html += "<div class=\"flex__container justify__" + justify + "\">\n      <div class=\"flex__item\">\n        flex item 1\n      </div>\n      <div class=\"flex__item\">\n        flex item 2\n      </div>\n      <div class=\"flex__item\">\n        flex item 3\n      </div>\n    </div>\n    <br />";
    justifyElement.innerHTML = justifyElement.innerHTML + html;
    justifyCtr++;
}
// build ui-pane for align-items
var alignElement = document.getElementById('aligns'), alignCtr = 0;
for (var _e = 0; _e < alignments.length; _e++) {
    var align = alignments[_e];
    var html = (alignCtr === 0)
        ? "<h2>align-items:</h2>\n    <h3>// Default stretch<br />\n      flex__container align__" + align + "\n    </h3>"
        : "<h3>flex__container align__" + align + "</h3>";
    html += "<div class=\"flex__container align__" + align + "\">\n      <div class=\"flex__item\">\n        flex item 1\n      </div>\n      <div class=\"flex__item\">\n        flex item 2\n      </div>\n      <div class=\"flex__item\">\n        flex item 3\n      </div>\n    </div>\n    <br />";
    alignElement.innerHTML = alignElement.innerHTML + html;
    alignCtr++;
}
// build ui-pane for align-content
var alignContentElement = document.getElementById('align-content'), alignContentCtr = 0;
for (var _f = 0; _f < alignContents.length; _f++) {
    var alignContent = alignContents[_f];
    var html = (alignContentCtr === 0)
        ? "<h2>align-content:</h2>\n    <h3>// Default stretch<br />\n      flex__container align-content__" + alignContent + "\n    </h3>"
        : "<h3>flex__container align-content__" + alignContent + "</h3>";
    html += "<div class=\"flex__container align-content__" + alignContent + "\">\n        <div class=\"flex__item\">\n          flex item 1\n        </div>\n        <div class=\"flex__item\">\n          flex item 2\n        </div>\n        <div class=\"flex__item\">\n          flex item 3\n        </div>\n        <div class=\"flex__item\">\n          flex item 4\n        </div>\n        <div class=\"flex__item\">\n          flex item 5\n        </div>\n        <div class=\"flex__item\">\n          flex item 6\n        </div>\n        <div class=\"flex__item\">\n          flex item 7\n        </div>\n        <div class=\"flex__item\">\n          flex item 8\n        </div>\n        <div class=\"flex__item\">\n          flex item 9\n        </div>\n        <div class=\"flex__item\">\n          flex item 10\n        </div>\n        <div class=\"flex__item\">\n          flex item 11\n        </div>\n        <div class=\"flex__item\">\n          flex item 12\n        </div>\n        <div class=\"flex__item\">\n          flex item 13\n        </div>\n        <div class=\"flex__item\">\n          flex item 14\n        </div>\n    </div>\n    <br />";
    alignContentElement.innerHTML = alignContentElement.innerHTML + html;
    alignContentCtr++;
}
// flex item
// ================================================
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], basisPrcentage = ["10%", "20%", "30%", "40%", "50%",
    "60%", "70%", "80%", "90%"];
// build ui-pane for flex-basis
var basisElement = document.getElementById('basis'), basisCtr = 0;
for (var _g = 0; _g < basisPrcentage.length; _g++) {
    var basis = basisPrcentage[_g];
    var html = (basisCtr === 0)
        ? "<h2>flex-basis:</h2>\n    <h3>// Default auto<br />\n      // This defines the default size of an element before \n      the remaining space is distributed. It can be a length \n      (e.g. 20%, 5rem, etc.) or a keyword <br />\n      flex__item basis__" + basis + "\n    </h3>"
        : "<h3>flex__item basis__" + basis + "</h3>";
    html += "<div class=\"flex__container\">\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 1 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 2 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 3 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 4 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 5 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 6 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 7 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 8 basis__" + basis + "\n      </div>\n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 9 basis__" + basis + "\n      </div> \n      <div class=\"flex__item basis__" + basis + "\">\n        flex item 10 basis__" + basis + "\n      </div>                  \n    </div>\n    <br />";
    basisElement.innerHTML = basisElement.innerHTML + html;
    basisCtr++;
}
// build ui-pane for align-items
var alignSelfElement = document.getElementById('align-self'), alignSelfCtr = 0;
for (var _h = 0; _h < alignments.length; _h++) {
    var align = alignments[_h];
    var html = (alignSelfCtr === 0)
        ? "<h2>align-items:</h2>\n    <h3>// Default stretch<br />\n      flex__item align__" + align + "\n    </h3>"
        : "<h3>flex__item align__" + align + "</h3>";
    html += "<div class=\"flex__container\">\n      <div class=\"flex__item align__" + align + "\">\n        flex item 1\n      </div>\n      <div class=\"flex__item align__" + align + "\">\n        flex item 2\n      </div>\n      <div class=\"flex__item align__" + align + "\">\n        flex item 3\n      </div>\n    </div>\n    <br />";
    alignSelfElement.innerHTML = alignSelfElement.innerHTML + html;
    alignSelfCtr++;
}

//# sourceMappingURL=main.js.map
