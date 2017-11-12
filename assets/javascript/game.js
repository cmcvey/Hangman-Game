
var potterWords = ["expelliarmus", "pollyjuice", "muggle", "squib", "snape", "horcrux", "dementor", "dumbledore", "aragog", "azkaban", "basilisk", "ollivander", "howler"]

var $playButton = $("#playButton")

function messageUser (string) {
	$("#message").text(string);
}


$playButton.on("click", function() {
	$(this).hide();
	var gameOver = false;
	var strikeCounter = 0;
	var hitCounter = 0;
	var lettersUsed = []
	var currentWord = potterWords[Math.floor(Math.random() * potterWords.length)];
	var $currentWordContainer = $("#currentWordContainer")
	$currentWordContainer.empty();
	$("#strikeCounter").text("Strikes: " + strikeCounter)
	messageUser("Press any letter to begin");

	console.log('currentWord: ', currentWord, '| length: ', currentWord.length);

	for (var i = 0; i < currentWord.length; i++) {
		var li = $("<li>");
		li.addClass("letter").attr("data-letter", currentWord[i]);
		$currentWordContainer.append(li);
	}

	$(document).off("keydown").on("keydown", function(event) {
		var guess = String.fromCharCode(event.which).toLowerCase();

		if (gameOver) {
			return;
		}

		if (lettersUsed.includes(guess)) {
			messageUser("Letter already used. Try again or detention with Umbridge!")
			return;
		}


		lettersUsed.push(guess);
		

		if (currentWord.includes(guess)) {
			$currentWordContainer.find("li").each(function(index) {
				var liLetter = $(this).attr("data-letter");
				if (liLetter === guess) {
					$(this).text(guess);
					hitCounter++;
					console.log('hitCounter', hitCounter);
				}
			})
		} else {
			strikeCounter++;
			$("#strikeCounter").text("Strikes: " + strikeCounter)
		}

		if (strikeCounter > 2) {
			messageUser("Avada Kedavra!")
			$("#playButton").show().text("Play Again");
			gameOver = true;
		}

		if (hitCounter === currentWord.length) {
			messageUser("You're a wizard Harry!");
			$("#playButton").show().text("Play Again");
			gameOver = true;
		}
	})



})


