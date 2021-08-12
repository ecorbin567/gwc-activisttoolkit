//quotes on home page
cycleQuotes();

var quotes = document.getElementById("quotes");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var sampleQuote;
var sampleQuote2;
var sampleQuote3;
var sampleQuote4;
var sampleQuote5;

function quoteCycle() {
  quotes.innerHTML = sampleQuote;
}
function quoteCycle2() {
  quotes.innerHTML = sampleQuote2;
}
function quoteCycle3() {
  quotes.innerHTML = sampleQuote3;
}
function quoteCycle4() {
  quotes.innerHTML = sampleQuote4;
}
function quoteCycle5() {
  quotes.innerHTML = sampleQuote5;
}

async function cycleQuotes() {
  setInterval(quoteCycle, 15000);
  sampleQuote = "'We're all gonna die in a few decades anyway.'";
  await sleep(3000);
  setInterval(quoteCycle2, 15000);
  sampleQuote2 = "'What's the point in getting an education?'";
  await sleep(3000);
  setInterval(quoteCycle3, 15000);
  sampleQuote3 = "'Our kids probably won't live to be adults.'";
  await sleep(3000);
  setInterval(quoteCycle4, 15000);
  sampleQuote4 = "'There's nothing anyone can do.'";
  await sleep(3000);
  setInterval(quoteCycle5, 15000);
  sampleQuote5 = "'So why bother trying?'";
  await sleep(3000);
}
//---------------------------------chatbot-----------------------------------

//q1
document.getElementById("q1r1").style.visibility = 'hidden';
document.getElementById("q1r2").style.visibility = 'hidden';
document.getElementById("q1r3").style.visibility = 'hidden';
document.getElementById("tryAgain").style.visibility = 'hidden';

var q1a1 = document.getElementById("q1a1");
q1a1.addEventListener('click', question1_1);
var q1a2 = document.getElementById("q1a2");
q1a2.addEventListener('click', question1_2);
var q1a3 = document.getElementById("q1a3");
q1a3.addEventListener('click', question1_3);
var rightOrWrong = document.getElementById("rightOrWrong");
var explanation = document.getElementById("explanation");
var tryAgain = document.getElementById("tryAgain");

function question1_1() {
  document.getElementById("q1r1").style.visibility = 'visible';
  document.getElementById("q1a3").style.visibility = 'hidden';
  document.getElementById("q1a2").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong.innerHTML = "Not a good choice.";
  explanation.innerHTML = "This response reinforces your friend's feelings of doom and helplessness without providing an opportunity to talk through those feelings and get to the other side.";
  document.getElementById("tryAgain").style.visibility = 'visible';
  tryAgain.addEventListener('click',tryAgainFunc1_1);
  function tryAgainFunc1_1() {
    document.getElementById("q1r1").style.visibility = 'hidden';
    document.getElementById("q1a3").style.visibility = 'visible';
    document.getElementById("q1a2").style.visibility = 'visible';
  }
}
function question1_2() {
  document.getElementById("q1r2").style.visibility = 'visible';
  document.getElementById("q1a1").style.visibility = 'hidden';
  document.getElementById("q1a3").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong.innerHTML = "Not a good choice.";
  explanation.innerHTML = "Don't try to calm your friend's fears of an unlivable planet by denying expert opinion and scientific research. A healthy response to climate anxiety starts with full acknowledgement of the facts.";
  document.getElementById("tryAgain").style.visibility = 'visible';
  tryAgain.addEventListener('click',tryAgainFunc1_2);
  function tryAgainFunc1_2() {
    document.getElementById("q1r2").style.visibility = 'hidden';
    document.getElementById("q1a1").style.visibility = 'visible';
    document.getElementById("q1a3").style.visibility = 'visible';
  }
}
function question1_3() {
  document.getElementById("q1r3").style.visibility = 'visible';
  document.getElementById("q1a1").style.visibility = 'hidden';
  document.getElementById("q1a2").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong.innerHTML = "Good choice!";
  explanation.innerHTML = "This response validates your friend's concerns and offers an opportunity to talk through them. Scroll down to continue the conversation!";
  document.getElementById("tryAgain").style.visibility = 'hidden';
}

//q2
document.getElementById("q2r1").style.visibility = 'hidden';
document.getElementById("q2r2").style.visibility = 'hidden';
document.getElementById("q2r3").style.visibility = 'hidden';
document.getElementById("tryAgain2").style.visibility = 'hidden';

var q2a1 = document.getElementById("q2a1");
q2a1.addEventListener('click', question2_1);
var q2a2 = document.getElementById("q2a2");
q2a2.addEventListener('click', question2_2);
var q2a3 = document.getElementById("q2a3");
q2a3.addEventListener('click', question2_3);
var rightOrWrong2 = document.getElementById("rightOrWrong2");
var explanation2 = document.getElementById("explanation2");
var tryAgain2 = document.getElementById("tryAgain2");

function question2_1() {
  document.getElementById("q2r1").style.visibility = 'visible';
  document.getElementById("q2a3").style.visibility = 'hidden';
  document.getElementById("q2a2").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong2.innerHTML = "Good choice!";
  explanation2.innerHTML = "This response encourages your friend to focus on the positive, while still validating their anxiety. Scroll down to continue the conversation!";
  document.getElementById("tryAgain2").style.visibility = 'hidden';
}
function question2_2() {
  document.getElementById("q2r2").style.visibility = 'visible';
  document.getElementById("q2a1").style.visibility = 'hidden';
  document.getElementById("q2a3").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong2.innerHTML = "Not a good choice.";
  explanation2.innerHTML = "Positive responses are good, but you should acknowledge that your friend's concerns are valid. Avoid sidestepping what they were saying- it shows that you weren't really listening.";
  document.getElementById("tryAgain2").style.visibility = 'visible';
  tryAgain2.addEventListener('click',tryAgainFunc2_2);
  function tryAgainFunc2_2() {
    document.getElementById("q2r2").style.visibility = 'hidden';
    document.getElementById("q2a1").style.visibility = 'visible';
    document.getElementById("q2a3").style.visibility = 'visible';
  }
}
function question2_3() {
  document.getElementById("q2r3").style.visibility = 'visible';
  document.getElementById("q2a1").style.visibility = 'hidden';
  document.getElementById("q2a2").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong2.innerHTML = "Not a good choice.";
  explanation2.innerHTML = "Insulting your friend's intelligence won't reassure them, and what they want right now is to confide in a person, not to bury their nose in more news. Make sure you stay engaged with them and avoid judging them for their anxiety.";
  document.getElementById("tryAgain2").style.visibility = 'visible';
  tryAgain2.addEventListener('click',tryAgainFunc2_3);
  function tryAgainFunc2_3() {
    document.getElementById("q2r3").style.visibility = 'hidden';
    document.getElementById("q2a1").style.visibility = 'visible';
    document.getElementById("q2a2").style.visibility = 'visible';
  }
}

//q3
document.getElementById("q3r1").style.visibility = 'hidden';
document.getElementById("q3r2").style.visibility = 'hidden';
document.getElementById("q3r3").style.visibility = 'hidden';
document.getElementById("tryAgain3").style.visibility = 'hidden';

var q3a1 = document.getElementById("q3a1");
q3a1.addEventListener('click', question3_1);
var q3a2 = document.getElementById("q3a2");
q3a2.addEventListener('click', question3_2);
var q3a3 = document.getElementById("q3a3");
q3a3.addEventListener('click', question3_3);
var rightOrWrong3 = document.getElementById("rightOrWrong3");
var explanation3 = document.getElementById("explanation3");
var tryAgain3 = document.getElementById("tryAgain3");

function question3_1() {
  document.getElementById("q3r1").style.visibility = 'visible';
  document.getElementById("q3a3").style.visibility = 'hidden';
  document.getElementById("q3a2").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong3.innerHTML = "Not a good choice.";
  explanation3.innerHTML = "Your friend is allowed to focus on being sad about one major world problem at a time, and worrying about all of them at once won't help their anxiety at all. Being condescending about their concerns will only make them angry and defensive.";
  document.getElementById("tryAgain3").style.visibility = 'visible';
  tryAgain3.addEventListener('click',tryAgainFunc3_1);
  function tryAgainFunc3_1() {
    document.getElementById("q3r1").style.visibility = 'hidden';
    document.getElementById("q3a3").style.visibility = 'visible';
    document.getElementById("q3a2").style.visibility = 'visible';
  }
}
function question3_2() {
  document.getElementById("q3r2").style.visibility = 'visible';
  document.getElementById("q3a1").style.visibility = 'hidden';
  document.getElementById("q3a3").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong3.innerHTML = "Good choice!";
  explanation3.innerHTML = "This response encourages your friend to channel their anxiety and sadness about the climate into meaningful action. You've helped them identify an issue that they care about and empowered them to take action to make the world a better place. Congratulations!";
  document.getElementById("tryAgain3").style.visibility = 'hidden';
}
function question3_3() {
  document.getElementById("q3r3").style.visibility = 'visible';
  document.getElementById("q3a1").style.visibility = 'hidden';
  document.getElementById("q3a2").style.visibility = 'hidden';
  console.log("clicked");
  rightOrWrong3.innerHTML = "Not a good choice.";
  explanation3.innerHTML = "Don't invalidate your friend's sadness- and appear insensitive to your friend- by dismissing their legitimate concern for others.";
  document.getElementById("tryAgain3").style.visibility = 'visible';
  tryAgain3.addEventListener('click',tryAgainFunc3_3);
  function tryAgainFunc3_3() {
    document.getElementById("q3r3").style.visibility = 'hidden';
    document.getElementById("q3a1").style.visibility = 'visible';
    document.getElementById("q3a2").style.visibility = 'visible';
  }
}
