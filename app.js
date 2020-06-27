 
 
 function btn( num){
var a=document.getElementById("in");
a.value+=num;



 }
 function clearall(){
     var b=document.getElementById("in");
     b.value ="";
 }
     
 function result(){
    var b=document.getElementById("in");
    b.value=eval(b.value);
    return b.value;
 }