let studentProfile = { name: "Foday", age: 34 };

let records = [
    "DICT Department",
    2026,
    true,
    null,
    { name: "Samuel", age: 67 },
    studentProfile,
    ["Cassava", "Plantain", "Mango"]
];

// Log Samuel's name
console.log(records[4].name);

// Log studentProfile's age
console.log(records[5].age);

// Log Plantain
console.log(records[6][1]);