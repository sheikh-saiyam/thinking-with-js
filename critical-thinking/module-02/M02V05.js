//* Count subtotal

// const cartItems = [
//   { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 4 },
//   { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
//   { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 3 },
// ];

// const subtotal = cartItems.reduce((acc, item) => {
//   console.log({ acc, item });
//   const total = acc + item.price * item.quantity;
//   return total;
// }, 0);

// console.log("Subtotal:", subtotal);

//* Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const topScorer = players.reduce((bestPlayer, player) => {
  console.log({ bestPlayer, player });
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }

  return player;
}, players[0]);

console.log("Top Scorer:", topScorer);
