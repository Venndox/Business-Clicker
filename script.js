let money = 0;
let eraIndex = 0;

const eras = [
  {
    name: "Starter Era",
    currency: "Coins",
    clickValue: 5,
    conversion: null
  },
  {
    name: "Residential Era",
    currency: "Points",
    clickValue: 5,
    conversion: 100
  },
  {
    name: "Automotive Era",
    currency: "Credits",
    clickValue: 5,
    conversion: 250
  },
  {
    name: "Imperial Era",
    currency: "Tokens",
    clickValue: 5,
    conversion: 500
  },
  {
    name: "Cosmic Era",
    currency: "Dark Matter Coins",
    clickValue: 5,
    conversion: 1000
  },
  {
    name: "Multiversal Era",
    currency: "Dark Energy Coins",
    clickValue: 5,
    conversion: 2500
  },
  {
    name: "Gadget Era",
    currency: "Cold Dark Matter Coins",
    clickValue: 5,
    conversion: 10000
  },
  {
    name: "Max Era",
    currency: "Supercoins",
    clickValue: 1,
    conversion: 100000
  }
];

const moneySpan = document.getElementById("money");
const currencySpan = document.getElementById("currency");
const eraNameSpan = document.getElementById("eraName");
const nextEraBtn = document.getElementById("nextEraBtn");

nextEraBtn.onclick = () => {
  if (eraIndex >= eras.length - 1) {
    alert("You are already in the Max Era! 🏁 ");
    return;
  }

  const nextEra = eras[eraIndex + 1];

  money = Math.floor(money / nextEra.conversion);
  eraIndex++;

  alert(
    `🏆 NEW ERA UNLOCKED!\n\n` +
    `Welcome to the ${eras[eraIndex].name}\n` +
    `New currency: ${eras[eraIndex].currency}\n\n` +
    `1 ${eras[eraIndex].currency} = ${nextEra.conversion} previous currency`
  );

  updateUI();
  save();
};

const perClick = 5;

const items = [
  { name: "Cap", cost: 10 },
  { name: "Beachball", cost: 20 },
  { name: "Football Uniform", cost: 50 },
  { name: "4 Chairs & Table", cost: 80 },
  { name: "Shoes", cost: 100 },
  { name: "Suit/Dress", cost: 250 },
  { name: "Old Phone", cost: 350 },
  { name: "Smartphone", cost: 500 },
  { name: "Tablet", cost: 600 },
  { name: "Laptop", cost: 800 },
  { name: "Computer", cost: 850 },
  { name: "TV", cost: 1000 },
  { name: "Headphones", cost: 1250 },
  { name: "Speaker", cost: 1400 },
  { name: "Console", cost: 1500 },
  { name: "Shed", cost: 2000 },
  { name: "Flat", cost: 2500 },
  { name: "Small House", cost: 5000 },
  { name: "House", cost: 7000 },
  { name: "Smart House", cost: 10000 },
  { name: "House + Garden", cost: 15000 },
  { name: "Smart House + Garden", cost: 35000 },
  { name: "Estape", cost: 50000 },
  { name: "Skyscraper", cost: 100000 },
  { name: "Castle", cost: 500000 },
  { name: "Tower", cost: 850000 },
  { name: "Underground Estape", cost: 1000000 },
  { name: "Car", cost: 2000000 },
  { name: "Supercar", cost: 3000000 },
  { name: "Sport Car", cost: 5000000 },
  { name: "Camper", cost: 8000000 },
  { name: "Rolls-Royce", cost: 10000000 },
  { name: "Formula 1", cost: 15000000 },
  { name: "Exclusive Car", cost: 20000000 },
  { name: "Limousine", cost: 40000000 },
  { name: "Jet Car", cost: 50000000 },
  { name: "The Fastest Car in the World", cost: 75000000 },
  { name: "Train", cost: 100000000 },
  { name: "Supertrain", cost: 125000000 },
  { name: "Cessna", cost: 150000000 },
  { name: "Small Plane", cost: 200000000 },
  { name: "Glider", cost: 300000000 },
  { name: "Plane", cost: 500000000 },
  { name: "Yacht", cost: 700000000 },
  { name: "Superyacht", cost: 800000000 },
  { name: "Exclusive Yacht", cost: 1000000000 },
  { name: "Super Exclusive Yacht", cost: 5000000000 },
  { name: "Ferry", cost: 8500500000 },
  { name: "Fighter", cost: 10000000000 },
  { name: "Puddlejumper", cost: 15000000000 },
  { name: "Helicopter", cost: 30000000000 },
  { name: "Big Plane", cost: 40000000000 },
  { name: "Passenger Plane", cost: 50000000000 },
  { name: "Big Passenger Plane", cost: 100000000000 },
  { name: "Airport", cost: 1000000000000 },
  { name: "Cruise Ship", cost: 25000000000000 },
  { name: "Aircraft Carrier", cost: 50000000000000 },
  { name: "Dreamliner", cost: 100000000000000 },
  { name: "Jet", cost: 150000000000000 },
  { name: "Private Estate", cost: 300000000000000 },
  { name: "Private Town", cost: 400000000000000 },
  { name: "Private City", cost: 500000000000000 },
  { name: "Private Island", cost: 700000000000000 },
  { name: "Private Superisland", cost: 800000000000000 },
  { name: "Private Supercity", cost: 1000000000000000 },
  { name: "Amusement Park", cost: 2000000000000000 },
  { name: "Private District", cost: 3000000000000000 },
  { name: "Private Province", cost: 5000000000000000 },
  { name: "Private Country", cost: 10000000000000000 },
  { name: "Private Empire", cost: 35000000000000000 },
  { name: "Private Continent", cost: 50000000000000000 },
  { name: "Private Sea", cost: 65000000000000000 },
  { name: "Private Ocean", cost: 80000000000000000 },
  { name: "Private Planet", cost: 100000000000000000 },
  { name: "Private Star System", cost: 250000000000000000 },
  { name: "Private Constellation", cost: 400000000000000000 },
  { name: "Private Galactic", cost: 550000000000000000 },
  { name: "Private Galacticfield", cost: 800000000000000000 },
  { name: "Private Universe", cost: 1000000000000000000 },
  { name: "Private Cosmos", cost: 1500000000000000000 },
  { name: "Private World", cost: 5000000000000000000 },
  { name: "Private Multiverse", cost: 10000000000000000000 },
  { name: "Private all the Worlds", cost: 50000000000000000000 },
  { name: "Immorality", cost: 80000000000000000 },
  { name: "Magic Wizard", cost: 85000000000000000000 },
  { name: "Book of the Books", cost: 100000000000000000000 },
  { name: "Thinking Helmet", cost: 500000000000000000000 },
  { name: "Time Machine", cost: 1000000000000000000000 },
  { name: "Atoms", cost: 5000000000000000000000 },
  { name: "Lamp with the Ginnie", cost: 15000000000000000000000 },
  { name: "All Things in the World", cost: 999999999999999999999999999 },
  { name: "The Totally Normal Thing!", cost: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 } 
];

const coinsSpan = document.getElementById("coins");
const shopDiv = document.getElementById("shop");

document.getElementById("clickBtn").onclick = () => {
  money += eras[eraIndex].clickValue;
  updateUI();
  save();
};

 money += eras[eraIndex].clickValue;  // teraz każda era ma swoją wartość kliknięcia
updateUI();
save();

era.items.forEach(item => {
  const btn = document.createElement("button");
  btn.textContent = `${item.name} (${item.cost} ${era.currency})`;

  btn.onclick = () => {
    if (money >= item.cost) {
      money -= item.cost;
      alert(`🛒 Purchased: ${item.name}`);
      updateUI();
      save();
    } else {
      alert("❌ Not enough currency!");
    }
  };

  shopDiv.appendChild(btn);
};

function updateUI() {
  moneySpan.textContent = money;
  currencySpan.textContent = eras[eraIndex].currency;
  eraNameSpan.textContent = eras[eraIndex].name;

  nextEraBtn.style.display =
    eraIndex < eras.length - 1 ? "inline-block" : "none";
}

function renderShop() {
  shopDiv.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "shop-item";

    const btn = document.createElement("button");
    btn.textContent = `Buy ${item.name} – ${item.cost} coins`;
    btn.disabled = coins < item.cost;

    btn.onclick = () => {
      coins -= item.cost;
      alert(`You Bought: ${item.name} 😎`);
      updateUI();
      save();
    };

    div.appendChild(btn);
    shopDiv.appendChild(div);
  });
}

function save() {
  localStorage.setItem(
    "businessClickerSave",
    JSON.stringify({ money, eraIndex })
  );
}

function load() {
  const data = JSON.parse(
    localStorage.getItem("businessClickerSave")
  );

  if (data) {
    money = data.money;
    eraIndex = data.eraIndex;
  }

  updateUI();
}

load();


load();
