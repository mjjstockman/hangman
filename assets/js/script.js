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
    document.getElementById('keyboard-area').innerHTML = html; 
}

createKeyboard();
updateGallows();

/**
 * choose a random word from the words array
 */
 function chooseWord() {
    let words = [
        "PANCAKE",
        "CURRY"
    ];

    word = words[Math.floor(Math.random() * words.length)].toUpperCase();  
}

chooseWord();

let answerArray = [];

/**
 * display the random word in the word-area as underscores for each letter
 */
 function createAnswerArray() {
    let wordLength = word.length;
    for (let i = 0; i < wordLength; i++ ) {
      answerArray[i] = ("_ ");
    }
    document.getElementById('word-area').innerHTML = answerArray.join("");
}

createAnswerArray();

/**
 * if keydown is an ASCII letter convert it to a string and add it to the keyed-guess area.
 * if it's the enter button call checkEmptyKeyGuess
 * @param {*} event 
 */
 document.onkeydown = function(event) {
   let submitBtn = document.getElementById("submit-btn");
    let keyCode = event.keyCode;
    let isFocused = (document.activeElement === submitBtn);
    if (keyCode > 64 && keyCode < 91) {
        let keyPress = String.fromCharCode(event.keyCode);
        document.getElementById("keyed-guess").innerHTML = keyPress;
        clearMessage();
    }
    // check submit-btn is not focused so enter key doesn't call checkEmptyGuess twice
    if (keyCode === 13 && isFocused === false) {
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
    if (keyedGuess == "") {
      document.getElementById("message-area").innerHTML = "No letter!!";
    } else {
      checkDuplicate(keyedGuess);
    }
}

/**
 * increment guesses made and add the guessed letter to the word if it is in it 
 * @param {*} id 
 */
function checkGuess(id) {
    updateGuessedLetters(id);
    incrementGuesses();
    let newMatches = 0;
    for (let i = 0; i < word.length; i++) {
        if (id == word[i]) {
            answerArray[i] = id;
            document.getElementById("word-area").innerHTML = answerArray.join(" ");
            incrementLettersFound();
            newMatches++;
        }     
    }
    if (newMatches === 0) {
        incrementWrongGuesses();
        updateGallows();
    }
}

/**
 * clear the enter guess area 
 */
 function clearKeyGuess() {
  document.getElementById("keyed-guess").innerHTML = "";
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
        document.getElementById("guessed-letters").innerHTML = guessedLetters.join(" ");
    }
  }

function checkDuplicate(id) {
  clearMessage();
  clearKeyGuess();
  if (guessedLetters.includes(id)) {
    document.getElementById("message-area").innerHTML = `${id} has already been chosen`;
  } else {
    checkGuess(id);
  }
}

function clearMessage() {
  document.getElementById("message-area").innerHTML = "";
}



/**
 * update gallows img using incorrectAnswers var
 */
function updateGallows() {
    let gallows_img = document.getElementById("gallows-img");
    let incorrectAnswers = document.getElementById("wrong-guesses").innerText;
    gallows_img.src = `/assets/images/gallows${incorrectAnswers}.jpg`;
    gallows_img.alt = `Hand-drawn gallows with the first ${incorrectAnswers} out of 10 parts`;
  }

  

/**
 * add 1 to the number of guesses in guesses-made on each guess
 */
  function incrementGuesses() {
      let oldGuesses = parseInt(document.getElementById("guesses").innerHTML);
      document.getElementById("guesses").innerHTML = ++oldGuesses;
  }

  /**
   * add 1 to the number of guesses in wrong-guesses on each wrong guess
   */
  function incrementWrongGuesses() {
    let oldWrongGuesses = parseInt(document.getElementById("wrong-guesses").innerHTML);
    document.getElementById("wrong-guesses").innerHTML = ++oldWrongGuesses;
    if (oldWrongGuesses == 10) {
      gameOver();
    }
}

 /**
   * add 1 to the number of letters-found with each guessed letter
   */
  function incrementLettersFound() {
    let oldLettersFound = parseInt(document.getElementById("letters-found").innerHTML);
    document.getElementById("letters-found").innerHTML = ++oldLettersFound;
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