var str="awesome"
var a=str.replace('e','z');
console.log(a)  // "awzsome" - it does not get the last e!

var str = "awesome"
str.replace(/e/g,'z') // "awzsomz" - much better!

// using a callback
var str = "awesome"
str.replace(/[aeiou]/g, function(match) {
    return match.toUpperCase();
}); // "AwEsOmE";

//SEARCH

var str = "awesome"
str.search('awe') // 0
str.search('z') // -1

// using a regular expression
var str = "awesome"
str.search(/..e/) // 0
str.search(/p/) // -1

//SPLIT

var str = "My name is elie"
var a=str.split(/e/g);
console.log(a)
