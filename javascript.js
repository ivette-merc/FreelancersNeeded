//Create array or object with freelancer name, prices and occupation
const freelancers = [
  { name: "Billy Loomis", price: 30, occupation: "Handyman" },
  { name: "Patrick Bateman", price: 70, occupation: "Financial Advisor" },
  { name: "Jack Torrance", price: 40, occupation: "Copy Writer" },
  { name: "Hannibal Lecter", price: 60, occupation: "Therapist " },
  { name: "Freddy Krueger", price: 60, occupation: "Sleep Therapist" },
  { name: "Jason Voorhees", price: 20, occupation: "Camp Counselor" },
  { name: "Michael Myers", price: 15, occupation: "Dog Walker " },
  { name: "Charles Lee Ray ", price: 50, occupation: "Doll Maker" },
  { name: "Tiffany Valentine ", price: 35, occupation: "Fashion Consultant " },
  { name: "Annie Wilkes ", price: 40, occupation: "Home Health Aid" },
  { name: "Carrie White", price: 15, occupation: "High School Tutor" },
];

// set interval to add new freelancer to the list
const addShapeIntervalId = setInterval(addFreelancers, 1000);

render();
