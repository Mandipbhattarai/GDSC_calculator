let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML === "=") {
            try {
                value.innerHTML = eval(value.innerHTML);
            } catch (error) {
                value.innerHTML = 'Error';
            }
        } else if (this.innerHTML === "C") {
            value.innerHTML = "";
        } else if (this.innerHTML === "√") {
            if (isValidInput(value.innerHTML) && eval(value.innerHTML) >= 0) {
                value.innerHTML = Math.sqrt(eval(value.innerHTML));
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "x²") {
            if (isValidInput(value.innerHTML)) {
                value.innerHTML = eval(value.innerHTML) ** 2;
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "sin") {
            if (isValidInput(value.innerHTML)) {
                value.innerHTML = Math.sin((Math.PI / 180) * eval(value.innerHTML));
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "cos") {
            if (isValidInput(value.innerHTML)) {
                value.innerHTML = Math.cos((Math.PI / 180) * eval(value.innerHTML));
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "tan") {
            if (isValidInput(value.innerHTML)) {
                value.innerHTML = Math.tan((Math.PI / 180) * eval(value.innerHTML));
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "log") {
            if (isValidInput(value.innerHTML) && eval(value.innerHTML) > 0) {
                value.innerHTML = Math.log10(eval(value.innerHTML));
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "ln") {
            if (isValidInput(value.innerHTML) && eval(value.innerHTML) > 0) {
                value.innerHTML = Math.log(eval(value.innerHTML));
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "e^x") {
            if (isValidInput(value.innerHTML)) {
                value.innerHTML = Math.exp(eval(value.innerHTML));
            } else {
                value.innerHTML = 'Invalid Input';
            }
        } else if (this.innerHTML === "π") {
            value.innerHTML += Math.PI;
        } else {
            value.innerHTML += this.innerHTML;
        }
    });
}

toggleBtn.onclick = function () {
    body.classList.toggle('dark');
}

function isValidInput(input) {
    return !isNaN(eval(input));
}
