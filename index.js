(function() {
  'use strict';
  const getCanvas = document.getElementById('canvas')
  const getColors =document.
  getCanvas.addEventListener('click', (event) => {
    if(event.target === getCanvas) {
      return;
    }
    // getMain.classList.add('red');
      event.target.classList.add('red');
  })
})();



// (function() {
//   'use strict';
//   const getMain = document.querySelector('main')
//   getMain.addEventListener('click', (event) => {
//     if(event.target.tagName=== 'div') {
//     alert('clicked')
//   }
//
//   })
// })();
