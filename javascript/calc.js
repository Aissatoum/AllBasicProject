var no1=0;
var no2=0;
 var op;
 var num1 = document.getElementById('number').value;
function call1(){
 document.getElementById("number").value += 1;
} 
function call2(){
 document.getElementById("number").value += 2;
} 
function call3(){
 document.getElementById("number").value += 3;
} 
function call4(){
 document.getElementById("number").value += 4;
} 
function call5(){
 document.getElementById("number").value += 5;
} 
function call6(){
 document.getElementById("number").value += 6;
} 
function call7(){
 document.getElementById("number").value += 7;
} 
function call8(){
 document.getElementById("number").value += 8;
} 
function call9(){
 document.getElementById("number").value += 9;
} 
function calldot(){
 document.getElementById("number").value +='.';
} 
function call0(){
 document.getElementById("number").value += 0;
} 
function callequal(){
    getno2();
    switch(op){
        case '+': document.getElementById("number").value = parseInt(no1)+ parseInt(no2);
        break;
        case '-': document.getElementById("number").value = parseInt(no1)- parseInt(no2);
        break;
        case '*': document.getElementById("number").value = parseInt(no1) * parseInt(no2);
        break;
        case '/': document.getElementById("number").value = parseInt(no1)/ parseInt(no2);
        break;
    }
}
function getno1(){
  no1 = document.getElementById("number").value;
//    alert(no1);
}
function getno2(){
 var no = document.getElementById("number").value;
  no2 = no.substring(no1.length + 1);
//   alert(no2);
}

// adding 2 numbers

function add(num1, num2){
  getno1();
 document.getElementById("number").value +='+';
 op = '+';
}


// subtracting 2 numbers
function subtract(num1, num2){
 getno1();
 document.getElementById("number").value +='-';
 op = '-';

}


// multiply 2 numbers
function multiply(num1, num2){
 getno1();
 document.getElementById("number").value +='*';
 op = '*';

}


// dividing 2 numbers
function divide(num1, num2){
 getno1();
 document.getElementById("number").value +='/';
 op = '/';

}
function modulo(num1, num2){
 document.getElementById("number").value +='%';

}