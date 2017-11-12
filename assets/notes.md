
gameWin counter = 0

When Play button is clicked:
Set display: none to id=intro
Pick random word from array potterWords; make (array currentWord); and 
display as blanks and 
listen for char clicks
Reset lettersUsed and strikes counter

When char is clicked:
compare against string in currentWord for match and lettersUsed
If char in lettersUsed:
    alert "Letter already guessed-guess again";
    return;
If char not in currentWord :
	counter++ to varStrikes;
	push letter to lettersUsed variable;
If char === : 
	display letter in place in word;
	push letter to lettersUsed variable; 
	remove letter from array currentWord;
Check currentWord if .length=0 
	alert, you guess it!;
	gameWin++;




