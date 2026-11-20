let course = {
    code: "BSEM2104",
    title: "Web Development",
    lecturer: "Amadu Kamara",
    credits: 3,
    isCore: true
};

// Read the title
console.log(course.title);

// Update the lecturer
course.lecturer = "Samuel Amkam";

// Add a new property
course.room = "Lab 4";

// Display updated object
console.log(course);