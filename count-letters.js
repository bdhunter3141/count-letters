const countLetters = function(str) {
  const lettersObj = {}
  let splitStr = str.split("")
  let sortStr = splitStr.sort().join("")
  for (let i = 0; i < sortStr.length; i++) {
    if (sortStr[i] !== sortStr[i+1]) {
      const theLetter = sortStr[i]
      const theNumber = str.split(sortStr[i]).length - 1
      lettersObj[theLetter] = theNumber
    }
  }
  return lettersObj
}

console.log(countLetters("alsjfilewajklvhkagldjskflash"))


