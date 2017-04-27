console.log('Welcome WhollyCoder...');
// ***** Display Functions *****
function setInitialDisplayValue(){
  display.innerHTML = '0';
}
function getDisplayValue(){
  return display.innerHTML;
}
function setDisplayValue(displayValue){
  display.innerHTML = displayValue;
}

// ***** Button Functions *****
function getButtonValue(e){
  var buttonValue = e.target.innerHTML;
  return buttonValue;
}
function zeroButtonAction(){
  var displayValue = getDisplayValue();
  if(displayValue !== '0'){
    display.innerHTML += '0';
  }
}
function decimalButtonAction(){
  var displayValue = getDisplayValue();
    if(!displayValue.includes(".")){
    display.innerHTML += '.';
  }
}
function clearButtonAction(){
  setInitialDisplayValue();
}
function numberButtonAction(e){
  var buttonValue = getButtonValue(e);
  var displayValue = getDisplayValue();
  if(displayValue == '0'){
    display.innerHTML = buttonValue;
  }else{
    display.innerHTML += buttonValue;
  }
}

// ***** Variable Declarations *****
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
