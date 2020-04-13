$(document).ready(function() {
  function displayTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var mer = "AM"

    var digitalclock = document.getElementById("hclock")

    if (s < 10) {
      s = "0" + s
    }
    if (m < 10) {
      m = "0" + m
    }
    if (h > 12) {
      mer = "PM"
    }
    if (h < 10) {
      h = "0" + h
    }
    if (h === 0) {
      h = "12"
    }

    var hexclock = "#" + h + m + s
    document.body.style.backgroundColor = hexclock

    digitalclock.textContent = h + ":" + m + ":" + s + " " + mer
  }
  displayTime()

  setInterval(displayTime, 1000)
})
