// FSJS - Random Quote Generator

// Array of Quotes Objects.

var quotes =[
  {
    quote:"In this world nothing can be said to be certain, except death and taxes.",
    source:"Benjamin Franklin",
    tag:"Finance"
  },
  {
    quote:"Love all, trust a few, do wrong to none.",
    source:"William Shakespeare",
    tag:"Love"

  },
  {
    quote:"Life is 20% what happens to you and 90% how you react it.",
    source:"Charles R. Swindoll",
    tag:"Motivational"
  },
  {
    quote:"A dream doesn’t become reality through magic; it takes sweat, determination and hard work.",
    source:"Colin Powell",
    tag:"Work"
  },
  {
    quote:"Luck is great, but most of life is hard work.",
    source:"Iain Duncan Smith",
    tag:"Work"
  },
  {
    quote:"Ideas pull the trigger, but instinct loads the gun.",
    source:"Don Marquis",
    tag:"Work"
  }
]


// it gets a Random Object from the Array and return it.

function getRandomQuote(array){
  var quoteToSend; // Quote Object that we will return.
  topRandomNumber = quotes.length; //I get length of the Array to be my top in my random function.
  positionQuote = Math.floor(Math.random()*(topRandomNumber));
  //method that returns random number between 0 and (topRandomNumber), I will use as a index of my Array of Objects.
  quoteToSend = quotes[positionQuote];
  return quoteToSend;
}


// Get Quote Object from randomQuote generates html and print it.

function printQuote(){
  var randomQuote;
  html = " "; //Sring that will be the html
  randomQuote = getRandomQuote(quotes); //call function getRandomQuote and I save it.
  for(key in randomQuote){ //loop inside Object while i'm buildin the html, if "quote or source" = <p> , else =<span>
    if(key ==="quote"){
      html += '<p class='+'"' + key + '"' + '>' + randomQuote[key] + '</p>';
    }
    else if (key ==="source"){
      html += '<p class='+'"' + key + '"' + '>' + randomQuote[key];
    }
    else {
      html += '<span class='+'"' + key + '"' + '>' + randomQuote[key] + '</span>';
    }
  }html +="</p>";
  document.getElementById('quote-box').innerHTML = html; //print hmtl.
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
