var str="My name is Akhila, is your name Akhila?";
var matches=str.match(/Akhila/);
console.log(matches)

/*Notice here, that matches is an array of the pattern we are trying to match. But it only returns the first occurance
 of Elie to us! If we would like to match all occurances accross a string, we need to add what is called a flag. We place 
 our flags after the closing / in a regular expression and then specify the type of flag with a single character. 
 The flag we will be using is g, which is the global flag and finds all matches in the entire string.*/


 var str="My name is Akhila, is your name Akhila?";
 var matches=str.match(/Akhila/g); //If we need how many times it occured in the string.
 console.log(matches)
 

 /* Much better! Often times, we may not care if the string is upper or lower cased, but regular expressions do!
  If we would like to make our search case insensitive, we can also add the i flag. To use multiple flags, just put 
  them next to each other in the regular expression (after the closing forward slash). Let's see what that looks like.*/

  var str="My name is Akhila, is your name Akhila?";
  var matches=str.match(/Akhila/ig);
  console.log(matches)
  