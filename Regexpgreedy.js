/*? - This matches at most 1 of the previous match. In other words, it marks the previous the previous match as optional.*/
var match1="cookies".match(/cookies?/)
var match2="cookie".match(/cookies?/)
var match3="cookies".match(/cookiess?/)
var match4="cookies".match(/cookiessss?/)
console.log(match1)
console.log(match2)
console.log(match3)
console.log(match4)

//+ - This matches one or more of the previous match.
var match1 = "cookiessssssssss".match(/cookies+/) // ["cookiessssssssss"]
var match2 = "cookies".match(/cookies+/) 
var match3 = "cookie".match(/cookies+/)
console.log(match1)
console.log(match2)
console.log(match3)

//* - This matches zero or more of the previous match.

var match1 = "cookiessssssssss".match(/cookies*/) // ["cookiessssssssss"]
var match2 = "cookies".match(/cookies*/) // ['cookies']
var match3 = "cookie".match(/cookies*/) // ['cookie']
console.log(match1)
console.log(match2)
console.log(match3)

// match anything that starts with, ends with or has the letter e inside of it

"elie".match(/.*e.*/gi); // ['elie']
"elephants are everywhere".match(/.*e.*/gi); // ['elephants are everywhere']
"can you think of a string containing almost all non-consonants?".match(/.*e.*/g); // null
