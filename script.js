console.log('Welcome WhollyCoder...');

// ***** Display Functions *****
function setInitialDisplayValue(){
  display.innerHTML = '0';
}
function getDisplayValue(){
  return display.innerHTML;
}
function setDisplayValue(displayValue){
  if(!characterMaxReached()){
    display.innerHTML = displayValue;
  }
}
function addToDisplayValue(displayValue){
  if(!characterMaxReached()){
    display.innerHTML += displayValue;
  }
}
function getDisplayCharacterCount(){
  var displayValue = display.innerHTML;
  console.log(displayValue.length);
}
function characterMaxReached(){
  var characterCount = getDisplayCharacterCount();
  if(characterCount > maxDisplayCharacters){
    return true;
  }else{
    return false;
  }
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function setCurrentOperation(operation){
  var currentOperation = operation;
}
function getCurrentOperation(){
  return currentOperation;
}

// ***** Button Functions *****
function getButtonValue(e){
  var buttonValue = e.target.innerHTML;
  return buttonValue;
}
function zeroButtonAction(){
  var displayValue = getDisplayValue();
      if(displayValue.length < maxDisplayCharacters){
    if(displayValue !== '0'){
      addToDisplayValue('0');
    }
  }
}
function decimalButtonAction(){
  var displayValue = getDisplayValue();
    if(displayValue.length < maxDisplayCharacters){
      if(!displayValue.includes(".")){
      addToDisplayValue('.');
    }
  }
}
function clearButtonAction(){
  setInitialDisplayValue();
}
function numberButtonAction(e){
  var buttonValue = getButtonValue(e);
  var displayValue = getDisplayValue();
  if(displayValue.length < maxDisplayCharacters){
    if(displayValue == '0'){
      display.innerHTML = buttonValue;
    }else{
      addToDisplayValue(buttonValue);
    }
  }
}
function oppositeButtonAction(){
  var displayValue = getDisplayValue();
  displayValue = parseFloat(displayValue) * -1;
  display.innerHTML = displayValue;
}
function percentButtonAction(){
  var displayValue = getDisplayValue();
  displayValue = parseFloat(displayValue) / 100;
  display.innerHTML = displayValue;
}
function addDisplayValueToArray(){
  var displayValue = getDisplayValue();
  numbers.push(displayValue);
}
// ***** Operation Button Functions *****
function additionButtonAction(e){
  var displayValue = getDisplayValue();
// When the addition button is clicked
//1) Save current displayed value to an array
addDisplayValueToArray();
//2) Set current operation
console.log(currentOperation);
currentOperation = e.target.name;
setCurrentOperation(currentOperation);
console.log(currentOperation);
console.log('Add Operation Button Clicked...');
setInitialDisplayValue();
}
function subtractionButtonAction(e){
  var displayValue = getDisplayValue();
// When the subtraction button is clicked
//1) Save current displayed value to an array
addDisplayValueToArray();
//2) Set current operation
console.log(currentOperation);
currentOperation = e.target.name;
setCurrentOperation(currentOperation);
console.log(currentOperation);
console.log('Sub Operation Button Clicked...');
setInitialDisplayValue();
}
function multiplicationButtonAction(e){
  var displayValue = getDisplayValue();
// When the multiplication button is clicked
//1) Save current displayed value to an array
addDisplayValueToArray();
//2) Set current operation
console.log(currentOperation);
currentOperation = e.target.name;
setCurrentOperation(currentOperation);
console.log(currentOperation);
console.log('Mult Operation Button Clicked...');
setInitialDisplayValue();
}
function divisionButtonAction(e){
  var displayValue = getDisplayValue();
// When the division button is clicked
//1) Save current displayed value to an array
addDisplayValueToArray();
//2) Set current operation
console.log(currentOperation);
currentOperation = e.target.name;
setCurrentOperation(currentOperation);
console.log(currentOperation);
console.log('Div Operation Button Clicked...');
setInitialDisplayValue();
}
function equalButtonAction(){
addDisplayValueToArray();
firstNumber = parseFloat(numbers[0]);
secondNumber = parseFloat(numbers[1]);
currentOperation = getCurrentOperation();
switch (currentOperation) {
  case 'addition':
    var result = firstNumber + secondNumber;
    setDisplayValue(result);
    numbers = [];
    break;
  case 'subtraction':
    var result = firstNumber - secondNumber;
    setDisplayValue(result);
    numbers = [];
    break;
  case 'multiplication':
    var result = firstNumber * secondNumber;
    setDisplayValue(result);
    numbers = [];
    break;
  case 'division':
    var result = firstNumber / secondNumber;
    setDisplayValue(result);
    numbers = [];
    break;
  default:

}
console.log('Equal Button Clicked...');
}
// ***** Variable Declarations *****
var firstNumber, secondNumber;
var numbers = [];
var currentOperation = 'none';
var maxDisplayCharacters  = 10;
var display               = document.getElementById('display');
var zeroButton            = document.getElementById('btn-zero');
var decimalButton         = document.getElementById('btn-decimal');
var equalButton           = document.getElementById('btn-equal');
var oneButton             = document.getElementById('btn-one');
var twoButton             = document.getElementById('btn-two');
var threeButton           = document.getElementById('btn-three');
var additionButton        = document.getElementById('btn-addition');
var fourButton            = document.getElementById('btn-four');
var fiveButton            = document.getElementById('btn-five');
var sixButton             = document.getElementById('btn-six');
var subtractionButton     = document.getElementById('btn-subtraction');
var sevenButton           = document.getElementById('btn-seven');
var eightButton           = document.getElementById('btn-eight');
var nineButton            = document.getElementById('btn-nine');
var multiplicationButton  = document.getElementById('btn-multiplication');
var clearButton           = document.getElementById('btn-clear');
var oppositeButton        = document.getElementById('btn-opposite');
var percentButton         = document.getElementById('btn-percent');
var divisionButton        = document.getElementById('btn-division');

// ***** Set Initial Display Value *****
setInitialDisplayValue();

// ***** Set Button Event Listeners *****
zeroButton.addEventListener('click', zeroButtonAction);
decimalButton.addEventListener('click', decimalButtonAction);
clearButton.addEventListener('click', clearButtonAction);
oneButton.addEventListener('click', numberButtonAction);
twoButton.addEventListener('click', numberButtonAction);
threeButton.addEventListener('click', numberButtonAction);
fourButton.addEventListener('click', numberButtonAction);
fiveButton.addEventListener('click', numberButtonAction);
sixButton.addEventListener('click', numberButtonAction);
sevenButton.addEventListener('click', numberButtonAction);
eightButton.addEventListener('click', numberButtonAction);
nineButton.addEventListener('click', numberButtonAction);
oppositeButton.addEventListener('click', oppositeButtonAction);
percentButton.addEventListener('click', percentButtonAction);

// ***** Set Button Event Listeners - OPERATIONS *****
additionButton.addEventListener('click', additionButtonAction);
subtractionButton.addEventListener('click', subtractionButtonAction);
multiplicationButton.addEventListener('click', multiplicationButtonAction);
divisionButton.addEventListener('click', divisionButtonAction);
equalButton.addEventListener('click', equalButtonAction);
