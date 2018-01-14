/* Removed previous variables
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree); */

// card values
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function() {
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay [1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
var flipCard = function(cardId) {
  console.log("Up and running!");

  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  checkForMatch();
}

flipCard(0);
flipCard(2);
