const primeiroN = document.querySelector("#primeiroNumero");
const segundoN = document.querySelector("#segundoNumero");
const tempo = document.querySelector(".T");
const body = document.querySelector(".body");
const pontos = document.querySelector(".P");
let Input = document.querySelector("#valorDaMultiplicacao");
let resetar = document.querySelector("input#resetar");
let result;
let i = 0;
let count = 0;
let minute = 60;
let mySetInterval = false;

function onKeyPress(key) {
  if(key === "i"){
    Input.removeAttribute("disabled");

    if(count == 0 && !mySetInterval) {
      const callBackInterval = () => {
        mySetInterval = true
        if (minute <= 60 && minute > 0) {
          let minuteOne = minute - 1;
          minute = minuteOne;
          tempo.innerText = `${minuteOne}`;
        }

        if(minute == 0){
          Input.setAttribute("disabled", "disabled");
          resetar.removeAttribute("hidden");
          mySetInterval = false
        }

        if(minute > 0){
          resetar.setAttribute("hidden", "hidden");
        }
      }
      mySetInterval = setInterval(callBackInterval, 1000);
      // clearInterval(mySetInterval)
    }
  }
}

function onClick() {
  i = 0;
  pontos.innerText = `${i}`;
  minute = 60;
  Input.removeAttribute("disabled");
}

function inputOnKeyPress(key) {
  if(key !== "Enter") return 
  if (minute == 0) {
    Input.setAttribute("disabled", "disabled");
    resetar.removeAttribute("hidden");
  }
  count = 1;
  let valorDoInput = parseInt(Input.value);

  if (result == valorDoInput) {
    i = i + 1;
    pontos.innerText = `${i}`;
  }
  const numero1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const numero2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  primeiroN.innerText = `${numero1}`;
  segundoN.innerText = `${numero2}`;
  result = numero1 * numero2;
  Input.innerHTML = "0";
  //console.log(result);
  document.getElementById('valorDaMultiplicacao').value=''
}

body.addEventListener("keypress", event => onKeyPress(event.key));
resetar.addEventListener("click", onClick);
Input.addEventListener("keypress", event => inputOnKeyPress(event.key));
