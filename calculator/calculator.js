const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function performOperation(operation) {
    if (operation === 'sqrt') {
        display.value = Math.sqrt(parseFloat(display.value)).toString();
    } else if (operation === 'cbrt') {
        display.value = Math.cbrt(parseFloat(display.value)).toString();
    }
}

function calculate() {
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}