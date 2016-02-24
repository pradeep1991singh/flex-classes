'use strict';

// common variables
let alignments = ['flex-start', 'flex-end', 'center', 
                   'baseline', 'stretch'];

// flex container
// =====================================

let directions = ['row', 'row-reverse', 'column', 'column-reverse'],
	wraps = ['nowrap', 'wrap', 'wrap-reverse'],
	justifyContent = ['flex-start', 'flex-end', 'center',
										'space-between', 'space-around'],
  alignContents = ['flex-start', 'flex-end', 'center', 
								'space-between', 'space-around', 'stretch'];                    

// build ui-pane for flex-direction
let directionsElement = document.getElementById('directions'),
  directionsCtr = 0;
  
for (let direction of directions) {
  let html = (directionsCtr === 0) 
    ?`<h2>flex-direction:</h2>
    <h3>// Default is row <br />
      flex__container direction__${direction}
    </h3>`
    :`<h3>flex__container direction__${direction}</h3>`;
    
    html += `<div class="flex__container direction__${direction}">
      <div class="flex__item">
        flex item 1
      </div>
      <div class="flex__item">
        flex item 2
      </div>
      <div class="flex__item">
        flex item 3
      </div>
    </div>
    <br />`;

  directionsElement.innerHTML = directionsElement.innerHTML + html;
  directionsCtr++;
}

// ui-pane for flex-wrap
let wrapsElement = document.getElementById('wraps'),
  wrapsCtr = 0;
  
for (let wrap of wraps) {
  let html = (wrapsCtr === 0) 
    ?`<h2>flex-wrap:</h2>
      <h3>// Default is nowrap <br />
        flex__container wrap__${wrap}
      </h3>`
    :`<h3>flex__container wrap__${wrap}</h3>`;
    
    html += `<div class="flex__container wrap__${wrap}">
      <div class="flex__item">
        flex item 1 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 2 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 3 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 4 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 5 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 6 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 7 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 8 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 9 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 10 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 11 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 12 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 13 wrap nowrap
      </div>
      <div class="flex__item">
        flex item 14 wrap nowrap
      </div>
    </div>
    <br />`;

  wrapsElement.innerHTML = wrapsElement.innerHTML + html;
  wrapsCtr++;
}

// build ui-pane for flex-flow
let flowElement = document.getElementById('flows'),
  flowCtr = 0;
  
for (let direction of directions) {
  for (let wrap of wraps) {
    let html = (flowCtr === 0) 
      ?`<h2>flex-flow:</h2>
      <h3>// Default is row && nowrap	<br />
        flex__container flow__${direction}__${wrap}
      </h3>`
      :`<h3>flex__container flow__${direction}__${wrap}</h3>`;
      
      html += `<div class="flex__container flow__${direction}__${wrap}">
        <div class="flex__item">
          flex item 1 wrap wrap
        </div>
        <div class="flex__item">
          flex item 2 wrap wrap
        </div>
        <div class="flex__item">
          flex item 3 wrap wrap
        </div>
        <div class="flex__item">
          flex item 4 wrap wrap
        </div>
        <div class="flex__item">
          flex item 5 wrap wrap
        </div>
        <div class="flex__item">
          flex item 6 wrap wrap
        </div>
        <div class="flex__item">
          flex item 7 wrap wrap
        </div>
        <div class="flex__item">
          flex item 8 wrap wrap
        </div>
        <div class="flex__item">
          flex item 9 wrap wrap
        </div>
        <div class="flex__item">
          flex item 10 wrap wrap
        </div>
        <div class="flex__item">
          flex item 11 wrap wrap
        </div>
        <div class="flex__item">
          flex item 12 wrap wrap
        </div>
        <div class="flex__item">
          flex item 13 wrap wrap
        </div>
        <div class="flex__item">
          flex item 14 wrap wrap
        </div>
      </div>
      <br />`;
  
    flowElement.innerHTML = flowElement.innerHTML + html;
    flowCtr++;
  }
}

// build ui-pane for justify-content
let justifyElement = document.getElementById('justify'),
  justifyCtr = 0;
  
for (let justify of justifyContent) {
  let html = (justifyCtr === 0) 
    ?`<h2>justify-content:</h2>
    <h3>// Default flex-start<br />
      flex__container justify__${justify}
    </h3>`
    :`<h3>flex__container justify__${justify}</h3>`;
    
    html += `<div class="flex__container justify__${justify}">
      <div class="flex__item">
        flex item 1
      </div>
      <div class="flex__item">
        flex item 2
      </div>
      <div class="flex__item">
        flex item 3
      </div>
    </div>
    <br />`;

  justifyElement.innerHTML = justifyElement.innerHTML + html;
  justifyCtr++;
}

// build ui-pane for align-items
let alignElement = document.getElementById('aligns'),
  alignCtr = 0;
  
for (let align of alignments) {
  let html = (alignCtr === 0) 
    ?`<h2>align-items:</h2>
    <h3>// Default stretch<br />
      flex__container align__${align}
    </h3>`
    :`<h3>flex__container align__${align}</h3>`;
    
    html += `<div class="flex__container align__${align}">
      <div class="flex__item">
        flex item 1
      </div>
      <div class="flex__item">
        flex item 2
      </div>
      <div class="flex__item">
        flex item 3
      </div>
    </div>
    <br />`;

  alignElement.innerHTML = alignElement.innerHTML + html;
  alignCtr++;
}

// build ui-pane for align-content
let alignContentElement = document.getElementById('align-content'),
  alignContentCtr = 0;
  
for (let alignContent of alignContents) {
  let html = (alignContentCtr === 0) 
    ?`<h2>align-content:</h2>
    <h3>// Default stretch<br />
      flex__container align-content__${alignContent}
    </h3>`
    :`<h3>flex__container align-content__${alignContent}</h3>`;
    
    html += `<div class="flex__container align-content__${alignContent}">
        <div class="flex__item">
          flex item 1
        </div>
        <div class="flex__item">
          flex item 2
        </div>
        <div class="flex__item">
          flex item 3
        </div>
        <div class="flex__item">
          flex item 4
        </div>
        <div class="flex__item">
          flex item 5
        </div>
        <div class="flex__item">
          flex item 6
        </div>
        <div class="flex__item">
          flex item 7
        </div>
        <div class="flex__item">
          flex item 8
        </div>
        <div class="flex__item">
          flex item 9
        </div>
        <div class="flex__item">
          flex item 10
        </div>
        <div class="flex__item">
          flex item 11
        </div>
        <div class="flex__item">
          flex item 12
        </div>
        <div class="flex__item">
          flex item 13
        </div>
        <div class="flex__item">
          flex item 14
        </div>
    </div>
    <br />`;

  alignContentElement.innerHTML = alignContentElement.innerHTML + html;
  alignContentCtr++;
}

// flex item
// ================================================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  basisPrcentage = ["10%", "20%", "30%", "40%", "50%", 
                  "60%", "70%", "80%", "90%"];

// build ui-pane for flex-basis
let basisElement = document.getElementById('basis'),
  basisCtr = 0;
  
for (let basis of basisPrcentage) {
  let html = (basisCtr === 0) 
    ?`<h2>flex-basis:</h2>
    <h3>// Default auto<br />
      // This defines the default size of an element before 
      the remaining space is distributed. It can be a length 
      (e.g. 20%, 5rem, etc.) or a keyword <br />
      flex__item basis__${basis}
    </h3>`
    :`<h3>flex__item basis__${basis}</h3>`;
    
    html += `<div class="flex__container">
      <div class="flex__item basis__${basis}">
        flex item 1 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 2 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 3 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 4 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 5 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 6 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 7 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 8 basis__${basis}
      </div>
      <div class="flex__item basis__${basis}">
        flex item 9 basis__${basis}
      </div> 
      <div class="flex__item basis__${basis}">
        flex item 10 basis__${basis}
      </div>                  
    </div>
    <br />`;

  basisElement.innerHTML = basisElement.innerHTML + html;
  basisCtr++;
}

// build ui-pane for align-items
let alignSelfElement = document.getElementById('align-self'),
  alignSelfCtr = 0;
  
for (let align of alignments) {
  let html = (alignSelfCtr === 0) 
    ?`<h2>align-items:</h2>
    <h3>// Default stretch<br />
      flex__item align__${align}
    </h3>`
    :`<h3>flex__item align__${align}</h3>`;
    
    html += `<div class="flex__container">
      <div class="flex__item align__${align}">
        flex item 1
      </div>
      <div class="flex__item align__${align}">
        flex item 2
      </div>
      <div class="flex__item align__${align}">
        flex item 3
      </div>
    </div>
    <br />`;

  alignSelfElement.innerHTML = alignSelfElement.innerHTML + html;
  alignSelfCtr++;
}