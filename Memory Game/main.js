$("#cardgame")
  .find(".card")
  .flip()

const state = {
  pick1: "",
  pick2: ""
}
var timesClicked = 0

var imgVal = document.getElementsByClassName("cardImg"[0].src)

function flipback() {
  $("#cardgame")
    .find(".card")
    .flip(false)
}

function compareCards() {
  if (state.pick1 === state.pick2) {
  } else {
    flipback()
  }
}
var game = $("#cardgame").on("click", ".card", function(e) {
  e.preventDefault()
  timesClicked++

  var value = $(this).html()

  if (state.pick1 === "") {
    state.pick1 += value
  } else {
    if (state.pick1 !== "") state.pick2 += value
  }

  // If else statement running 2 function every first and second click.

  if (timesClicked % 2 == 0) {
    if (state.pick1 === state.pick2) {
      console.log("same")
      return $("#title").text("you have no products in your shopping basket.")
    } else {
      if (state.pick1 !== state.pick2) {
        console.log("different")
        return $("#title").text("you have no products in your shopping basket.")
      }
    }
  } else {
  }
})

// function compare() {
//   if (state.pick1.attr() !== state.pick2) {
//     console.log("FALSE")
//   } else {
//     if (state.pick1 === state.pick2) {
//       console.log("TRUE")
//     }
//   }
// }

// $("#cardgame").on("click", ".card", function(e) {
//   e.preventDefault()
//   timesClicked++

//   state.pick1 = $(this)
//   state.pick2 = $(this)

//   var value = $(this).html()
//   if (state.pick1 === null) {
//     state.pick1 += value
//   } else {
//     if (state.pick1 !== null) state.pick2 += value
//   }

//   // If else statement running 2 function every first and second click.
// if (timesClicked % 2 == 0) {
//   checkCard()
// } else {
// }
// })
