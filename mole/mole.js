document.addEventListener("DOMContentLoaded", function () {
    const holes = document.querySelectorAll(".hole");
    const startButton = document.getElementById("startButton");
    const endButton = document.getElementById("endButton");
    const scoreDisplay = document.getElementById("score");
    const timeDisplay = document.getElementById("time");

    let time;
    let score = 0;
    let countdown;
    let moleInterval;

    let gameOver = true;

    function comeout() {
        holes.forEach(hole => {
            hole.classList.remove("mole");
            hole.removeEventListener("click", handleMoleClick);
        });

        let random = holes[Math.floor(Math.random() * 9)];

        random.classList.add("mole");
        random.addEventListener("click", handleMoleClick);
    }

    function handleMoleClick() {
        if (!gameOver) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }
        this.classList.remove("mole");
    }

    function startGame() {
        if (!gameOver) {
            return;
        }

        gameOver = false;
        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        time = 60;
        timeDisplay.textContent = `Time: ${time}s`;

        startButton.disabled = true;
        endButton.disabled = false;

        countdown = setInterval(() => {
            time--;
            timeDisplay.textContent = `Time: ${time}s`;

            if (time <= 0) {
                clearInterval(countdown);
                gameOver = true;
                alert(`Game Over!\nYour final score: ${score}`);
                startButton.disabled = false;
                endButton.disabled = true;
            }
        }, 1000);

        moleInterval = setInterval(() => {
            if (!gameOver) comeout();
        }, 1000);
    }

    function endGame() {
        clearInterval(countdown);
        clearInterval(moleInterval);
        gameOver = true;
        alert(`Game Ended!\nYour Final Score: ${score}`);
        score = 0;
        time = 60;
        scoreDisplay.textContent = `Score: ${score}`;
        timeDisplay.textContent = `Time: ${time}s`;
        startButton.disabled = false;
        endButton.disabled = true;
    }

    startButton.addEventListener("click", startGame);
    endButton.addEventListener("click", endGame);
});