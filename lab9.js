//error class
class nofirstNumError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "Oops, no first Number input"; // (2)
    }
  }

window.onerror = function(message, source, lineno, colno, error) {
    // Log the error to TrackJS
    trackJs.error(error);
};
let output;
let firstNum;
let secondNum;
let operator;
let assert_reason = "cannot divide by 0";
let label = "group";
let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      output = document.querySelector('output');
      firstNum = document.querySelector('#first-num').value;
      secondNum = document.querySelector('#second-num').value;
      operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

document.getElementById('log').addEventListener('click', function(){
    console.log('output = ' + output);
})

document.getElementById('error').addEventListener('click', function(){
    try{
        randomelement;
        alert('no errors');
    }
    catch(err){
        alert('bad element');
        console.error("sorry can't do that");
    } finally{
        console.log("fix your code");
    }
})
document.getElementById('count').addEventListener('click', function(){
    console.count();
})
document.getElementById('warn').addEventListener('click', function(){
    console.warn('warning');
})
document.getElementById('assert').addEventListener('click', function(){
    console.assert(!(secondNum == 0 && operator == '/'), {secondNum, operator, assert_reason});
})
document.getElementById('clear').addEventListener('click', function(){
    console.clear();
})
document.getElementById('dir').addEventListener('click', function(){
    console.dir(document.head);
})
document.getElementById('dirxml').addEventListener('click', function(){
    console.dirxml(document);
})
document.getElementById('group-start').addEventListener('click', function(){
    console.group(label);
    console.info('firstNum' + firstNum);
    console.info('secondNum' + secondNum);
    console.info('operator' + operator);
    console.info('result' + output);
})
document.getElementById('group-end').addEventListener('click', function(){
    console.groupEnd(label);
})

document.getElementById('table').addEventListener('click', function(){
    let array = [
        firstNum,
        secondNum
    ];
    try{
        if(!firstNum){
            throw new nofirstNumError("incomplete data: no firstNum");
        }
    }
    catch(err){
        console.error("no first element");
    } finally{
        console.log("still printing array:");
    }
    console.table(array);
})
document.getElementById('start-timer').addEventListener('click', function(){
    console.time();
})
document.getElementById('end-timer').addEventListener('click', function(){
    console.timeEnd();
})
document.getElementById('trace').addEventListener('click', function(){
    console.trace();
})
document.getElementById('global-error').addEventListener('click', function(){
    ooffunction();
    throw new Error("Error");
})
