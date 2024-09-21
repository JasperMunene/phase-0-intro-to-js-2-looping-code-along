// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    cards.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  }
  return cards;
}


function countDown() {
    let i = 10;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }