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
                    id = ${c}>` + c +
                `</button>`;
    }
    document.getElementById('keyboard-area').innerHTML = html;
}

createKeyboard();