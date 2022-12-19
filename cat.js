// set the clock //

var hrs=document.getElementById("hours");
var min=document.getElementById("min");
var sec=document.getElementById("sec");
var ses=document.getElementById("ses");


function Clock_time(){
   
var time=new Date();
hrs.innerHTML=time.getHours();
min.innerHTML=time.getMinutes();
sec.innerHTML=time.getSeconds();

if(hrs.innerHTML<12){
    ses.innerHTML='AM';
}else{
ses.innerHTML='PM';
}

if(hrs.innerHTML>12){
    hrs.innerHTML=hrs.innerHTML-12;
}


}

setInterval(Clock_time,1000);

//////////////////////////////////////////////////////////////////////
// set party btn /*

var party=document.getElementById("PARTY");
var img=document.getElementById("img");
var remark=document.querySelector(".remark");

var party_time=[{img:"https://i.pinimg.com/originals/24/68/bc/2468bccfa45b19593d7225b0be04b89c.jpg",remark:"Good Morning",btn:"PARTY TIME !"},{img:"https://i.pinimg.com/originals/99/1e/a0/991ea0c00f38bb0aa66bd26ccfff5a65.jpg",remark:"Let's Dance ! ",btn:"Party Is Over"}];

var i=0;

party.onclick=function(){

    if(i==0){
        i++;
        clearInterval(waking_up);
        clearInterval(lunch_time);
        clearInterval(nap_time);
    
       
    }else{
     i--;
     
     setInterval(waking_up,1000);
     setInterval(lunch_time,1000);
     setInterval(nap_time,1000);
}

party.innerHTML=party_time[i].btn;
remark.innerHTML=party_time[i].remark;
img.src=party_time[i].img;


}



//////////////////////////////////////////////////////////////////////
// waking up //

var wake=document.getElementById("wake");

function waking_up(){

var time=new Date();
var hrs=time.getHours();

    if(hrs==wake.value){
img.setAttribute("src","https://i.pinimg.com/originals/24/68/bc/2468bccfa45b19593d7225b0be04b89c.jpg");
remark.innerHTML="GM";
}

}

setInterval(waking_up,1000);
///////////////////////////////////////////////////////////////////////
 // lunch time //

var lunch=document.getElementById("lunch");

function lunch_time(){

    var time=new Date();
var hrs=time.getHours();

  if(hrs==lunch.value){
    img.setAttribute("src","https://i.pinimg.com/originals/49/fa/66/49fa669001b6cca330541476c4200611.jpg");
    remark.innerHTML="Je3naa";
}
}
setInterval(lunch_time,1000);
//////////////////////////////////////////////////////////////////////////
// nap time //

var nap=document.getElementById("nap");

function nap_time(){
    var time=new Date();
    var hrs=time.getHours();
    
      if(hrs==nap.value){
    img.setAttribute("src","https://66.media.tumblr.com/e043d0fbdb6afd674f69d87733db7b71/tumblr_pz6bsjt8bQ1xgmz85o10_400.png");
    remark.innerHTML="have a sweet nap";
}
}
setInterval(nap_time,1000);
/////////////////////////////////////////////////////////////////////////