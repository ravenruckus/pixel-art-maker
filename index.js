(function() {
  'use strict';
  let gridNumber = 3000;

  const getMain = document.querySelector('main')
  const canvasGroup = document.createElement('div')
  const newDiv = document.createElement('div')
  const colorGroup = document.createElement('div')
  const reset = document.createElement('div')
  const heading = document.getElementsByTagName('h1')
  console.log(heading)
  let currentColor = 'white';
  const colorArray =['rgb(240, 56, 110)','rgb(20, 101, 102)','rgb(96, 171, 153)','rgb(143, 74, 170)','#fff', '#000', 'rgb(89, 193, 117)','rgb(87, 81, 172)','rgb(201, 20, 133)','rgb(125, 72, 53)','rgb(73, 209, 251)', 'rgb(43, 173, 42)','rgb(241, 230, 174)','#7FFFD4','#8A2BE2','rgb(44, 116, 254)','rgb(252, 255, 87)','rgb(44, 26, 115)','rgb(249, 41, 41)','rgb(24, 90, 167)' ]

  while(gridNumber) {
    const cloneDiv = newDiv.cloneNode();
    const attachedClone = canvasGroup.appendChild(cloneDiv);
    attachedClone.setAttribute('class', 'originalColor')
    gridNumber --;
  }
  getMain.appendChild(canvasGroup)
  canvasGroup.setAttribute('id', 'canvas')
  for(let element of colorArray) {
    const cloneDiv = newDiv.cloneNode();
    const attachedClone = colorGroup.appendChild(cloneDiv);
    attachedClone.setAttribute('style', 'background-color: ' + element +'; border: 1px ' + element + ' solid;')
  }
   reset.setAttribute('style', 'background-color: #fff; border: 1px rgba(240,240,240, .3) ridge; border-radius: 5px')
   colorGroup.appendChild(reset)
   const attachedColorGroup = getMain.appendChild(colorGroup);
   colorGroup.setAttribute('id', 'colors')

   const getColors =document.getElementById('colors')
  //  console.log(getColors)
   getColors.addEventListener('click', (event) => {
    if(event.target === getColors) {
      return;
    }
      // console.log(event.target.attributes.style.value)
      currentColor = event.target.attributes.style.value;
      let colorIndex = colorArray.indexOf(currentColor.value)
      heading[0].setAttribute('style', currentColor + ' border-radius: 10px; border-bottom: 2px #fff solid')


  })
const getCanvas = document.getElementById('canvas')
//maybe change h1 to currentColor

//   getCanvas.addEventListener('mousedown', (event) => {
//
//       getCanvas.addEventListener('mouseover', (event) => {
//         if(event.target === getCanvas) {
//           return;
//         }
//           event.target.setAttribute('style', currentColor);
//       })
// })

  getCanvas.addEventListener('mousedown', (event) => {
    if(event.target === getCanvas) {
      return;
    }
      event.target.setAttribute('style', currentColor + ' border-radius: 0;');
  })
})();


//
//
// let isPainting = false;
//
// canvas.addEventListener('mousedown', () => {
//   isPainting = true;
//
//   if (event.target === canvas) {
//     return;
//   }
//   paintPixel(event.target);
// });
//
// document.addEventListenr('mouseup', () => {
//   isPainting = false;
// });
// const pixel = document.querySelectorAll('.pixel');
//
// for(const pixel of pixels) {
//   pixel.addEventLister('mouseenter', ()=>
//   if (isPainting) {
//     paintPixel(event.target);
//   }
// )
// }
//
// wet variable false
//  mousedown true paint pixel
//  mouseup false
//  select all pixesl
//
//  add even lister mouseenter if is painting is true


//create an element, add a class, append a child













//
// (function() {
//   'use strict';
//   const getCanvas = document.getElementById('canvas')
//   const getColors =document.getElementById('colors')
//   let currentColor = 'white';
//   const colorArray = ['red', 'blue', 'yellow', 'white']
//   let color = 'white'
//   getColors.addEventListener('click', (event) => {
//     if(event.target === getColors) {
//       return;
//     }
//       currentColor = event.target.classList;
//       let colorIndex = colorArray.indexOf(currentColor.value)
//       // console.log(currentColor.value)
//       // console.log(colorIndex)
//       console.log(colorArray[colorIndex])
//       color = colorArray[colorIndex]
//   })
// // search color array and find index then assign proper color to classlist below.
//
//   getCanvas.addEventListener('click', (event) => {
//     if(event.target === getCanvas) {
//       return;
//     }
//     // getMain.classList.add('red');
//     console.log(color)
//       event.target.setAttribute("class", color);
//   })
// })();
