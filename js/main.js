let checkbox = document.getElementById('1');
let checkbox2 = document.getElementById('2');
let checkbox3 = document.getElementById('3');
let checkbox4 = document.getElementById('4');
let checkbox5 = document.getElementById('5');
let checkbox6 = document.getElementById('6');
let selecionado = document.getElementById('selecionado');
let selecionado2 = document.getElementById('selecionado2');
let selecionado3 = document.getElementById('selecionado3');
let selecionado4 = document.getElementById('selecionado4');
let selecionado5 = document.getElementById('selecionado5');
let selecionado6 = document.getElementById('selecionado6');
let unchecked = document.querySelectorAll('.form-check-label');

function checagem(){
  selecionado.addEventListener('click',(e)=>{
    e = e || window.event;
    let target = e.target
    target.classList.toggle('active');
    console.log(target);
    var checks = document.querySelectorAll(".form-check-input");
    var max = 3;
    for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
    var checkedChecks = document.querySelectorAll(".form-check-input:checked");
    if (checkedChecks.length >= max + 1){
      target.classList.remove('active');
      return false;  
    }
  }
});
}

function checagem2(){
  selecionado2.addEventListener('click',(e)=>{
    e = e || window.event;
    let target = e.target
    target.classList.toggle('active');

    console.log(target);
    var checks = document.querySelectorAll(".form-check-input");
    var max = 3;
    for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
    var checkedChecks = document.querySelectorAll(".form-check-input:checked");
    if (checkedChecks.length >= max + 1){
      target.classList.remove('active');
      return false;  
    }    
  }
});
}
function checagem3(){
  selecionado3.addEventListener('click',(e)=>{
    e = e || window.event;
    let target = e.target
    target.classList.toggle('active');

    console.log(target);
    var checks = document.querySelectorAll(".form-check-input");
    var max = 3;
    for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
    var checkedChecks = document.querySelectorAll(".form-check-input:checked");
    if (checkedChecks.length >= max + 1){
      target.classList.remove('active');
      return false;  
    }   
  }
    
});
}
function checagem4(){
  selecionado4.addEventListener('click',(e)=>{
    e = e || window.event;
    let target = e.target
    target.classList.toggle('active');
    
    
    console.log(target);
    var checks = document.querySelectorAll(".form-check-input");
    var max = 3;
    for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
    var checkedChecks = document.querySelectorAll(".form-check-input:checked");
    if (checkedChecks.length >= max + 1){
      target.classList.remove('active');
      return false;  
    }
      
  }
});
}
function checagem5(){
  selecionado5.addEventListener('click',(e)=>{
    e = e || window.event;
    let target = e.target
    target.classList.toggle('active');

    console.log(target);
    var checks = document.querySelectorAll(".form-check-input");
    var max = 3;
    for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
    var checkedChecks = document.querySelectorAll(".form-check-input:checked");
    if (checkedChecks.length >= max + 1){
      target.classList.remove('active');
      return false;  
    }
  }
});
}
function checagem6(){
  selecionado6.addEventListener('click',(e)=>{
    e = e || window.event;
    let target = e.target
    target.classList.toggle('active');

    console.log(target);
    var checks = document.querySelectorAll(".form-check-input");
    var max = 3;
    for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
    function selectiveCheck (event) {
    var checkedChecks = document.querySelectorAll(".form-check-input:checked");
    if (checkedChecks.length >= max + 1){
      target.classList.remove('active');
      return false;  
    }
  }
});
}
function checkboxTargets() {
  var checks = document.querySelectorAll(".form-check-input");
  var max = 3;
  for (var i = 0; i < checks.length; i++)
    checks[i].onclick = selectiveCheck;
  function selectiveCheck (event) {
    var checkedChecks = document.querySelectorAll(".form-check-input:checked");
    if (checkedChecks.length >= max + 1)
      return false; 
        
  }
}


function initApps(){
checagem();
checagem2();
checagem3();
checagem4();
checagem5();
checagem6();

checkboxTargets();
}

initApps();
