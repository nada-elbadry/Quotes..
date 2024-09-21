const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const soundButton = document.getElementById('sound-button');
const twitterButton = document.getElementById('twitter-button');
const copyButton = document.getElementById('copy-button');

const quotes = [
  {
            quote:"You only live once, but if you do it right, once is enough",
            author:"― Mae West",
        },
        {
            quote:"Be the change that you wish to see in the world",
            author:"― Mahatma Gandhi",
        },
        {
            quote:"if you tell the truth, you don't have to remember anything",
            author:"― Mark Twain",
        },
        {
            quote:"It is better to be hated for what you are than to be loved for what you are not.”",
            author:"― Andre Gide, Autumn Leaves",
        },
        {
            quote:"Always forgive your enemies; nothing annoys them so much",
            author:"― Oscar Wilde",
        },
        {
            quote:"Live as if you were to die tomorrow. Learn as if you were to live foreve",
            author:"― Mahatma Gandhi",
        },
        {
            quote:"We accept the love we think we deserve.",
            author:"― Ralph Waldo Emerson",
        },
  // Add more quotes here
];

let lastIndex = -1;
let displayedQuotes = [];

function getQuotes() {
  displayedQuotes = [];

  do {
    const randomIndex = Math.floor(Math.random() * quotes.length);
  } while (lastIndex === randomIndex || displayedQuotes.includes(randomIndex));

  lastIndex = randomIndex;
  displayedQuotes.push(randomIndex);

  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote.quote;
  quoteAuthor.textContent = `- ${randomQuote.author}`;

  // Trigger typing animation (if using Typed.js)
  typing(randomQuote.quote, "quote");
}

function typing(string, place) {
  new Typed(`#${place}`, {
    strings: [string],
    typeSpeed: 50,
    showCursor: false,
  });
}

soundButton.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(quoteText.textContent);
  speechSynthesis.speak(utterance);
});

twitterButton.addEventListener('click', () => {
  const quoteToShare = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteToShare)}`;
  window.open(twitterURL, '_blank');
});

copyButton.addEventListener('click', () => {
  const quoteToCopy = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(quoteToCopy)
    .then(() => {
      alert('Quote copied successfully!');
    })
    .catch(err => {
      console.error('Error copying quote:', err);
    });
});

// Call the function to display the first quote
getQuotes();