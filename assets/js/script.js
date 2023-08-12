/**
 * Select the #keyboard-area
 */
 const keyboardArea = document.getElementById('keyboard-area');
 /**
  * An array to hold the words to guess
  */
 const words = [
     "PANCAKE",
     "CURRY"
 ];
 /**
  * Select the #word-area
  */
 const wordArea = document.getElementById('word-area');
 /**
  * Select the #submit-btn
  */
 const submitBtn = document.getElementById("submit-btn");
 /**
  * Select the #keyed-guess
  */
 const keyedGuess = document.getElementById("keyed-guess");
 /**
  * Select the #message-area
  */
 const messageArea = document.getElementById("message-area");
 /**
  * Select the #guessed-letters
  */
 const guessedLettersArea = document.getElementById("guessed-letters");
 /**
  * Select the #gallows-img"
  */
 const gallowsImg = document.getElementById("gallows-img");
 /**
  * Select the #wrong-guesses
  */
 const wrongGuessesArea = document.getElementById("wrong-guesses");
 /**
  * Select the #guesses
  */
 const oldGuesses = document.getElementById("guesses");
 /**
  * Select the #wrong-guesses
  */
 const oldWrongGuesses = document.getElementById("wrong-guesses");
 /**
  * Select the #letters-found
  */
 const oldLettersFound = document.getElementById("letters-found");
 
 
 /**
  * display the keyboard in the keyboard-area, giving each button an id of their value
  */
 function createKeyboard() {
     let html = "";
     for (let i = 65; i < 91; i++) {
         // use  String method to convert numbers to their corresponding letter
         let c = String.fromCharCode(i);
         // on each loop add html to the var...
         html += `<button
                     id = ${c}
                     onclick="checkDuplicate(id)">` + c +
             `</button>`;
     }
     // add the html to the #keyboard-area
     keyboardArea.innerHTML = html;
 }
 
 
 
 /**
  * choose a random word from the words array
  */
 function chooseWord() {
     word = words[Math.floor(Math.random() * words.length)].toUpperCase();
 }
 
 /**
  * display the random word in the word-area as underscores for each letter
  */
 function createAnswerArray() {
     let wordLength = word.length;
     for (let i = 0; i < wordLength; i++) {
         answerArray[i] = ("_ ");
     }
     // document.getElementById('word-area').innerHTML = answerArray.join("");
     wordArea.innerHTML = answerArray.join("");
 
 }
 
 /**
  * if keydown is an ASCII letter convert it to a string and add it to the keyed-guess area.
  * if it's the enter button call checkEmptyKeyGuess
  * @param {*} event listens for a keydown press
  */
 document.onkeydown = function(event) {
     let keyCode = event.keyCode;
     if (keyCode > 64 && keyCode < 91) {
         let keyPress = String.fromCharCode(event.keyCode);
         keyedGuess.innerHTML = keyPress;
         clearMessage();
     }
     // remove focus when enter pressed so checkEmptyKeyGuess is not called twice
     if (keyCode === 13) {
         document.activeElement.blur();
         checkEmptyKeyGuess();
         // if backspace pressed
     }
     if (keyCode === 8) {
         clearKeyGuess();
     }
 }
 
 
 /**
  * if keyed guess area is empty add message to screen, if not check the guess for duplicates
  */
 function checkEmptyKeyGuess() {
     let keyedGuess = document.getElementById("keyed-guess").innerHTML;
     if (keyedGuess === "") {
         messageArea.innerHTML = "No letter!!";
     } else {
         checkDuplicate(keyedGuess);
     }
 }
 
 /**
  * increment guesses made and add the guessed letter to the word if it is in it 
  * @param {*} id is also the value of the keyed button
  */
 function checkGuess(id) {
     disableLetter(id);
     updateGuessedLetters(id);
     incrementGuesses();
     let newMatches = 0;
     // check if guess was succsessful 
     for (let i = 0; i < word.length; i++) {
         if (id == word[i]) {
             answerArray[i] = id;
             wordArea.innerHTML = answerArray.join(" ");
             incrementLettersFound();
             newMatches++;
         }
     }
     // if guess was not succsessful
     if (newMatches === 0) {
         incrementWrongGuesses();
         updateGallows();
     }
 }
 
 /**
  * disable selected letter on html keyboard
  * @param {*} id is also the value of the keyed button
  */
 function disableLetter(id) {
     document.getElementById(id).disabled = true;
 }
 
 /**
  * clear the enter guess area 
  */
 function clearKeyGuess() {
     keyedGuess.innerHTML = "";
 }
 
 // array of guessed letters 
 let guessedLetters = [];
 
 /**
  * display guessed letters 
  * @param {*} letter is the selected letter
  */
 function updateGuessedLetters(letter) {
     guessedLetters.push(letter);
     for (letter in guessedLetters) {
         guessedLettersArea.innerHTML = guessedLetters.join(" ");
     }
 }
 
 /**
  * check selected letter has not already been chosen
  * @param {*} id is also the value of the keyed button
  */
 function checkDuplicate(id) {
     clearMessage();
     clearKeyGuess();
     if (guessedLetters.includes(id)) {
         messageArea.innerHTML = `${id} has already been chosen`;
     } else {
         checkGuess(id);
     }
 }
 
 /**
  * clear message area text
  */
 function clearMessage() {
     messageArea.innerHTML = "";
 }
 
 /**
  * update gallows img using wrongGuessesNum var
  */
 function updateGallows() {
     let wrongGuessesNum = wrongGuessesArea.innerText;
     gallowsImg.src = `assets/images/gallows${wrongGuessesNum}.jpg`;
     gallowsImg.alt = `Hand-drawn gallows with the first ${wrongGuessesNum} out of 10 parts`;
 }
 
 /**
  * add 1 to the number of guesses in guesses-made on each guess
  */
 function incrementGuesses() {
     ++oldGuesses.innerHTML;
 }
 
 /**
  * add 1 to the number of guesses in wrong-guesses on each wrong guess
  */
 function incrementWrongGuesses() {
     ++oldWrongGuesses.innerHTML;
     if (oldWrongGuesses.innerHTML == 10) {
        setTimeout(gameOver, 100);
     }
 }
 
 /**
  * add 1 to the number of letters-found with each guessed letter. gameWon called when letters-found is the length of the word
  */
 function incrementLettersFound() {
     ++oldLettersFound.innerHTML;
     if (oldLettersFound.innerHTML == word.length) {
        setTimeout(gameWon, 100);
     }
 }
 
 
 /**
  * alert when the game is lost
  */
 function gameOver() {
    //  add timeout before called
    // reset game
     alert("GAME OVER!!");
     setUp();
 }
 
 /**
  * alert when the game is won
  */
 function gameWon() {
    //  add timeout before called
    // reset game

     alert("GAME WON!!");
     setUp();
 }
 
 /**
  * set up the game ready to be played
  */
 function setUp() {
     chooseWord();
     guessedLettersArea.innerHTML = "";
     wrongGuessesArea.innerHTML = "";
     oldGuesses.innerHTML = 0;
     oldWrongGuesses.innerHTML = 0;
     oldLettersFound.innerHTML = 0;
     guessedLetters = [];
     answerArray = [];
     createAnswerArray();
     createKeyboard();
     updateGallows();
     clearMessage();
     clearKeyGuess();
 }
 
 /**
  * set up the game when document is loaded
  */
 document.onload = setUp();