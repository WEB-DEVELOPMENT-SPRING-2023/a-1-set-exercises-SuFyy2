

document.getElementById("strt").onclick = function randomNumber(){
    var ans= document.getElementById("square2");
    var r = Math.floor(Math.random()*255)+0;
    var g = Math.floor(Math.random()*255)+0;
    var b = Math.floor(Math.random()*255)+0;
    var quest="rgb"+"("+ r +", "+ g+", "+ b+")";
document.getElementById("RGB").innerHTML = quest;
 ans.style.backgroundColor=quest;
    var a= document.getElementById("square1");
    var b= document.getElementById("square2");
    var c= document.getElementById("square3");
    var message1="Correct!";
    var message2="Wrong!";
    if(onclick="square2"){
    document.getElementById("msg").innerHTML=message1;};
    var lives=5
    document.getElementById("turns").innerHTML=lives;
    
}
