

//number elements
let ButtonNum1 = document.getElementById("BtnNum1");
let ButtonNum2 = document.getElementById("BtnNum2");
let ButtonNum3 = document.getElementById("BtnNum3");
let ButtonNum4 = document.getElementById("BtnNum4");
let ButtonNum5 = document.getElementById("BtnNum5");
let ButtonNum6 = document.getElementById("BtnNum6");
let ButtonNum7 = document.getElementById("BtnNum7");
let ButtonNum8 = document.getElementById("BtnNum8");
let ButtonNum9 = document.getElementById("BtnNum9");
let ButtonNum0 = document.getElementById("BtnNum0");
//math symbols elements
let ButtonPlus = document.getElementById("BtnPlus");
let ButtonMinus = document.getElementById("BtnMinus");
let ButtonMulti = document.getElementById("BtnMulti");
let ButtonDivision = document.getElementById("BtnDivis");
let ButtonEqual = document.getElementById("BtnEqual");
//converting and other action elements
let ButtonBinary = document.getElementById("BtnBin");
let ButtonDecimal = document.getElementById("BtnDec");
let ButtonHeart = document.getElementById("BtnHeart");
let ButtonDot = document.getElementById("BtnDot");
let ButtonClear = document.getElementById("BtnC");
let SolvingArea = document.getElementById("SolvArea");

let i = 0;
let Stringcalculations = ["","","","","","","","",""];
let Numbercalculations = [];
length = Stringcalculations.length;
let answer;


function ifMathSymbolClicked() {
    if(!Stringcalculations[i] == " "){
        i++;
    }
};

function ifEqualSymbolClicked() {
    for(let i = 0; i <length; i++){
        Numbercalculations.push(parseInt(Stringcalculations[i]));
    }
    console.log(Numbercalculations);
    for(let i = 0; i < 9; i++){
        if(Stringcalculations[i] == "+"){
            answer += Numbercalculations[i - 1] + Numbercalculations[i + 1];
        }
        if(Stringcalculations[i] == "-"){
            answer += Numbercalculations[i - 1] - Numbercalculations[i + 1];
        }
        if(Stringcalculations[i] == "x"){
            answer += Numbercalculations[i - 1] * Numbercalculations[i + 1];
        }
        if(Stringcalculations[i] == "÷"){
            answer += Numbercalculations[i - 1] / Numbercalculations[i + 1];
        }
    }
    }

//Showing numbers in TextArea functions
ButtonNum1.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum2.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum3.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum4.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum5.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum6.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum7.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum8.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum9.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
ButtonNum0.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    console.log(Numbercalculations);
    });
//math symbols in TextArea functions
ButtonPlus.addEventListener("click" , (e) => {
    SolvingArea.value += " " + e.target.innerText + " ";
    ifMathSymbolClicked();
    Stringcalculations[i] += e.target.innerText;
    ifMathSymbolClicked();
    });
ButtonMinus.addEventListener("click" , (e) => {
    SolvingArea.value += " " + e.target.innerText + " ";
    ifMathSymbolClicked();
    Stringcalculations[i] += e.target.innerText;
    ifMathSymbolClicked();
    });
ButtonMulti.addEventListener("click" , (e) => {
    SolvingArea.value += " " + e.target.innerText + " ";
    ifMathSymbolClicked();
    Stringcalculations[i] += e.target.innerText;
    ifMathSymbolClicked();
    });
ButtonDivision.addEventListener("click" , (e) => {
    SolvingArea.value += " " + e.target.innerText + " ";
    ifMathSymbolClicked();
    Stringcalculations[i] += e.target.innerText;
    ifMathSymbolClicked();
    });
ButtonEqual.addEventListener("click" , (e) => {
    SolvingArea.value += " " + e.target.innerText;
    ifEqualSymbolClicked();
    SolvingArea.value += " " + answer;
    });