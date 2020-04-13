$(document).ready(function() {
  function displayTime() {
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var mer = "AM"

    var digitalclock = document.getElementById("clock")

    if (s < 10) {
      s = "0" + s
    }
    if (m < 10) {
      m = "0" + m
    }
    if (h > 12) {
      h = h - "12"
      mer = "PM"
    }
    if (h === 0) {
      h = "12"
    }
    digitalclock.textContent = h + ":" + m + ":" + s + " " + mer
  }
  displayTime()
  setInterval(displayTime, 1000)
})
