// Loose VS Strict Equality
let codeA = "100"
let codeB = 100


// Compare the two values using loose equality (==) and strict equality (===)
console.log(codeA == codeB) // true, because loose equality converts the string to a number
console.log(codeA === codeB) // false, because strict equality checks both value and data type
console.log(codeA != codeB) // false, because loose inequality converts the string to a number
console.log(codeA !== codeB) // true, because strict inequality checks both value and data type