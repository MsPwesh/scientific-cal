// // Get the input screen element
// const screen = document.getElementById("screen");

// // Function to clear the input screen
// function clearScreen() {
//   screen.value = "";
// }

// // Function to evaluate the expression and update the screen
// function calculate() {
//   try {
//     const result = eval(screen.value);
//     screen.value = result;
//   } catch (error) {
//     screen.value = "Error";
//   }
// }

// // Function to append a value to the input screen
// function solve(value) {
//   screen.value += value;
// }

// // Function to calculate the factorial of a number
// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn')

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext=='x'){
          btntext='x';
        }

        if(btntext=='+'){
          btntext='/';
        }
        screen.value+=btntext;
    });
}

function sin(){
    screen.value=Math.sin(screen.value)
}

function tag(){
    screen.value=Math.tag(screen.value)
}

function cos(){
    screen.value=Math.cos(screen.value)
}

function pow(){
    screen.value=Math.pow(screen.value,2)
}

function sqrt(){
    screen.value=Math.sqrt(screen.value,2)
}

function log(){
    screen.value=Math.log(screen.value)
}

function pi(){
    screen.value= 3.14159265359;
}

function e(){
    screen.value= 2.71828182846;
}

function fact(){
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++){
        f=f*i;
    }
    i=i-1;

    screen.value=f;
}

function backspc(){
    screen.value= screen.value.substr(0,screen.value.length-1);
}
// // Function to evaluate special functions and update the screen
// function evaluateFunction(func) {
//   const funcName = func.slice(0, -1);
//   const value = screen.value;
//   let result;

//   if (funcName === "sin") {
//     result = Math.sin(value * (Math.PI / 180));
//   } else if (funcName === "cos") {
//     result = Math.cos(value * (Math.PI / 180));
//   } else if (funcName === "tan") {
//     result = Math.tan(value * (Math.PI / 180));
//   } else if (funcName === "log") {
//     result = Math.log10(value);
//   } else if (funcName === "root") {
//     result = Math.sqrt(value);
//   } else if (funcName === "x") {
//     result = factorial(value);
//   } else {
//     result = "Error";
//   }

//   screen.value = result;
// }

// Function to handle button clicks
// function handleClick(button) {
//   const value = button.textContent;

//   if (value === "AC") {
//     clearScreen();
//   } else if (value === "CE") {
//     screen.value = screen.value.slice(0, -1);
//   } else if (value === "=") {
//     calculate();
//   } else if (value === "sin" || value === "cos" || value === "tan" || value === "log" || value === "root" || value === "x!") {
//     evaluateFunction(value);
//   } else {
//     solve(value);
//   }
// }

// buttons.forEach(button => {
//   button.addEventListener("click", () => handleClick(button));
//   button.addEventListener("click", event => event.stopPropagation());
// });
