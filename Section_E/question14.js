// Building an Array of objects
// Create an empty array

let lecturersDb = [];

// Insert lecturer objects
lecturersDb.push(
    {
        id: 1,
        fullName: "Amadu Kamara",
        department: "DICT",
        phoneNumber: "076123456"
    },
    {
        id: 2,
        fullName: "Samuel Amkam",
        department: "Computer Science",
        phoneNumber: "077123456"
    },
    {
        id: 3,
        fullName: "Foday Conteh",
        department: "Networking",
        phoneNumber: "088123456"
    }
);

// Print the entire array
console.log(lecturersDb);

// Access the second lecturer's details
console.log(`Name: ${lecturersDb[1].fullName}`);
console.log(`Phone Number: ${lecturersDb[1].phoneNumber}`);