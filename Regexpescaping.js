// let's try to find the number of periods in a sentence.
var str = "Hello. I'm Elie."
var a=str.match(/./g)
console.log(a)

// let's try to find the number of periods in a sentence.
var str = "Hello. I'm Elie."
var b=str.match(/\./g) // [".", "."] - much better!
console.log(b)