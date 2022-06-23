document.getElementById('clr').addEventListener('click', testClear);
document.getElementById('del').addEventListener('click', testDelete);
document.getElementById('log').addEventListener('click', testLog);
document.getElementById('plus').addEventListener('click', testPlus);
document.getElementById('seven').addEventListener('click', testSeven);
document.getElementById('eight').addEventListener('click', testEight);
document.getElementById('nine').addEventListener('click', testNine);
document.getElementById('mul').addEventListener('click', testMultiply);
document.getElementById('four').addEventListener('click', testFour);
document.getElementById('five').addEventListener('click', testFive);
document.getElementById('six').addEventListener('click', testSix);
document.getElementById('minus').addEventListener('click', testMinus);
document.getElementById('one').addEventListener('click', testOne);
document.getElementById('two').addEventListener('click', testTwo);
document.getElementById('three').addEventListener('click', testThree);
document.getElementById('divide').addEventListener('click', testDivide);
document.getElementById('zero').addEventListener('click', testZero);
document.getElementById('dec').addEventListener('click', testDecimal);
document.getElementById('equal').addEventListener('click', testCalculate);

var textBox = document.getElementById("display-input");
var resultTextBox = document.getElementById("display-compiled");
var currentTextBoxValue= textBox.value;


function addInput(value){
       
       if (textBox.value===0) {
              textBox.value =value;  
              
       } else {
             
              textBox.value = textBox.value + value;
       }
       
} 
function addOperator(value) {
              
              var currentTextBoxValue = textBox.value;
              var currentTextValueLastCharacter = currentTextBoxValue.charAt(currentTextBoxValue.length-1);

              console.log(currentTextValueLastCharacter);
              console.log(!isNaN(currentTextBoxValue));


              if(!isNaN(currentTextValueLastCharacter) || currentTextValueLastCharacter == "."){
                     console.log("Just add");
                     textBox.value = currentTextBoxValue + value;
 
              }
              else if(currentTextValueLastCharacter != value ) {
                     console.log("Replace last character");
                     var newTextBoxValue = currentTextBoxValue.slice(0,-1);
                     console.log(newTextBoxValue);
                     currentTextBoxValue = newTextBoxValue + value;
                     console.log(currentTextBoxValue);
                     textBox.value = currentTextBoxValue;
              } 
       }
function stringOperatorToOperand() {
              var patternAdd = /!isNaN + !isNaN/g;
              if (patternAdd.test(currentTextBoxValue)) {
                    currentTextBoxValue = !isNaN +  !isNaN;
                    console.log(currentTextBoxValue);
              }
}       
              

function addDecimal(value) {
              var currentTextBoxValue = textBox.value;
              var patternDecimal = /!isNaN . !isNaN/g;
              var LastCharacterIsNumber= currentTextBoxValue.charAt(currentTextBoxValue.length -1);
              if (!isNaN(LastCharacterIsNumber)) {
                   textBox.value= currentTextBoxValue + value;
                   
                   
              }
              if (textBox.value.includes(".") ){
                    
                   
              }
              
              
              
}


function returnValueBox() {
      
       
       if (isNaN(currentTextBoxValue)) {
              
       }
       if( !isNaN(currentTextBoxValue)) {
              resultTextBox.value = eval(textBox.value);
       }
        
      
}



function testClear() {
              var clear = "";
               console.log(clear);
                      textBox.value = clear;
                      resultTextBox.value = clear;
       
}
function testDelete() {
               var del= textBox.value;
               var newDel= del.slice(0, -1);
                     textBox.value = newDel;
                     resultTextBox.value =newDel;
}
function testLog() {
              var log = textBox.value +  '^' ;
              textBox.value= log;
              resultTextBox.value = log;
}
function testDecimal() {
              addDecimal(".");
              
}
function testCalculate() {
              resultTextBox.value= "";
              textBox.value = eval(textBox.value);
             
             
             
              
}

//operator onclick
function testPlus() {
              addOperator ("+");
              returnValueBox();
              stringOperatorToOperand();
              
             

              

}
function testMinus() {
              addOperator("-");
              returnValueBox();
              
}
function testMultiply() {
              addOperator("*");
              returnValueBox();
       }
 
 function testDivide() {
              addOperator("/");
              returnValueBox();
}



//Number onclick
function testZero() {
              addInput("0");
              returnValueBox();
}


function testOne() {
              addInput("1");
              returnValueBox();
}
function testTwo() {
              addInput("2");
              returnValueBox();
}
function testThree() {
              addInput("3");
              returnValueBox();
}
function testFour() {
              addInput("4")
              returnValueBox();
}
function testFive() {
              addInput("5");
              returnValueBox();
}
function testSix() {
              addInput("6");
              returnValueBox();
}
function testSeven() {
              addInput('7');
              returnValueBox();

}
function testEight() {
              addInput('8');
              returnValueBox();
}
function testNine() {
              addInput("9");
              returnValueBox();
}


