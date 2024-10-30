const words = ["ronaldo", "messi", "neymar", "shevchenko", "lampard", "drogba", "kimmich", "haaland", "mbappe", "donnarumma", "fabregas", "zidane", "cantona", "ginola", "modric", "benzema", "bale", "kroos", "reus", "ramos", "xavi", "iniesta", "isco", "pepe", "ronaldinho", "cruyff", "pele", "puskas", "bican"];

let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);

let guessedlist = [];

let displayWord = "";
for (let i = 0; i < selectedWord.length; i++) {
    displayWord += "_ ";
}
document.getElementById("displayWord").textContent = displayWord;

function guessLetter() {
    let inputElement = document.getElementById("letter-input");
    if (!inputElement.value) {
        alert("Empty Input box. Please add input letter");
        return;
    }

    let letter = inputElement.value.toLowerCase();

    inputElement.value = "";

    if (guessedlist.includes(letter)) {
        alert("You have already guessed that letter!");
        return;
    }

    guessedlist.push(letter);

    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedlist.includes(selectedWord[i])) {
            updatedDisplay += selectedWord[i] + " ";
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
    }
    document.getElementById("displayWord").textContent = updatedDisplay;
    if (allLettersGuessed) {
        alert("Congratulations! You guessed the word correctly!");
    }
}