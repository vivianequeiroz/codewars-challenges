// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// First try: 5/1/21
// Passed: 0  Failed: 3

// My solution: 

function duplicateEncode(word){
    var word = [ ]; 
    
    for (let i = 0; i < word.length; i++) {
      if(word.length[i].indexOf(word) !== -1){
        let result1 = word.replace(word, '(');
      } else {
        let result2 = word.replace(word, ')');
      }
        let finalResult = result1 + result2;
      
    }  
      return finalResult;
}

// Great solution source: https://gist.github.com/asfranklin/ace8673c655dc84962f69dc95a3fe28c


function duplicateEncode(str){
    //create a var to hold string value that IGNORES case
    var word = str.toLowerCase();
    //create a var to hold the finished string to return after it's looped through 
    var unique = '';
    //loop through all letters in string
      for (var i = 0; i < word.length; i++) {
    //check for any characters that repeat
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) { //comparing always with the last position make it possible to easily verify repetions!!!!
    //for each character that never dupes, place (
          unique += '(';
        } else
    //for each character that IS a dupe, place )
        unique += ')';
      }
    //return the full string value where '(' are non duped and all')' are duped
      return unique;
    
    }
    //test by printing this in the console
    console.log(duplicateEncode('BaRaban'));