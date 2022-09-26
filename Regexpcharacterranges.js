//only match when there is more than 1 'l'

var str='helo hello helllo hellllo helllllo';
var matches=str.match(/hel{3,}o/g);
console.log(matches)

// count how many words have two or more o's or two d's in the middle 
var str = "noodle caboodle testing fiddle person diddle muddle booooombox"
var a=str.match(/[od]{2,}/g).length // 6
console.log(a)