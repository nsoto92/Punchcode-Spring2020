// Array
let words = [
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "you",
  "that",
  "it",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "I",
  "at",
  "be",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "we",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "will",
  "up",
  "other",
  "about",
  "out",
  "many",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "no",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "call",
  "who",
  "oil",
  "its",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part"
]
// Array End.

// Variables
let answer = ""
let maxWrong = 8
let mistakes = 0
let guessed = []

//Creates an array with words with 3 or more letters
var gamewords = words.filter(function(element) {
  return element.length > 2
})
// Var End.

//Function for word being guessed
function randWord() {
  answer = gamewords[Math.floor(Math.random() * gamewords.length)]
}
randWord()
// Function End.

// Variable that breaks down word into an underscore array.
var answerArray = []
for (var i = 0; i < answer.length; i++) {
  answerArray[i] = "_"
}
// Var End.

document.getElementById("result").innerHTML = answerArray.join("")
document.getElementById("maxWrong").innerHTML = maxWrong

// Adding buttons
function buttonValue() {
  var value = document.getElementById("letters").getAttribute("value")
  return value
}
buttonValue()

// Couldn't figure out how to make html buttons work in JS.
