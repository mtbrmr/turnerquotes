var quotes = [
  "Development is about problem solving; not problem asking.",
  "Do what you love, love what you do.",
  "You can only achieve what you believe.",
  "It's not what you do; it's how you're perceived",
  "You gotta aim for the skies",
  "You've gotta give what you've got",
  "You've got to walk hand in hand with people to create success.",
  "Don't be a follower because you'll just see an arsehole",
  "If you want to change the world, make it happen",
  "If you're given chips and beans every day, you're gonna eat chips and beans",
  "We're not designing websites, we're designing emotions",
  "Just imagine it happening and it will happen",
  "We build houses for people; we don't live in them",
  "We aim to please and we please to aim",
  "If you can't get rid of the disease, get rid of the patient",
  "Only give what people deserve",
  "Just because you've dodged a bullet doesn't mean they've stopped firing at you",
  "Why would you run a marathon if you didn't know where the finish line was?",
  "Focus on the things you can change",
  "Designed by champions, built by warriors",
  "Why stick with a gun when you can have a tank?",
  "There's winning and there's losing; if you don't win, you lose.",
  "Today we're champions, tomorrow we're legends",
  "Don't let your current situation get in the way of your dreams",
  "Do blind pigeons find their way home?",
  "Make every year count :)",
  "You don't get things done by skirting around issues, you get things done by getting them done",
  "You can't tell the players at Blackpool not to dream",
  "Don't fear rejection",
  "What are you gonna do today that will change the rest of your life?",
  "On the inside, I'm like a baby without candy",
  "At the end of every piece of code, there's a human being",
  "You are only what you believe",
  "If you feel the world needs to hear it, please feel free... Just don't show the police...",
  "Don't buy me a car, buy me success",
  "You get up in the morning and you want to swim a length, but really, you're just treading water",
  "Enemies are like snakes in the grass: you only see them when they come out to bite you",
  "Look after your body and the mind will follow",
  "Before you tackle the fish, you've got to clean the water",
  "If you poke the bear, the bear ain't gonna like it",
  "You can make as many cakes as you want, but if no-one's going to eat them, they're useless",
];

var generateQuote = function() {
  var rand = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('wisdom').innerHTML = rand;
}

window.onload = generateQuote;
document.getElementById('newQuote').addEventListener('click', generateQuote);
