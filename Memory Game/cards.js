results = [
  // Asset Pair Start
  {
    url: "assets/swmp-4.jpg"
  },
  {
    url: "assets/swmp-4.jpg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/swmp-13.jpg"
  },
  {
    url: "assets/swmp-13.jpg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/EorMTbX.jpg"
  },
  {
    url: "assets/EorMTbX.jpg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/stormtrooper-problemsjpg.jpeg"
  },
  {
    url: "assets/stormtrooper-problemsjpg.jpeg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/star-wars-logico5342757jpg.jpeg"
  },
  {
    url: "assets/star-wars-logico5342757jpg.jpeg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/2136047914453549300901ederyjnjpg.jpeg"
  },
  {
    url: "assets/2136047914453549300901ederyjnjpg.jpeg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/39374f12f15460818026667b6658b2e0jpg.jpeg"
  },
  {
    url: "assets/39374f12f15460818026667b6658b2e0jpg.jpeg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/enhanced-buzz-18585-1452099616-17jpg.jpeg"
  },
  {
    url: "assets/enhanced-buzz-18585-1452099616-17jpg.jpeg"
  },
  // Asset End

  // Asset Pair Start
  {
    url: "assets/3d865cd94164ae1736c9ec785d84e007250a82f4_hq.jpg"
  },
  {
    url: "assets/3d865cd94164ae1736c9ec785d84e007250a82f4_hq.jpg"
  }
  // Asset End
]
// Array End.

// Shuffle function.
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

shuffle(results) //Shuffles the image array

// Maps results with two parameters, item and "i", "i" creates unique id for each card to enable flip function.
var items = results
  .map(function(item, i) {
    return `
<div id="cardId" class="card">
  <div class="front">
  <img src="https://img.icons8.com/color/96/000000/star-wars.png">
  </div>
  <div class="back">
      <img class="cardImg" src="${item.url}">
  </div>
</div>
`
  })
  .join("")

document.querySelector("#cardgame").innerHTML = items

// Not finished yet.
