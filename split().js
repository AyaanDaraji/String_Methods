let text = "apple,banana,orange";
let fruits = text.split(",");

console.log(fruits); // ["apple", "banana", "orange"]

//  Explanation:
//  1. split() breaks a string into an array based on the separator.
//  2. The separator can be a character, string, or even a regular expression.
//  3. The original string is unchanged.