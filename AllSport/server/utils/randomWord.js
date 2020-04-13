// Coded by Norbert M. Soto (https://github.com/nsoto92)

module.exports = function randomWord(length) {
  const vals =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?"
  let random = ""
  for (let i = 0; i < length; i++) {
    random += vals.charAt(Math.floor(Math.random() * vals.length))
  }
  return random
}
