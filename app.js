
//var userWelcome = prompt("What's your name?");
//var welcome = alert("Welcome "+ userWelcome+ " ,let's learn JS!");
var text = document.querySelector("#demo");
var btn = document.querySelector("#btn-primary");
var demo = document.querySelector(".demo");

btn.addEventListener("click", function(){
    console.log("Clicked!!!");
    demo.innerHTML = text.value+ " JS is fun, isn't it!";
});