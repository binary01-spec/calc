//I really wanna cry right now i got headache...

//calculations
var storage="";
var result=document.querySelector(".result");

function Primary_keys(elem){
    storage+=elem.innerHTML;
    result.innerHTML=storage;
}
function answer(){
    try{

   
    if(storage=="")return
    else{
    var decoded =storage.replace(/x/gi,"*");
    result.innerHTML=eval(decoded);
    storage=""; 
    }
}
catch{
    result.innerHTML="Syntax Error"
}
}


function deleting(){
   storage = storage.slice(0,-1);
   result.innerHTML=storage;
 

}
function reset(){
    
storage="";
result.innerHTML=storage;
}



//THEMES here 

var r = document.querySelector(':root');

function theme1(){
    /* #### Backgrounds */
    r.style.setProperty("--Very-dark-desaturated-blue-1", "hsl(222, 26%, 31%)" );
    r.style.setProperty("--Very-dark-desaturated-blue-2","hsl(223, 31%, 20%)");
    r.style.setProperty("--Very-dark-desaturated-blue-3","hsl(224, 36%, 15%)");

/* #### Keys */

    r.style.setProperty("--Desaturated-dark-blue-1","hsl(225, 21%, 49%)");
    r.style.setProperty("--Desaturated-dark-blue-2","hsl(224, 28%, 35%)");

    r.style.setProperty("--Red","hsl(6, 63%, 50%)")
    r.style.setProperty("--Dark-red","hsl(6, 70%, 34%)")

    r.style.setProperty("--Light-grayish-orange","hsl(30, 25%, 89%)")
    r.style.setProperty("--Grayish-orange","hsl(28, 16%, 65%)")
    
    /* #### Text */


    r.style.setProperty("--Very-dark-grayish-blue","hsl(221, 14%, 31%)")
    r.style.setProperty("--Def-white","white")
}



function theme2(){
     /* #### Backgrounds */
     r.style.setProperty("--Very-dark-desaturated-blue-1", "var(--Light-gray)" );
     r.style.setProperty("--Very-dark-desaturated-blue-2","var(--Grayish-red)");
     r.style.setProperty("--Very-dark-desaturated-blue-3","var(--Very-light-gray)");
 
 /* #### Keys */
 
     r.style.setProperty("--Desaturated-dark-blue-1","var(--Dark-moderate-cyan)");
     r.style.setProperty("--Desaturated-dark-blue-2","var(--Very-dark-cyan)");
 
     r.style.setProperty("--Red","var(--Orange)")
     r.style.setProperty("--Dark-red","var(--Dark-orange)")
 
     r.style.setProperty("--Light-grayish-orange","var(--Light-grayish-yellow)")
     r.style.setProperty("--Grayish-orange","var(--Dark-grayish-orange)")
     r.style.setProperty("--Equal_btn","white")
     
     /* #### Text */
 
 
     r.style.setProperty("--Very-dark-grayish-blue","var(--Very-dark-grayish-yellow)")
     r.style.setProperty("--Def-white","var(--Very-dark-grayish-yellow)")
     
}




function theme3(){
    /* #### Backgrounds */
    r.style.setProperty("--Very-dark-desaturated-blue-1", "hsl(268, 75%, 9%)" );
    r.style.setProperty("--Very-dark-desaturated-blue-2","hsl(268, 71%, 12%)");
    r.style.setProperty("--Very-dark-desaturated-blue-3","hsl(268, 71%, 12%)");

/* #### Keys */

    r.style.setProperty("--Desaturated-dark-blue-1","hsl(281, 89%, 26%)");
    r.style.setProperty("--Desaturated-dark-blue-2","hsl(285, 91%, 52%)");

    r.style.setProperty("--Red","hsl(176, 100%, 44%)")
    r.style.setProperty("--Dark-red","hsl(177, 92%, 70%)")

    r.style.setProperty("--Light-grayish-orange","hsl(268, 47%, 21%)")
    r.style.setProperty("--Grayish-orange","hsl(290, 70%, 36%")
    r.style.setProperty("--Equal_btn","black")
    
    /* #### Text */


    r.style.setProperty("--Very-dark-grayish-blue","hsl(52, 100%, 62%)")
    r.style.setProperty("--Def-white","hsl(52, 100%, 62%)")
}


 var slider=document.querySelector(".slider")








slider.oninput=function(){
    if(this.value=="1"){
        theme1();
    } else if(this.value=="2"){
        theme2();
    }else if(this.value=="3"){
        theme3();
    }
}
// happy coding by binary01-spec