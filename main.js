var quotes = [
    {
        quote: "'Two Things are Infinite: The Universe and Human Stupidity; and I'm not Sure about The Universe.'",
        author: "Albert Einstein"
    },
    {
        quote: "'A Room Without Books is Like a Body Withput a Soul.'",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "'Be Who You are and Say What You Feel, Because Those Who Mind Don't Matter, and Those Who Matter Don't Mind.'",
        author: "Bernard M. Baruch"
    },
    {
        quote: "'You've Gotta Dance Like There's Nobody Watching, Love Like You'll Never be Hurt, Sing Like There's Nobody Listening, And Live Like it's Heaven on Earth.'",
        author: "William W. Purkey"
    },
    {
        quote: "'You Know You're in Love When You Can't Fall Asleep Because Reality is Finally Better Than Your Dreams.'",
        author: "Mae West"
    }
];
var quoteBox = document.getElementById("quote-box");
var quote = document.getElementById("quote");
var author = document.getElementById("author");
var newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener('click', function() {
    for (var i = 0; i < quotes.length; i++){
        var randomQuote = quotes[Math.floor(Math.random()* quotes.length)];
        quote.textContent = randomQuote.quote;
        author.textContent = randomQuote.author;
    }
});