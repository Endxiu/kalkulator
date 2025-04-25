

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
let answer = []
function ifMathSymbolClicked() {
    if(!Stringcalculations[i] == " "){
        i++;
    }
};

function ifEqualSymbolClicked() {
    for(let i = 0; i < 9; i++){
        //console.log(eval(Stringcalculations.join("")));
        i++;
    }
    answer = eval(Stringcalculations.join(""));
    }

function ifClearSymbolClicked() {
    Stringcalculations = ["","","","","","","","",""];
    answer = [];
    i = 0;
    SolvingArea.value = "";
    //console.log(Stringcalculations);
    //console.log(answer);
    //console.log(i);
}

//Showing numbers in TextArea functions
ButtonNum1.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum2.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum3.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum4.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum5.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum6.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum7.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum8.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum9.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
    });
ButtonNum0.addEventListener("click" , (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
    //console.log(Stringcalculations);
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
    Stringcalculations[i] += "*";
    ifMathSymbolClicked();
    });
ButtonDivision.addEventListener("click" , (e) => {
    SolvingArea.value += " " + e.target.innerText + " ";
    ifMathSymbolClicked();
    Stringcalculations[i] += "/";
    ifMathSymbolClicked();
    });
ButtonEqual.addEventListener("click" , (e) => {
    SolvingArea.value += " " + e.target.innerText;
    ifEqualSymbolClicked();
    SolvingArea.value += " " + answer;
    });
ButtonDot.addEventListener("click", (e) => {
    SolvingArea.value += e.target.innerText;
    Stringcalculations[i] += e.target.innerText;
})
ButtonClear.addEventListener("click", (e) => {
    ifClearSymbolClicked();
})