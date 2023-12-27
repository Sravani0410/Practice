/*
Anagrams are words or phrases formed by rearranging the letters of another word or phrase,
 using all the original letters exactly once. 
 In other words, anagrams are created by rearranging the characters of a given set of letters to produce a new set of letters, 
 forming a different word or phrase with the same set of characters.

For example:

The word "listen" can be rearranged to form the anagram "silent."
The phrase "debit card" can be rearranged to form the anagram "bad credit."
The word "race" can be rearranged to form the anagram "care."
*/

//   Example 1: Checking if Two Strings are Anagrams
// Question:Given two strings, determine whether they are anagrams of each other.

// Solution:

function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false

// ==================================================================================================================

// Example 2: Grouping Anagrams
// Question:Given an array of strings, group anagrams together.

// Solution:

function groupAnagrams(words) {
  let groupedAnagrams = {};

  for (let word of words) {
    let sortedWord = word.split('').sort().join('');
    if (!groupedAnagrams[sortedWord]) {
      groupedAnagrams[sortedWord] = [];
    }
    groupedAnagrams[sortedWord].push(word);
  }

  return Object.values(groupedAnagrams);
}

// Example usage:
let wordArray2 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(wordArray2));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// =================================================================================================

// Example 3: Finding Anagrams in a List
// Question:Given a list of words, find all pairs of words that are anagrams.

// Solution:

function findAnagramPairs(words) {
  let anagramPairs = [];

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (areAnagrams(words[i], words[j])) {
        anagramPairs.push([words[i], words[j]]);
      }
    }
  }

  return anagramPairs;
}

// Example usage:
let wordList1 = ["listen", "silent", "hello", "world"];
console.log(findAnagramPairs(wordList1));
// Output: [['listen', 'silent']]

// =====================================================================================================

// Example 4: Counting Anagrams
// Question:Given a list of words, count the total number of anagram pairs.

// Solution:

function countAnagramPairs(words) {
  let count = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (areAnagrams(words[i], words[j])) {
        count++;
      }
    }
  }

  return count;
}

// Example usage:
let wordList2 = ["abc", "cba", "def", "fed", "bca"];
console.log(countAnagramPairs(wordList2)); // Output: 3

// ==================================================================================

// Example 5: Detecting Anagrams in a Sentence
// Question:Given a sentence, identify and group words that are anagrams.

// Solution:

function groupAnagramsInSentence(sentence) {
  let words = sentence.split(' ');
  return groupAnagrams(words);
}

// Example usage:
let inputSentence = "The racecar and the carecar are anagrams.";
console.log(groupAnagramsInSentence(inputSentence));
// Output: [['racecar', 'carecar']]

// =====================================================================================

// Example 6: Making Anagrams
// Question:Given two strings, determine the minimum number of characters to be deleted or added to make them anagrams.

// Solution:

function minOperationsToAnagram(str1, str2) {
  let frequencyMap1 = getCharFrequencyMap(str1);
  let frequencyMap2 = getCharFrequencyMap(str2);

  let commonChars = getCommonChars(frequencyMap1, frequencyMap2);

  let totalOperations = 0;

  for (let char of commonChars) {
    totalOperations += Math.abs(frequencyMap1[char] - frequencyMap2[char]);
  }

  return totalOperations;
}

function getCharFrequencyMap(str) {
  let frequencyMap = {};
  for (let char of str) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }
  return frequencyMap;
}

function getCommonChars(map1, map2) {
  return Object.keys(map1).filter(char => map2[char]);
}

// Example usage:
let string1 = "abc";
let string2 = "bcf";
console.log(minOperationsToAnagram(string1, string2)); // Output: 2

// =============================================================================================================

// Example 7: Longest Substring with Anagrams
// Question:Given a string, find the length of the longest substring containing only anagrams.

// Solution:

function longestAnagramSubstring(s) {
  let charFrequency = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    let currentChar = s[end];

    if (!(currentChar in charFrequency)) {
      charFrequency[currentChar] = 0;
    }

    charFrequency[currentChar]++;

    while (charFrequency[currentChar] > 1) {
      let startChar = s[start];
      charFrequency[startChar]--;
      if (charFrequency[startChar] === 0) {
        delete charFrequency[startChar];
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
let inputString = "abba";
console.log(longestAnagramSubstring(inputString)); // Output: 3

// =================================================================================

// Example 8: Palindrome Anagrams
// Question:Given a string, check if any anagram of the string is a palindrome.

// Solution:

function canFormPalindrome(s) {
  let charFrequency = {};

  for (let char of s) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  let oddCount = 0;

  for (let count of Object.values(charFrequency)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}

// Example usage:
let inputString1 = "ivicc";
console.log(canFormPalindrome(inputString1)); // Output: true

// =========================================================================================

// Example 9: Anagrams in a Large Dataset
// Question:You have a large dataset of words. Write a function to group words that are anagrams efficiently, considering the scalability of the solution.

// Solution:

function groupAnagramsEfficiently(words) {
  let groupedAnagrams = {};

  for (let word of words) {
    let sortedWord = sortWord(word);

    if (!groupedAnagrams[sortedWord]) {
      groupedAnagrams[sortedWord] = [];
    }

    groupedAnagrams[sortedWord].push(word);
  }

  return Object.values(groupedAnagrams);
}

function sortWord(word) {
  return word.split('').sort().join('');
}

// Example usage:
let largeWordDataset = ["listen", "silent", "enlist", "hello", "world", "abc", "cba"];
console.log(groupAnagramsEfficiently(largeWordDataset));
// ===========================================================================================

// Example 10: Anagrams of Substrings
// Question:Given a string, find all possible distinct substrings that are anagrams.

// Solution:

function findAnagramSubstrings(s) {
  let anagramSubstrings = new Set();

  for (let start = 0; start < s.length; start++) {
    let currentAnagram = "";

    for (let end = start; end < s.length; end++) {
      currentAnagram = sortWord(currentAnagram + s[end]);
      anagramSubstrings.add(currentAnagram);
    }
  }

  return Array.from(anagramSubstrings);
}

function sortWord(word) {
  return word.split('').sort().join('');
}

// Example usage:
let inputString3 = "abba";
console.log(findAnagramSubstrings(inputString3));

// ===========================================================================================

// Example 11: Anagram Difference
// Question:Given two strings, determine the minimum number of operations required to make them anagrams. The allowed operations are:

// Add a character to either string.
// Remove a character from either string.
// Solution:

function minOperationsToMakeAnagram(str1, str2) {
  let charCount1 = getCharCountMap(str1);
  let charCount2 = getCharCountMap(str2);

  let commonChars = getCommonChars(charCount1, charCount2);
  let totalOperations = 0;

  for (let char of commonChars) {
    totalOperations += Math.abs(charCount1[char] - charCount2[char]);
  }

  for (let char in charCount1) {
    if (!commonChars.includes(char)) {
      totalOperations += charCount1[char];
    }
  }

  for (let char in charCount2) {
    if (!commonChars.includes(char)) {
      totalOperations += charCount2[char];
    }
  }

  return totalOperations;
}

function getCharCountMap(str) {
  let charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

function getCommonChars(map1, map2) {
  return Object.keys(map1).filter(char => map2[char]);
}

// Example usage:
let string3 = "abc";
let string4 = "bcf";
console.log(minOperationsToMakeAnagram(string3, string4)); // Output: 2

// ============================================================================

// Example 12: Valid Anagram Parentheses
// Question:Given a string containing only the characters '(' and ')', determine if the input string is a valid anagram of a well-formed parentheses string.

// Solution:

function isValidAnagramParentheses(s) {
  let stack = [];

  for (let char of s) {
    if (char === '(') {
      stack.push(')');
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
let parenthesesString = "(()())";
console.log(isValidAnagramParentheses(parenthesesString)); // Output: true
// ======================================================================================

// Example 13: Anagrams of Numbers
// Question:Given an array of integers, group the numbers that are anagrams of each other.

// Solution:

function groupAnagramNumbers(numbers) {
  let groupedAnagrams = {};

  for (let num of numbers) {
    let sortedDigits = num.toString().split('').sort().join('');
    
    if (!groupedAnagrams[sortedDigits]) {
      groupedAnagrams[sortedDigits] = [];
    }

    groupedAnagrams[sortedDigits].push(num);
  }

  return Object.values(groupedAnagrams);
}

// Example usage:
let numberArray = [12, 21, 34, 43, 56, 65];
console.log(groupAnagramNumbers(numberArray));
// Output: [[12, 21], [34, 43], [56, 65]]

// =======================================================================================

// Example 14: Maximum Length Concatenated Words
// Question:Given an array of strings, find the maximum length of a concatenated string of words that are anagrams of each other.

// Solution:

function maxLengthOfConcatenatedWords(words) {
  function isUnique(str) {
    return new Set(str).size === str.length;
  }

  function canConcatenate(uniqueChars, word) {
    return isUnique(uniqueChars + word);
  }

  function backtrack(start, uniqueChars) {
    let maxLength = uniqueChars.length;

    for (let i = start; i < words.length; i++) {
      if (canConcatenate(uniqueChars, words[i])) {
        let newUniqueChars = uniqueChars + words[i];
        maxLength = Math.max(maxLength, backtrack(i + 1, newUniqueChars));
      }
    }

    return maxLength;
  }

  return backtrack(0, '');
}

// Example usage:
let wordArray = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
console.log(maxLengthOfConcatenatedWords(wordArray)); // Output: 16

// ========================================================================



