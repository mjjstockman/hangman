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
                    onclick="btnClicked(id)">` + c +
                `</button>`;
    }
    document.getElementById('keyboard-area').innerHTML = html;
}

createKeyboard();

/**
 * called when keyboard btn clicked
 * @param {} id 
 */
function btnClicked(id) {
    alert(`${id} button clicked`);
}


/**
 * choose a random word from the words array
 */
function chooseWord() {
    let words = [
        "PANCAKE",
        "CURRY"
    ];

    word = words[Math.floor(Math.random() * words.length)].toUpperCase();  
    alert(word);
}

chooseWord();

/**
 * display the random word in the word-area as underscores for each letter
 */
 function createAnswerArray() {
    let answerArray = [];
    let wordLength = word.length;
    for (let i = 0; i < wordLength; i++ ) {
      answerArray[i] = ("_ ");
    }
    document.getElementById('word-area').innerHTML = answerArray.join("");
}

createAnswerArray();