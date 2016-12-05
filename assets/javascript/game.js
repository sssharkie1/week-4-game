

    $(document).ready(function() {
      console.log("js is working, you are just doing something wrong");

      // global variables

var randomNumber = 0;
var redGem = 0;
var	blueGem = 0;
var	pinkGem = 0;
var greenGem = 0;


var wins = 0;
var losses = 0;
var totalScore = 0;  

//console.log(gems.red * randomNumber);
//console.log(wins+2 , losses + 2, totalScore +2);


//functions 

function compRandomNumber () {  //function generates a random number and puts in the div ID computer number

randomNumber= Math.floor((Math.random() * 120) + 12);
var compRandomNumber = "<h3>"+ randomNumber +"</h3>";
document.querySelector(".computerNumber").innerHTML=compRandomNumber;
totalScore= 0;
console.log( "random comp number " + randomNumber);
};

function gemsNumber() {
	var gemsNumberRed = Math.floor((Math.random() * 12) + 1);
	var gemsNumberBlue = Math.floor((Math.random() * 12) + 1);
	var gemsNumberPink = Math.floor((Math.random() * 12) + 1);
	var gemsNumberGreen = Math.floor((Math.random() * 12) + 1);
	redGem=gemsNumberRed;
	blueGem=gemsNumberBlue;
	pinkGem=gemsNumberPink;
	greenGem=gemsNumberGreen;
	console.log("red gem " + gemsNumberRed);
	console.log("blue gem " + gemsNumberBlue);
	console.log("pink gem " + gemsNumberPink);
	console.log("green gem " + gemsNumberGreen);

};

function gemClick (){  //function adds the click choices togetther and diplays on html
		$("#red").click(function(){
			totalScore = redGem+totalScore;
			$("#currentTotal").html(totalScore);
			console.log("ttl score" +totalScore);
			winsLosses();

		});

		$("#blue").click(function(){
			totalScore = blueGem+totalScore;
			$("#currentTotal").html(totalScore);
			console.log("ttl score" + totalScore);
			winsLosses();
		});
		$("#pink").click(function(){
			totalScore = pinkGem+totalScore;
			$("#currentTotal").html(totalScore);
			console.log("ttl score" +totalScore);
			winsLosses();
		});
		$("#green").click(function(){
			totalScore = greenGem+totalScore;
			$("#currentTotal").html(totalScore);
			console.log("ttl score" + totalScore);
			winsLosses();
		});				
				

};

function winsLosses(){ //counts wins and losses
	 if (totalScore === randomNumber){
		alert("You Win!");
		wins++;
		console.log("wins " + wins);
		var winCount = "<p>Wins&nbsp;&nbsp;&nbsp;"+wins+"</p>" + "<p>Losses:" +losses+ "</p>";
		document.querySelector("#winsLosses").innerHTML=winCount;
		alert("If you want to play again, just click the play Again Box");
		$("#playAgain").click(function(){
		var newTotalScore = "<h2>0</h2>";
		document.querySelector("#currentTotal").innerHTML=newTotalScore;
		game();
		});

		
	}else if (totalScore > randomNumber){
		alert ("you lost.  If you want to play again, just click the play Again Box");
		losses++;
		var lossCount = "<p>Wins:"+wins+"</p>" + "<p>Losses: "+losses+ "</p>";
		document.querySelector("#winsLosses").innerHTML=lossCount;
		$("#playAgain").click(function(){
		var newTotalScore = "<h2>0</h2>";
		document.querySelector("#currentTotal").innerHTML=newTotalScore;
		game();
		});
	}

};
//functions for the game
//---------------------------------------------------------------


function game(){
	totalScore = 0;
	randomNumber = 0;
	compRandomNumber();
	gemsNumber();
console.log("total score " + totalScore);

}

game();
gemClick();

})

