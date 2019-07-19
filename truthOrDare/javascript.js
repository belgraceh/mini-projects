var truth = ["Who is your crush?","Do you have a boyfriend?", "When was the last time you showered?", "What's your favorite song?", "What was the last text you sent?", "What's your favorite social media app?", "What was the last thing you searched on your phone?", "Who would you want to switch lives with?", "What's your worst quality?", "What's your best quality?", "What's your guilty pleasure?", "Do you sing in the shower?", "What is your worst fear?", "What is your biggest regret", "Have you ever cheated or been cheated on? Which one?", "What is the biggest lie you ever told", "What was the worst lie someone has said about you?", "What's your favorite vacation spot?", "Why did you break up with your last boyfiend or girlfriend?"];

  var truthOutput = $(".truthH2");
  var dareOutput = $(".dareH2");

  var button1 = $(".truthButton");
    button1.on('click', pickTruth);
  var button2 = $(".dareButton");
      button2.on('click', pickDare);
    function pickTruth() {
      var random1 = Math.random();
      var multiply1 = random1 * truth.length;
      var round1 = Math.floor(multiply1);
      var randomTruth = truth[round1];
      truthOutput.text(randomTruth);
}
var dare =["Serenade the person closest to you.", "Talk in an accent for the next 30 minutes.", "Do 4 cartwheels in a row.","Break dance for 30 seconds.", "Dance with no music for a full minute."]
  var button2 = $(".dareButton");
  button2.on('click', pickDare);
    function pickDare(){
      var random2 = Math.random();
      var multiply2 = random2 * dare.length;
      var round2 = Math.floor(multiply2);
      var randomDare = dare[round2];
      dareOutput.text(randomDare);
    }
var submit = $(".submit")
  submit.on('click', commentUnder)
    function commentUnder(){
      var userInput = $(".comments").val();
      var commentsHere = $(".commentSection");
      commentsHere.append(`
        <div class="commentbox">
          <p class="input">${userInput}</p>
        </div>
        `);
    }
