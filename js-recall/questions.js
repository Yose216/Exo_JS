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
 var tab =[];
 var tabInverser = array.slice().reverse(); 
 for (var student1 of array) { 
   tabInverser.pop();
   for (var student2 of tabInverser) { 
     tab.push([student1, student2].sort());
   }
 }
 return tab.sort();
};

var allElementsExceptFirstThree = function(array) {
        result = array.slice(3);
        return result;  
}

var addElementToBeginning = function(array, element) {
    ajout = array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
  function derniereLettre(element1, element2) {
        var lettre1 = element1[element1.length-1];
        var lettre2 = element2[element2.length-1];

        if (lettre1 > lettre2) {
            return 1;
        }
        else if (lettre1 < lettre2) {
            return -1;
        }
        return 0;
    }
  return array.sort(derniereLettre);
}

var getFirstHalf = function(string) {
 return string.slice(0,3);
}

var makeNegative = function(number) {
 return Math.abs(number) * -1;
}

var numberOfPalindromes = function(array) {
  var countPalindromes = 0,
      motInverse = array.slice(); 

  function reverseStrings(element) { 
    element = element.split('').reverse().join('');
    return element;
  }
  motInverse = motInverse.map(reverseStrings); 

  for (var i = 0, c = array.length; i < c; i++) { 
    if (array[i] === motInverse[i]) {
      countPalindromes++; 
    }
  }
  return countPalindromes;
}

var shortestWord = function(array) {
  function longueur (a, b) { 
    return a.length - b.length;
}
result = array.sort(longueur); 
  return result[0]; 
}

var longestWord = function(array) {
    function long(a, b) { 
        return b.length - a.length; 
}
result = array.sort(long)
    return result[0];
}

var sumNumbers = function(array) {
    var result = 0;
    for(var i = 0, c = array.length; i < c; i++) {
        result += array[i];
    }
    return result;
}

var repeatElements = function(array) {
  var newTab = array.slice(); 

  for (var i = 0, c = array.length; i < c; i ++) { 
    array.push(newTab[i]);
  }
  return array;
}

var stringToNumber = function(string) {
    result = parseInt(string);
    return result;
}

var calculateAverage = function(array) {
       var result = 0;
    for(var i = 0, c = array.length; i < c; i++) {
        result += array[i];
    }
    return result/array.length;
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
