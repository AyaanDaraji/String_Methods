let text = "   Hello world!   ";
let trimmed = text.trim();

console.log(trimmed); // "Hello, world!"
console.log(text);    // "   Hello, world!   " => original string unchanged

//  Explanation:
//  1. trim() removes whitespace from both the start and end of a string.
//  2. Spaces inside the string are not affected.
//  3. orignal string will not be affected.
