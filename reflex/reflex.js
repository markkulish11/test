var startTime = new Date();
var endTime = new Date();
var startPressed = false;
var bgChangeStarted = false;
var maxWait = 20;
var timerID;

function startTest() {
    document.body.style.background = document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
    bgChangeStarted = true;
    startTime = new Date();
}

function remark(responseTime) {
    var responseString = "";
    if (responseTime <= 0.2)
        responseString = "Well Done!";
    if (responseTime <= 0.3 && responseTime > 0.2)
        responseString = "Nice!";
    if (responseTime <= 0.5 && responseTime > 0.3)
        responseString = "Not Bad!";
    if (responseTime <= 0.75 && responseTime > 0.5)
        responseString = "Could be Better...";
    if (responseTime <= 1 && responseTime > 0.75)
        responseString = "Keep practicing!";
    if (responseTime >= 1)
        responseString = "Were you asleep?";
    return responseString;
}

function stopTest() {
    if (bgChangeStarted) {
        endTime = new Date();
        var responseTime = (endTime.getTime() - startTime.getTime()) / 1000;
        document.body.style.background = "white";
        alert("Your response time: " + responseTime + " sec " + "\n" + remark(responseTime));
        startPressed = false;
        bgChangeStarted = false;
    }
    else {
        if (!startPressed) {
            alert("Press start 1st to start the test");
        }
        else {
            clearTimeout(timerID);
            startPressed = false;
            alert("Cheater! You pressed too early!");
        }
    }
}

var randMultiplier = 0x015a4e35;
var randIncrement = 1;
var today = new Date();
var randSeed = today.getSeconds();
function randNumber() {
    randSeed = (randMultiplier * randSeed + randIncrement) % (1 << 31);
    return((randSeed >> 15) & 0x7fff) / 32767;
}

function startIt() {
    if (startPressed) {
        alert("Already started. Press stop to stop");
        return;
    }
    else {
        startPressed = true;
        timerID = setTimeout("startTest()", 6000 * randNumber());
    }
}