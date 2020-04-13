$(document).ready(function() {
  const state = {
    num1 = "",
    oper = "",
    num2 = ""
  }

  $("#calc").on('click', 'button', function(e) {
    e.preventDefault()

    var val = $(this).html()

    if (val === 'x' || val === '/' || val === '+' || val === '-') {
      state.oper = val
    } else if (val === '=') {

    } else if (val === 'C') {

    } else {
      if (state.oper === '') {
        state.num1 += val
      } else {
        state.num2 += val
      }
    }
  })

  function operation() {
    if (state.oper === '+') {
      state.num1 = Number
    }
  }
})
