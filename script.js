
let heading = document.getElementById("headerA");
let label = document.getElementById("fortune-input")
let button = document.getElementById("enterbutton");
let page = document.getElementById("pageA");
let fortuneInput = document.getElementById("fortune-input");
// let fortuneButton = document.getElementById("fortune-button");
let fortuneOutput = document.getElementById("fortune-output");

let fortunes = ["you will have good luck","you will have a great day","someone will ask you something today","sorry, try again later","get more rest"]

page.style.background = '#691b39';

button.addEventListener("click",function(){
	let currentInputText = fortuneInput.value;
	generate(currentInputText);
	restyle();
});

function generate(incUserInput){
	var randomIndex = Math.floor(Math.random()*fortunes.length);
	var selectRandomFortune = fortunes[randomIndex];
	fortuneOutput.innerText = "Hello "+incUserInput+" "+selectRandomFortune;
}

function restyle(){
	let randomRed = Math.floor(Math.random()*255);
	let randomGreen = Math.floor(Math.random()*255);
	let randomBlue = Math.floor(Math.random()*255);

	let outputColorString = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";

	heading.style.color = outputColorString;
	heading.style.fontSize = "5rem";
	label.style.fontSize = "2rem"
	page.style.background = '#691b39'
	label.style.color = outputColorString;
	fortuneOutput.style.fontSize = "3rem";
	fortuneOutput.style.color = outputColorString;


}
