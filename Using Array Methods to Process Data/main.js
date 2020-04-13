//Question #1
let priceavg =
  items.reduce(function(a, b) {
    return a + b.price
  }, 0) / items.length

console.log(priceavg)
document.querySelector("#answer1").innerHTML =
  " The average price is $ " + priceavg.toFixed(2)

//Alt. way Q1

// items.reduce(a,b) => a + b.price) / items.length

//Question #2
let pricefilter = items.filter(function(a) {
  return a.price > 14.0 && a.price < 18.0
})

let html2 = ""

pricefilter.forEach(function(item) {
  html2 += item.title + "\n"
})
document.querySelector("#answer2").innerHTML = html2

//Alt. Way Q2

//

//Question #3
let gbpfilter = items.filter(function(a) {
  return a.currency_code === "GBP"
})

let descrp = ""

gbpfilter.forEach(function(item) {
  descrp += item.title + " costs " + item.price
})

document.querySelector("#answer3").innerHTML = descrp

//Question #4
let woodfilter = items.filter(function(a) {
  return a.materials.includes("wood")
})

let woody = ""

woodfilter.forEach(function(item) {
  woody += item.title + "\n"
})

document.querySelector("#answer4").innerHTML = woody

//Question #5
var eightHTML = ""
var eightOrMore = items
  .filter(function(item) {
    return item.materials.length >= 8
  })

  .forEach(function(item) {
    eightHTML += `${item.title} has ${item.materials.length} materials: \n`
    eightHTML += item.materials.join("\n")
    eightHTML += "\n\n"
  })
document.querySelector("#answer5").innerHTML = eightHTML

//Question #6
let made = items.filter(function(a) {
  return a.who_made === "i_did"
})

document.querySelector("#answer6").innerHTML =
  made.length + " were made by their sellers"
