
function extractDateParts(pattern, str) {
  const regex = new RegExp(pattern);
  const match = str.match(regex);
  if (match) {
    return {
      day: match,
      month: match,
      year: match
    };
  } else {
    return null;
  }
}

// Test cases
const str = "My birthday is 25-12-1990";

const pattern1 = "(\\d{2})-(\\d{2})-(\\d{4})"; // DD-MM-YYYY
console.log(extractDateParts(pattern1, str));
// Output: { day: '25', month: '12', year: '1990' }

const pattern2 = "(\\d{4})/(\\d{2})/(\\d{2})"; // YYYY/MM/DD
console.log(extractDateParts(pattern2, "1990/12/25"));
// Output: { day: '25', month: '12', year: '1990' }
