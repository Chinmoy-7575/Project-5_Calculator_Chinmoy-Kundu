let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button")
let screenValue = "";
window.onerror = function () {
    alert("Please input valid expression");
}

for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "x"){
            buttonText = "*";
            screen.value += buttonText;
            screenValue = screen.value;
        }
        else if (buttonText == "="){
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else if (buttonText){
            screen.value += buttonText;
            screenValue = screen.value;
        }   
    })
}

document.addEventListener("keydown", (e) => {
    if (e.key == "+" ||
        e.key == "-" ||
        e.key == "*" ||
        e.key == "." ||
        e.key == "/" ||
        e.key == "%" ||
        e.key == "(" ||
        e.key == ")" ||
        e.key <= 9)
        screenValue += e.key;
        screen.value = screenValue;
})

