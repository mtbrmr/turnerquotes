var quotes = [
  "Development is about problem solving; not problem asking.",
  "Do what you love, love what you do.",
  "You can only achieve what you believe.",
  "It's not what you do; it's how you're perceived",
  "You gotta aim for the skies",
  "You've gotta give what you've got",
  "You've got to walk hand in hand with people to create success.",
  "Don\'t be a follower because you'll just see an arsehole",
  "If you want to change the world, make it happen",
  "If you're given chips and beans every day, you're gonna eat chips and beans",
  "We\'re not designing websites, we\'re designing emotions",
  "Just imagine it happening and it will happen",
  "We build houses for people; we don\'t live in them",
  "We aim to please and we please to aim",
  "Of you can\'t get rid of the disease, get rid of the patient",
  "Only give what people deserve"
];

var generateQuote = function() {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('wisdom').innerHTML = rand;
}

window.onload = generateQuote;
document.getElementById('newQuote').addEventListener('click', generateQuote);
