
function testRegex(pattern, str) {
  const regex = new RegExp(pattern);
  return regex.test(str);
}

// Test cases
console.log(testRegex("ab", "ab")); // true
console.log(testRegex("ab", "abc")); // true
console.log(testRegex("ab", "cd")); // false
console.log(testRegex("^ab", "ab")); // true
console.log(testRegex("^ab", "abc")); // true
console.log(testRegex("^ab", "cd")); // false
console.log(testRegex("ab$", "ab")); // true
console.log(testRegex("ab$", "abc")); // false
console.log(testRegex("ab$", "cd")); // false
console.log(testRegex("a.b", "a.b")); // true
console.log(testRegex("a.b", "a0b")); // true
console.log(testRegex("a.b", "ab")); // false
