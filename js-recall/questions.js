var selectElementsStartingWithA = function(array) {
    function startingWithA(element) {
        return element.charAt(0) === "a";
    }
    return array.filter(startingWithA);
}

var selectElementsStartingWithVowel = function(array) {

    var vowel = ["a", "e", "i", "o", "u", "y"];
    function startingWithVowel(element) {
        var firstChar = element.charAt(0);
    return vowel.indexOf(firstChar) !== -1;
    }
    return array.filter(startingWithVowel);
}

var removeNullElements = function(array) {
    function selectElements(element) {
        return element !== null;
    }
    return array.filter(selectElements);
}

var removeNullAndFalseElements = function(array) {
    function removeNullFalse (element) {
        return element !== null && element !== false;
    }
    return array.filter(removeNullFalse);
}

var reverseWordsInArray = function(array) {
    function reverseWords(element) {
        return element = element.split('').reverse().join('');
    }
    return array.map(reverseWords);
}

var everyPossiblePair = function(array) {
    /*function everyPossible (element) {
        return element
    }
    return array(everyPossible);*/
}

var allElementsExceptFirstThree = function(array) {
        result = array.slice(3);
        return result;  
}

var addElementToBeginning = function(array, element) {
    ajout = array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
function isPalindrome(word){
  for (var i = 0; i < array.length; i++) {
    if (word.length > 2) {
      return true;
      var first = word.shift();
      var last = word.pop();
      if(first !== last) {
        return array.reduce(isPalindrome);
      }
    }
  }
}
}

var getFirstHalf = function(string) {
 return string.slice(0,3);
}

var makeNegative = function(number) {
 return Math.abs(number) * -1;
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
