//  **Write three different ways to reverse a string in Javascript? a. using inbuilt method, b. iteratively, c. recursively**
// a) a. Using Inbuilt Method (split(), reverse(), and join()):
// function reverseStringUsingInbuilt(str) {
//     return str.split('').reverse().join('');
//   }
  
//   // Example usage:
//   const originalString = 'Hello, World!';
//   const reversedString = reverseStringUsingInbuilt(originalString);
//   console.log(reversedString);
//    output:!dlroW ,olleH

// function reverseWordsUsingInbuilt(str) {
//     return str.split(' ').reverse().join(' ');
//   }
//   // Example usage:
//   const originalString = 'Hello, World!';
//   const reversedString = reverseWordsUsingInbuilt(originalString);
//   console.log(reversedString);
//   output:World! Hello,

//   *****************************************************************************************************

//   b)iteratively
// function reverseStringIteratively(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   // Example usage:
//   const originalString = 'Hello, World!';
//   const reversedString = reverseStringIteratively(originalString);
//   console.log(reversedString);
  //    output:!dlroW ,olleH

//   function reverseWordsIteratively(str) {
//     const words = str.split(' ');
//     let reversed = '';
//     for (let i = words.length - 1; i >= 0; i--) {
//       reversed += words[i] + ' ';
//     }
//     return reversed.trim();
//   }
  
//   // Example usage:
//   const originalString = 'Hello, World!';
//   const reversedString = reverseWordsIteratively(originalString);
//   console.log(reversedString);
  

//   ************************************************************************************

// c) Recursively:
// function reverseStringRecursively(str) {
//     console.log("agsda",str,str.substr(1))
//     if (str === '') {
//       return str;
//     } else {
//       return reverseStringRecursively(str.substr(1)) + str[0];
//     }
//   }
  
//   // Example usage:
//   const originalString = 'Hello, World!';
//   const reversedString = reverseStringRecursively(originalString);
//   console.log(reversedString);
  //    output:!dlroW ,olleH
//   function reverseWordsRecursively(str) {
//     const words = str.split(' ');
//     if (words.length === 1) {
//       return str;
//     } else {
//       return reverseWordsRecursively(words.slice(1).join(' ')) + ' ' + words[0];
//     }
//   }
  
//   // Example usage:
//   const originalString = 'Hello, World!';
//   const reversedString = reverseWordsRecursively(originalString);
//   console.log(reversedString);
  
