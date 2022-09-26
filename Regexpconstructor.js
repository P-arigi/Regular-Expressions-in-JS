function countLetters(word,letter){
    var regex=new RegExp(letter,'gi')
    var matches=word.match(regex)
    if(matches){
        return matches.length

    }
    return 0;
}
console.log(countLetters("awesome","e")); //2