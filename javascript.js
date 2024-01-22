const names = [
  "Pactrick Bateman",
  "Carrie White",
  "Jack Torrance",
  "Hannibal Lecter",
  "Jason Voorhees",
  "Michael Myers",
  "Charles Lee Ray",
  "Tiffany Valentine",
  "Annie Wilkes",
];

const occupations = [
  "Tutor",
  "Food Critic",
  "Home Health Aid",
  "Lanscaping",
  "Plumber",
  "Copy Writer",
  "Stylist",
  "Makeup Artist",
  "Caterer",
];

const prices = [40, 50, 35, 50];

const maxFreelancers = 11;

const listFreelancer = [
  { name: "Billy Loomis", price: 30, occupation: "Handyman" },
  { name: "Freddy Krueger", price: 60, occupation: "Sleep Therapist" },
];

function calculateAveragePrice() {
  const total = listFreelancer.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return listFreelancer.length === 0 ? 0 : total / listFreelancer.length;
}

const addFreelancerIntervalId = setInterval(addFreelancer, 500);

render();



function render() {
  const freelancersId = document.querySelector("#freelancers");

  freelancersId.innerHTML = `<tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Starting Price</th>
     </tr>`;

  listFreelancer.forEach((freelancer) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = freelancer.name;

    const tdOccupation = document.createElement("td");
    tdOccupation.textContent = freelancer.occupation;

    const tdPrice = document.createElement("td");
    tdPrice.classList.add("price");
    tdPrice.textContent = `$${freelancer.price}`;

    tr.appendChild(tdName);
    tr.appendChild(tdOccupation);
    tr.appendChild(tdPrice);

    freelancersId.appendChild(tr);

    const average = document.querySelector("#average");
    average.innerHTML = `The average price is: $${calculateAveragePrice().toFixed()}`;
  });
}

document.getElementById("#freelancers").style.justifyItems = "center";

function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  listFreelancer.push({ name, price, occupation });

  render();

  

  if (listFreelancer.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}

