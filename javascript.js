//Create array or object with freelancer name, prices and occupation
const freelancers = [
  { name: "Billy_Loomis", price: 30, occupation: "Handyman" },
  { name: "Patrick_Bateman", price: 70, occupation: "Financial_Advisor" },
  { name: "Jack_Torrance", price: 40, occupation: "Copy_Writer" },
  { name: "Hannibal_Lecter", price: 60, occupation: "Therapist" },
  { name: "Freddy_Krueger", price: 60, occupation: "Sleep_Therapist" },
  { name: "Jason_Voorhees", price: 20, occupation: "Camp_Counselor" },
  { name: "Michael_Myers", price: 15, occupation: "Dog_Walker" },
  { name: "Charles_Lee_Ray", price: 50, occupation: "Doll_Maker" },
  { name: "Tiffany_Valentine", price: 35, occupation: "Fashion_Consultant" },
  { name: "Annie_Wilkes", price: 40, occupation: "Home_Health_Aid" },
  { name: "Carrie_White", price: 15, occupation: "High_School_Tutor" },
];
const maxFreelancers = 11;




//function to find mean of price
// function calculateMeanPrice(freelancers) {
//   if (freelancers.length === 0) {
//     return 0; // Avoid division by zero
//   }

//   const totalPrices = freelancers.reduce(
//     (sum, freelancers) => sum + freelancers.price,
//     0
//   );
//   const meanPrice = Math.round(totalPrices / freelancers.length);

//   return meanPrice;
// }
// const meanPrice = calculateMeanPrice(freelancers);
// console.log("Mean Price:", meanPrice);
