// Random Quote Generator - Apellicer

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

var intervalColor;
var intervalQuote;


// it gets a Random Object from the Array and return it.

function getRandomQuote(array){
  var quoteToSend; // Quote Object that we will return.
  var topRandomNumber = quotes.length; //I get length of the Array to be my top in my random function.
  var positionQuote = Math.floor(Math.random()*(topRandomNumber));
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

//  BackgroundColor and Quotes changes randomly every interval.

function setIntervals(){

  intervalColor = setInterval(changeColor,6000); //set the interval 6s and call function changeColor.
  intervalQuote = setInterval(printQuote,6000); //set the interval 6s and call function printQuote
}

//  Change style to a random background color.

function changeColor(){
  var randomColor1 = Math.floor(Math.random()*(200)); //get random number to create the rgb color.
  var randomColor2 = Math.floor(Math.random()*(200));
  var randomColor3 = Math.floor(Math.random()*(200));
  var colorRgb = [randomColor1,randomColor2,randomColor3];
  var stringColors = colorRgb.join(',');
  var stringRgb = "rgb("+stringColors+")"; //create a string of colors bcause doesn't accept this format rgb() as a function
                                          //must be a String.

  document.body.style.backgroundColor = stringRgb; //select tag body and change the style with a String.
}

setIntervals(); //call function.


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
