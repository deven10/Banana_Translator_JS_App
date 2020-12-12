
//var userWelcome = prompt("What's your name?");
//var welcome = alert("Welcome "+ userWelcome+ " ,let's learn JS!");
var inputtext = document.querySelector("inputText");
var btn = document.querySelector("#btn");
var output = document.querySelector(".output");

btn.addEventListener("click", function(){
    console.log("Clicked!!!");
    output.innerHTML = inputText.value+ " JS is fun, isn't it!";
});