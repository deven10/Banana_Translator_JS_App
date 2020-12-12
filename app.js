
//var userWelcome = prompt("What's your name?");
//var welcome = alert("Welcome "+ userWelcome+ " ,let's learn JS!");
var inputText = document.querySelector("#inputText");
var btn = document.querySelector("#btn");
var output = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translatedURL(text){
    return serverURL + "?" + "text=" +text;
}

function errorHandler(error){
    alert("Oops! Something went wrong, try again later.");
}


function clickHandler(){
    var txtInput = inputText.value;
    fetch(translatedURL(txtInput))
    .then(response => response.json())
    .then(json => {
        outputText = json.contents.translated;
        output.innerText = outputText
    })
    .catch(errorHandler);
};

btn.addEventListener("click", clickHandler);