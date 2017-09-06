const countLetters = function(str) {
  const lettersObj = {}
  let splitStr = str.split("")
  splitStr = splitStr.sort()
  //Create loop to cycle through splitStr and add letter to lettersObj
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== splitStr[i+1]) {
      const theLetter = splitStr[i]
      lettersObj[theLetter] = 1
    }
  }
  return lettersObj
}
console.log(countLetters("alshgdsklajfkds"))