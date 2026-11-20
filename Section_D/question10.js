let hotelRoom = {
    location: "Kissy",
    pricePerNight: 100,
    guestName: "Jeneba",
    nights: 3,

    amenities: ["Wi-Fi", "AC", "Ocean View", "Breakfast"],

    bathroom: {
        count: 2,
        hasJacuzzi: true
    }
};

// Log amenities
console.log(hotelRoom.amenities);

// Log hasJacuzzi
console.log(hotelRoom.bathroom.hasJacuzzi);

// Calculate total bill
let totalBill = hotelRoom.pricePerNight * hotelRoom.nights;

// Booking Summary Card
console.log(`
----- Booking Summary -----
Guest Name: ${hotelRoom.guestName}
Location: ${hotelRoom.location}
Nights: ${hotelRoom.nights}
Total Bill: $${totalBill}
---------------------------
`);