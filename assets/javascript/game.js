

    $(document).ready(function() {

// global variables

var randomNumber = 0;
var jars = 0;
var	books = 0;
var	chairs = 0;
var skillet = 0;


var wins = 0;
var losses = 0;
var totalScore = 0;  


//functions 
//function generates a random number 
function compRandomNumber() {  

randomNumber= Math.floor((Math.random() * 120) + 12);
var compRandomNumber = "<h3>"+ randomNumber +"</h3>";
document.querySelector(".computerNumber").innerHTML=compRandomNumber;
totalScore= 0;
console.log( "random comp number " + randomNumber);
};

function junkNumber() {
	var numberJars = Math.floor((Math.random() * 12) + 1);
	var numberBooks = Math.floor((Math.random() * 12) + 1);
	var numberChairs = Math.floor((Math.random() * 12) + 1);
	var numberSkillet = Math.floor((Math.random() * 12) + 1);
	jars=numberJars;
	books=numberBooks;
	chairs=numberChairs;
	skillet=numberSkillet;
	console.log("jars " + numberJars);
	console.log("books " + numberBooks);
	console.log("chairs " + numberChairs);
	console.log("skillet " + numberSkillet);
};

//function totals the click choices and diplays on html
function junkClick (){  
		$("#jars").click(function(){
			totalScore = jars+totalScore;
			$("#runningTotal").html(totalScore);
			console.log("ttl score" +totalScore);
			winsLosses();

		});

		$("#books").click(function(){
			totalScore = books+totalScore;
			$("#runningTotal").html(totalScore);
			console.log("ttl score" + totalScore);
			winsLosses();
		});
		$("#chairs").click(function(){
			totalScore = chairs+totalScore;
			$("#runningTotal").html(totalScore);
			console.log("ttl score" +totalScore);
			winsLosses();
		});
		$("#skillet").click(function(){
			totalScore = skillet+totalScore;
			$("#runningTotal").html(totalScore);
			console.log("ttl score" + totalScore);
			winsLosses();
		});				
				

};
//tracks wins and losses
function winsLosses(){ 
	 if (totalScore === randomNumber){
		alert("You Win!");
		wins++;
		console.log("wins " + wins);
		var winCount = "<p>Wins:"+wins+"</p>" + "<p>Losses:" +losses+ "</p>";
		document.querySelector("#winsLosses").innerHTML=winCount;
		alert("If you want to play again, just click the play Again Box");
		$("#playAgain").click(function(){
		var newTotalScore = "<h2>0</h2>";
		document.querySelector("#runningTotal").innerHTML=newTotalScore;
		game();
		});

		
	}else if (totalScore > randomNumber){
		alert ("you lost.  If you want to play again, just click the play Again Box");
		losses++;
		var lossCount = "<p>Wins:"+wins+"</p>" + "<p>Losses: "+losses+ "</p>";
		document.querySelector("#winsLosses").innerHTML=lossCount;
		$("#playAgain").click(function(){
		var newTotalScore = "<h2>0</h2>";
		document.querySelector("#runningTotal").innerHTML=newTotalScore;
		game();
		});
	}

};
//functions for the game


function game(){
	totalScore = 0;
	randomNumber = 0;
	compRandomNumber();
	junkNumber();


}

game();
junkClick();

})

