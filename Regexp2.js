var str="The cat in the hat deserves a pat";
var matches=str.match(/.at/g);
console.log(matches)

var str="shape tape grape";
var matches=str.match(/..a.e/gi)
console.log(matches)

var numbers="123 321 121 111 428 888";
var matches=numbers.match(/.2./g);
console.log(matches)

var str="amen bean cups deer pear ";
var matches=str.match(/[a-d].../g)
console.log(matches)