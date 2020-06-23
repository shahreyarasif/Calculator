function Getnumber(num){
    var result=document.getElementById('result');
    result.value +=num;
}


function clearrslt(){
    var result=document.getElementById("result");
    result.value="";

}

function getresult(){
    var result=document.getElementById("result");
   result.value=eval(result.value);

}
function backspace(){
 result.value = result.value.substr(0, result.value.length - 1) 
}
function ones(){
    var result=document.getElementById("result");
    result.value=eval(1/result.value);

   }
   function square(){
    var result=document.getElementById("result");
    result.value=eval(result.value*result.value);

   }
   function squareroot(){
    var result=document.getElementById("result");
    result.value=eval(Math.sqrt(result.value));

   }
   function percentage(){
    var result=document.getElementById("result");
    result.value=eval((result.value/num)*100);


   }