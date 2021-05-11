// Collection Of Quote
const quotes = [{
    quote: `We generate fears while we sit. We overcome them by action`,
    author: `Dr. Henry Link`
}, {
    quote: `The best way to get started is to quit talking and begin doing`,
    author: `- Walt Disney `
}, {
    quote: `The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty`,
    author: `- Winston churchill`
}, {
    quote: `Don't let yasterday take up too much of today.`,
    author: `- Will Rogers`
}, {
    quote: `If you are working on something that you really care about , you don't have to be pushed. The vision pulls you.`,
    author: `- Steve Jobs`
}, {
    quote: `People who are crazy enough to think they can change the world, are the ones who do.`,
    author: `- Rob Siltanen`
}, {
    quote: `Failure will never overtake me if my determination to succeed is strong enough.`,
    author: `- Og Mandino`
}, {
    quote: `We may encounter many defeats but we must not be defeated.`,
    author: `-Maya Angelous`
}, ]
// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})