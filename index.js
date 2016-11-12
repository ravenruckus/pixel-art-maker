
(function() {
  'use strict';
  const getCanvas = document.getElementById('canvas')
  const getColors =document.getElementById('colors')
  let currentColor = 'white';
  const colorArray = ['red', 'blue', 'yellow', 'white']
  let color = 'white'
  getColors.addEventListener('click', (event) => {
    if(event.target === getColors) {
      return;
    }
      currentColor = event.target.classList;
      let colorIndex = colorArray.indexOf(currentColor.value)
      // console.log(currentColor.value)
      // console.log(colorIndex)
      console.log(colorArray[colorIndex])
      color = colorArray[colorIndex]
  })
// search color array and find index then assign proper color to classlist below.

  getCanvas.addEventListener('click', (event) => {
    if(event.target === getCanvas) {
      return;
    }
    // getMain.classList.add('red');
    console.log(color)
      event.target.setAttribute("class", color);
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
