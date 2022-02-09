let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"But as for certain truth, no man has known it. For even if by chance he were to utter the final truth, he would himself not know it. Let him instead form his own opinion.” – Xenophanes', 
    '“For never shall this prevail: that things that are not, are. But hold back your thought from this way of inquiry. Nor let habit born of long experience force you to ply an aimless eye and droning ear along this road; but judge by reasoning...” – Parmenides',
    '“We cannot live better than in seeking to become better.” – Socrates',
    '“Ignorance, the root and stem of every evil.” – Plato',
    '“Man is by nature a political animal.” – Aristotle',
    '“The gentleman understands rightness, whereas the petty person understands profit.” – Confucius',
    '“I think, therefore I am.” – René Descartes',
    '“The source of every crime, is some defect of the understanding; or some error in reasoning; or some sudden force of the passions. Defect in the understanding is ignorance; in reasoning, erroneous opinion.” – Thomas Hobbes',
    '“Let not men think there is no truth but in the sciences that they study, or the books that they read. To prejudge other men’s notions before we have looked into them is not to shew their darkness, but to put out our own eyes.” – John Locke',
    '“It is possible for the same thing both to be and not to be.” – David Hume',
    '“Rules for happiness: something to do, someone to love, something to hope for.” – Immanuel Kant',   
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
