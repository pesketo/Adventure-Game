var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var title = document.getElementById("title");
var txt = "";
var description = document.getElementById("description");
var inventoryitem = document.getElementById("inventoryItem");


var i = 0;
var speed = 50;

function typeWriter() {

	if (i < txt.length) {
	    title.innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriter, speed);
	 }
}

(function init() {

	title.innerHTML = "";
	txt = "Lets start the game boys";
	typeWriter();
	button1.innerHTML = "START THE GAME";
	button1.setAttribute("onclick","startGame()");
	button2.hidden = true;
	button3.hidden = true;


	console.dir(button1);
})();

function startGame() {
	
	description.innerHTML = "";
	title.innerHTML = "dfdf";

	var houseImage = document.createElement("IMG");
	houseImage.src = "img/houselvl_1.jpg";
	description.appendChild(houseImage);

	console.dir(houseImage);
}



