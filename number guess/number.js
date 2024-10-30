let y = Math.floor(Math.random() * 100 + 1);
let guess = 1;
document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;
    if (x == y) {
        alert("Congrats! You guessed it in " + guess + " guess(es)");
        location.reload();
    }
    else if (x > y) {
        guess++;
        alert("Oops sorry! Try a smaller number");
    }
    else {
        guess++
        alert("Oops sorry! Try a greater number");
    }
}