
function findMatches(str, pattern) {
  const regex = new RegExp(pattern, 'g');
  return str.match(regex);
}

// Test cases
const str = "Hello123World!@#";

console.log(findMatches(str, '\\d')); // Digits: 
console.log(findMatches(str, '')); // Uppercase: 
console.log(findMatches(str, '')); // Lowercase: 
console.log(findMatches(str, '')); // Special chars: 
