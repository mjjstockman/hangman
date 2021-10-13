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
                    onclick="checkGuess(id)">` + c +
                `</button>`;
    }
    document.getElementById('keyboard-area').innerHTML = html; 
}

/**
 * add the guessed letter to the word if it is in it
 * @param {*} id 
 */
function checkGuess(id) {
    for (let i = 0; i < word.length; i++) {
        console.log
        if (id == word[i]) {
            answerArray[i] = id;
            document.getElementById("word-area").innerHTML = answerArray.join(" ");
        }
    }

}

/**
 * get users keyed value and pass it to checkGuess()
 */
function getKeyedValue() {
    let keyedValue = document.getElementById("keyed-guess").innerHTML;
    checkGuess(keyedValue);
}

createKeyboard();

/**
 * called when keyboard btn clicked
 * @param {} id 
 */
// function btnClicked(id) {
//     alert(`${id} button clicked`);
// }


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

document.onkeydown = function(event) {
    let keyCode = event.keyCode;
    if (keyCode > 64 && keyCode < 91) {
        let keyPress = String.fromCharCode(event.keyCode);
      document.getElementById("keyed-guess").innerHTML = keyPress;
    }
    if (keyCode === 13) {
        checkEmptyKeyGuess();
    }
  }

  function checkEmptyKeyGuess() {
      if (keyedGuess = document.getElementById("keyed-guess").innerHTML== "") {
        alert("no letter");
      }
  }
