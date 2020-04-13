const clock = document.querySelector("clock")
const interval = 100
const increase = 10

var red = 0
var green = 0
var blue = 0

function update() {
  blue += increase
  if (blue < 255) {
  } else {
    green += increase
    blue = 0

    if (green > 255) {
      red += increase
      green = 0
      blue = 0
    }
  }
  const hex = `#${red.toString(16)}${red.toString(16)}${red.toString(16)}`
}

setInterval(update, interval)
