//CREATE YOUR TEMPLATE FOR THE STORY/GAME HERE


//Input Title of Story Here
var storytitle = "Bubonic Plague";
//Input Youtube URL Here
var youtubeURL = "https://www.youtube.com/embed/65ws8A_rdHQ?autoplay=1&rel=0";

//Input words and definitions here (5 Max)

var sat_words = [
    {word: "love", def: "care for them"},
  
];

//Input Article Here - 

var article = 'An Oregon teenaer has come down with the bubonic plague. The dreaded disease killed around 60 percent of the European population during the Middle Ages. Since then it has never been completely wiped out.<br><br>Authorities believe a flea infected the girl during a mid-October hunting trip. She became ill, was hospitalized and is now recovering in an intensive care unit. No new cases of the disease have been discovered since then.<br><br>\"Many people think of the plague as a disease of the past,\" Oregon public health official Emilio DeBess said. The truth is, \"it\'s still very much present in our environment, particularly among wildlife.\"<br><br>"Fortunately, plague remains a rare disease,\" DeBess continued. However, he added, to keep it that way people do need to be cautious when dealing with wildlife.<br><br>The bubonic plague typically spreads through flea bites or when plague bacteria comes in contact with an individual\'s broken skin. People often become sick quickly. Typically the first symptoms are fever, headache, chills, weakness and swollen lymph glands.<br><br>To protect themselves from the disease, people should avoid contact with wild animals such as squirrels, chipmunks or other rodents, who can carry fleas, DeBess said. They should also keep pets away from such animals.'
;



//End of Input




//Records the players names in Page 1: Title

function playernames() 
{sessionStorage.play1name = document.getElementById("player1entry").value;
sessionStorage.play2name = document.getElementById("player2entry").value;
}




//This recalls the players names each page 


function postplayernames()
{document.getElementById("player1display").innerHTML = sessionStorage.play1name;
  document.getElementById("player2display").innerHTML = sessionStorage.play2name;
  document.getElementById("player3display").innerHTML = sessionStorage.play1name;
  document.getElementById("player4display").innerHTML = sessionStorage.play2name;
}





//This sets up the scoreboard

function scoreboard()
{document.getElementById("player1score").innerHTML = sessionStorage.play1score;
}

//This sets up scoreboard for article
function scores()
{document.getElementById("teamscores").innerHTML = sessionStorage.team;
  document.getElementById("player1score").innerHTML = sessionStorage.play1score;
  document.getElementById("player2score").innerHTML = sessionStorage.play2score;
}

//dialogue functions for the article.html
function firstread() { 
    document.getElementById("read1dialog").showModal(); 
} 

function closefirstread() {
  document.getElementById("read1dialog").close();
}


//here is the javascript for the coin toss.
document.getElementById('cointoss').onclick = click;

var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	flip(sessionStorage.play1name);
    }else{
        flip(sessionStorage.play2name);
    }
}
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
}



