let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML === "=") {
            try {
                value.value = eval(value.value);
            } catch (error) {
                value.value = 'Error';
            }
        } else if (this.innerHTML === "Clear") {
            value.value = "";
        } else if (this.innerHTML === "√") {
            if (isValidInput(value.value) && eval(value.value) >= 0) {
                value.value = Math.sqrt(eval(value.value));
            } else {
                value.value = 'Invalid Input';
            }
        } else if (this.innerHTML === "x²") {
            if (isValidInput(value.value)) {
                value.value = eval(value.value) ** 2;
            } else {
                value.value = 'Invalid Input';
            }
        } else if (this.innerHTML === "sin") {
            if (isValidInput(value.value)) {
                value.value = Math.sin((Math.PI / 180) * eval(value.value));
            } else {
                value.value = 'Invalid Input';
            }
        } else if (this.innerHTML === "cos") {
            if (isValidInput(value.value)) {
                value.value = Math.cos((Math.PI / 180) * eval(value.value));
            } else {
                value.value = 'Invalid Input';
            }
        } else if (this.innerHTML === "tan") {
            if (isValidInput(value.value)) {
                value.value = Math.tan((Math.PI / 180) * eval(value.value));
            } else {
                value.value = 'Invalid Input';
            }
        } else if (this.innerHTML === "log") {
            if (isValidInput(value.value) && eval(value.value) > 0) {
                value.value = Math.log10(eval(value.value));
            } else {
                value.value = 'Invalid Input';
            }
        } else if (this.innerHTML === "ln") {
            if (isValidInput(value.value) && eval(value.value) > 0) {
                value.value = Math.log(eval(value.value));
            } else {
                value.value = 'Invalid Input';
            }
        } else {
            value.value += this.innerHTML;
        }
    });
}

document.addEventListener("keypress",(e)=>{
    if(e.key=='Enter')
        value.value = eval(value.value);
})

toggleBtn.onclick = function () {
    body.classList.toggle('dark');
}

function isValidInput(input) {
    return !isNaN(eval(input));
}
