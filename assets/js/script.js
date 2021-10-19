const keyboardArea = document.getElementById('keyboard-area');
const words = [
  "PANCAKE",
  "CURRY"
];
const wordArea = document.getElementById('word-area');
const submitBtn = document.getElementById("submit-btn");
const keyedGuess = document.getElementById("keyed-guess");
const messageArea = document.getElementById("message-area");
const guessedLettersArea = document.getElementById("guessed-letters");
const gallowsImg = document.getElementById("gallows-img");
const wrongGuessesArea = document.getElementById("wrong-guesses");
const oldGuesses = document.getElementById("guesses");
const oldWrongGuesses = document.getElementById("wrong-guesses");
const oldLettersFound = document.getElementById("letters-found");

// let answerArray = [];

/**
 * display the keyboard in the keyboard-area, giving each button an id of their value
 */
 function createKeyboard() {
    let html = "";
    for(let i = 65; i < 91; i++) {
        // use  String method to convert numbers to their corresponding letter
        let c = String.fromCharCode(i);
        // on each loop add html to the var...
        html += `<button
                    id = ${c}
                    onclick="checkDuplicate(id)">` + c +
                `</button>`;
    }
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
    for (let i = 0; i < wordLength; i++ ) {
      answerArray[i] = ("_ ");
    }
    // document.getElementById('word-area').innerHTML = answerArray.join("");
    wordArea.innerHTML = answerArray.join("");
    
}

/**
 * if keydown is an ASCII letter convert it to a string and add it to the keyed-guess area.
 * if it's the enter button call checkEmptyKeyGuess
 * @param {*} event 
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
    } if (keyCode === 8) {
      clearKeyGuess();
    }
  }


  /**
   * if keyed guess area is empty alert user, if not check the guess
   */
 function checkEmptyKeyGuess() {
    let keyedGuess = document.getElementById("keyed-guess").innerHTML;
    if (keyedGuess === "") {
      messageArea.innerHTML = "No letter!!";
      // document.getElementById("message-area").innerHTML = "No letter!!";
    } else {
      checkDuplicate(keyedGuess);
    }
}

/**
 * increment guesses made and add the guessed letter to the word if it is in it 
 * @param {*} id 
 */
function checkGuess(id) {
    disableLetter(id);
    updateGuessedLetters(id);
    incrementGuesses();
    let newMatches = 0;
    for (let i = 0; i < word.length; i++) {
        if (id == word[i]) {
            answerArray[i] = id;
            wordArea.innerHTML = answerArray.join(" ");
            incrementLettersFound();
            newMatches++;
        }     
    }
    if (newMatches === 0) {
        incrementWrongGuesses();
        updateGallows();
    }
}

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
 * @param {*} letter 
 */
function updateGuessedLetters(letter) {
    guessedLetters.push(letter);
    for (letter in guessedLetters) {
      guessedLettersArea.innerHTML = guessedLetters.join(" ");
      // document.getElementById("guessed-letters").innerHTML = guessedLetters.join(" ");
    }
  }

function checkDuplicate(id) {
  clearMessage();
  clearKeyGuess();
  if (guessedLetters.includes(id)) {
    messageArea.innerHTML = `${id} has already been chosen`;
  } else {
    checkGuess(id);
  }
}

function clearMessage() {
  messageArea.innerHTML = "";
}

/**
 * update gallows img using wrongAnswers var
 */
function updateGallows() {
    let wrongGuessesNum = wrongGuessesArea.innerText;
    gallowsImg.src = `/assets/images/gallows${wrongGuessesNum}.jpg`;
    gallowsImg.alt = `Hand-drawn gallows with the first ${wrongGuessesNum} out of 10 parts`;
  }

/**
 * add 1 to the number of guesses in guesses-made on each guess
 */
  function incrementGuesses() {
    ++oldGuesses.innerHTML;
      // let oldGuesses = parseInt(document.getElementById("guesses").innerHTML);
      // document.getElementById("guesses").innerHTML = ++oldGuesses;
  }

  /**
   * add 1 to the number of guesses in wrong-guesses on each wrong guess
   */
  function incrementWrongGuesses() {
    ++oldWrongGuesses.innerHTML;
    // let oldWrongGuesses = parseInt(document.getElementById("wrong-guesses").innerHTML);
    // document.getElementById("wrong-guesses").innerHTML = ++oldWrongGuesses;
    if (oldWrongGuesses == 10) {
      gameOver();
    }
}

 /**
   * add 1 to the number of letters-found with each guessed letter
   */
  function incrementLettersFound() {
    ++oldLettersFound.innerHTML;
    // let oldLettersFound = parseInt(document.getElementById("letters-found").innerHTML);
    // document.getElementById("letters-found").innerHTML = ++oldLettersFound;
    if (oldLettersFound  == word.length) {
      gameWon();
    }
  }


/**
 * alert when the game is lost
 */
function gameOver() {
    // ????? HOW NOT CALL UNTIL GALLOWS, SCORE-AREA ETC UPDATED ??????
    alert("GAME OVER@@@!!");
}

/**
 * alert when the game is won
 */
function gameWon() {
  // ????? HOW NOT CALL UNTIL GALLOWS, SCORE-AREA ETC UPDATED ??????
  alert("GAME WON!!!!!!!!!!!");
}

function setUp(){
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

document.onload = setUp()