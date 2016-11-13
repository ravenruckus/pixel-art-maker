
(function() {
  'use strict';
  let gridNumber = 3000;

  const getMain = document.querySelector('main')
  const canvasGroup = document.createElement('div')
  const newDiv = document.createElement('div')
  const colorGroup = document.createElement('div')
  let currentColor = 'white';
  // const colorArray = ['red', 'blue', 'green', 'white', 'pink', 'purple', 'grey', 'yellow', 'black', 'reset']
  // const colorArray = ['#A52A2A','#7FFF00', '#6495ED','#8A2BE2']
  const colorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen","reset"];


  let color = 'white'

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
    attachedClone.setAttribute('class', element)
  }
   const attachedColorGroup = getMain.appendChild(colorGroup);

   colorGroup.setAttribute('id', 'colors')


   const getColors =document.getElementById('colors')
   getColors.addEventListener('click', (event) => {
    if(event.target === getColors) {
      return;
    }
      currentColor = event.target.classList;
      let colorIndex = colorArray.indexOf(currentColor.value)
      // console.log(currentColor.value)
      // console.log(colorIndex)
      // console.log(colorArray[colorIndex])
      color = colorArray[colorIndex]
  })
// search color array and find index then assign proper color to classlist below.
const getCanvas = document.getElementById('canvas')
  getCanvas.addEventListener('click', (event) => {
    if(event.target === getCanvas) {
      return;
    }
    // getMain.classList.add('red');
      // console.log(color)
      event.target.setAttribute("class", color);
      console.log(event.target)
  })
})();



















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
