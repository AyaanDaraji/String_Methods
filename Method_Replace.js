let text = "I love JavaScript";
let newText = text.replace("JavaScript", "Tony Stark");

console.log(newText); // "I love Tony Stark"
console.log(text);    // "I love JavaScript" (original unchanged)

//  Explanation:
//  1. replace(searchValue, newValue) returns a new string with 
//     the first match replaced.
//  2. It does not change the original string.
//  3. By default, it replaces only the first occurrence.