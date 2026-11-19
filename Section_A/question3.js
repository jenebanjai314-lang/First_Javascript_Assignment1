// Logical Operators
let username = "lecturer_dict"
let pin = "2026"

// When using the And operator(&&)
console.log(username === "lecturer_dict" && pin === "2026") // true, both conditions are true
console.log(username === "lecturer_dict" && pin === "1234") // false, one condition is false


// When using the Or operator(||)
console.log(username === "lecturer_dict" || pin === "2026") // true, one condition is true
console.log(username === "student_dict" || pin === "1234") // false, both conditions are false


// When using the Not operator(!)
console.log(!(username === "lecturer_dict")) // false, because the condition is true, and Not operator negates it
console.log(!(pin === "1234")) // true, because the condition is false, and Not operator negates it