var operator="";
var answer;
var b0=document.getElementById("btn0");
var b1=document.getElementById("btn1");
var bCtl=document.getElementById("btnClr");
var bEql=document.getElementById("btnEql");
var bSum=document.getElementById("btnSum");
var bSub=document.getElementById("btnSub");
var bMul=document.getElementById("btnMul");
var bDiv=document.getElementById("btnDiv");
function displayoperator(e){
    var button=e.target;
   operator=operator+button.innerHTML
document.getElementById("res").insertAdjacentHTML('beforeend', button.innerHTML);
}
function displayoperand(e){
    var button=e.target;
   
document.getElementById("res").insertAdjacentHTML('beforeend', button.innerHTML);
}
b0.onclick=displayoperand;
b1.onclick=displayoperand;
bSum.onclick=displayoperator;
bSub.onclick=displayoperator;
bMul.onclick=displayoperator;
bDiv.onclick=displayoperator;

bCtl.onclick=function(){
    document.getElementById('res').innerHTML = "";
    operator="";
}
bEql.onclick=function(){
    var exp=document.getElementById('res').innerHTML.split(operator);
    
   switch(operator){
       case '+':
           answer=parseInt(exp[0],2)+parseInt(exp[1],2);
           answer=answer.toString(2);
           break;
       case '-':
           answer=parseInt(exp[0],2)-parseInt(exp[1],2);
           answer=answer.toString(2);
           break;
       case '*':
           answer=parseInt(exp[0],2)*parseInt(exp[1],2);
           answer=answer.toString(2);
           break;
       case '/':
           answer=Math.floor(parseInt(exp[0],2)/parseInt(exp[1],2));
           answer=answer.toString(2);
           break;           
   }
    document.getElementById('res').innerHTML=answer;
}
