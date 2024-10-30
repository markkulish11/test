const rows = 5
const cols = 5
const max_num = 25

let currentPlayer = 1;
let p1Card, p2Card;

function createBingoCard() {
    const card = [];
    const usedNumbers = new Set();

    while (usedNumbers.size < rows * cols) {
        const num = Math.floor(Math.random() * max_num) + 1;
        if(!usedNumbers.has(num)) {
            usedNumbers.add(num);
        }
    }

    const numbersArray = Array.from(usedNumbers);
    for (let i = 0; i < rows; i++) {
        card.push(numbersArray.slice(i * cols, (i + 1) * cols));
    }

    return card;
}

function displayBingoCard(card, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.textContent = card[i][j];
            if (card[i][j] === "X") {
                cell.classList.add("marked");
            }
            container.appendChild(cell);
        }
    }
}

function markNumber(card, number) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (card[i][j] === number) {
                card[i][j] = "X";
                return true;
            }
        }
    }
    return false;
}

function checkWin(card) {
    for (let i = 0; i < rows; i++) {
        let rowFilled = true;
        let colFilled = true;
        for (let j = 0; j < cols; j++) {
            if (card[i][j] !== "X") {
                rowFilled = false;
            }
            if (card[j][i] !== "X") {
                colFilled = false;
            }
        }
        if (rowFilled || colFilled) {
            return true;
        }
    }

    let diagonal1Filled = true;
    let diagonal2Filled = true;
    for (let i = 0; i < rows; i++) {
        if (card[i][i] !== "X") {
            diagonal1Filled = false;
        }
        if (card[i][cols - 1 - i] !== "X") {
            diagonal2Filled = false;
        }
    }
    if (diagonal1Filled || diagonal2Filled) {
        return true;
    }
    return false;
}

document.getElementById("startButton").addEventListener("click", () => {
    p1Card = createBingoCard();
    p2Card = createBingoCard();
    displayBingoCard(p1Card, "p1Card");
    displayBingoCard(p2Card, "p2Card");
    document.getElementById("markButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    document.getElementById("resetButton").disabled = false;
    document.getElementById("numberInput").disabled = false;
    document.getElementById("turnDisplay").textContent = "Player 1 Turn";
});

document.getElementById("resetButton").addEventListener("click", () => {
    p1Card = createBingoCard();
    p2Card = createBingoCard();
    displayBingoCard(p1Card, "p1Card");
    displayBingoCard(p2Card, "p2Card");
    document.getElementById("numberInput").value = "";
    document.getElementById("markButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    document.getElementById("resetButton").disabled = false;
    document.getElementById("numberInput").disabled = false;
    document.getElementById("turnDisplay").textContent = "Player 1 Turn";
    document.getElementById("winDisplay").textContent = "";
});

document.getElementById("markButton").addEventListener("click", () => {
    const numberInput = document.getElementById("numberInput");
    const number = parseInt(numberInput.value);

    if (number >= 1 && number <= max_num) {
        if (markNumber(p1Card, number) && markNumber(p2Card, number)) {
            displayBingoCard(p1Card, "p1Card");
            displayBingoCard(p2Card, "p2Card");

            if (checkWin(p1Card)) {
                document.getElementById("winDisplay").textContent = "Player 1 Has Won!!"
                document.getElementById("markButton").disabled = true;
                document.getElementById("numberInput").disabled = true;
            } else if (checkWin(p2Card)) {
                document.getElementById("winDisplay").textContent = "Player 2 Has Won!!"
                document.getElementById("markButton").disabled = true;
                document.getElementById("numberInput").disabled = true;
            } else {
                numberInput.value = "";
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                document.getElementById("turnDisplay").textContent = `Player ${currentPlayer} Turn`;
            }
        } else {
            alert("Number already marked or not found on any player card.");
        }
    } else {
        alert("Please enter a valid number between 1 and 25")
    }
});