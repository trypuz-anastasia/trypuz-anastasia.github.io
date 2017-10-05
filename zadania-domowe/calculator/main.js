'use strict';

var display = document.getElementById('display');


function addToScreen(x) {
    if (x == 'c') {
        display.value = '';
    } else {
        display.value += x;
    }
}

function answer() {
    var answer = eval(display.value);
    display.value= answer;
}

function backspace() {
    var number = display.value;
    var len = number.length-1;
    var newNumber = number.substring(0, len);
    display.value = newNumber;
}