// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards) {
    const thankYouMessages = [];
    for (let i = 0; i < cards.length; i++) {
        const message = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}
function countDown(num) {
    let n = num
    while (n >= 0) {
        console.log(n);
        n--;
        
    }
}
    