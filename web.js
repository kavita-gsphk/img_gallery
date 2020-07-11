let onClickMenu = () => {
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
};
let click = (e) => {
	var pos;
	if (e.path[4].classList[1] == undefined) {
		pos = e.path[3].classList[1];
	} else {
		pos = e.path[4].classList[1];
	}

	if (pos == "img_1") {
		document.querySelector("#img").src = "./images/photo.jpg";
	}
	if (pos == "img_2") {
		document.querySelector("#img").src = "./images/photo_1.jpg";
	}
	if (pos == "img_3") {
		document.querySelector("#img").src = "./images/photo_2.jpg";
	}
	if (pos == "img_4") {
		document.querySelector("#img").src = "./images/photo_3.jpg";
	}
	if (pos == "img_5") {
		document.querySelector("#img").src = "./images/photo_7.jpg";
	}
	if (pos == "img_6") {
		document.querySelector("#img").src = "./images/photo_4.jpg";
	}
	if (pos == "img_7") {
		document.querySelector("#img").src = "./images/photo_5.jpg";
	}
	if (pos == "img_8") {
		document.querySelector("#img").src = "./images/photo_6.jpg";
	}
	if (pos == "img_9") {
		document.querySelector("#img").src = "./images/photo_8.jpg";
	}
	if (pos == "img_10") {
		document.querySelector("#img").src = "./images/photo_9.jpg";
	}
	if (pos == "img_11") {
		document.querySelector("#img").src = "./images/photo_10.jpg";
	}
	if (pos == "img_12") {
		document.querySelector("#img").src = "./images/photo_11.jpg";
	}
	if (pos == "img_13") {
		document.querySelector("#img").src = "./images/photo_12.jpg";
	}
	if (pos == "img_14") {
		document.querySelector("#img").src = "./images/photo_13.jpg";
	}
	if (pos == "img_15") {
		document.querySelector("#img").src = "./images/photo_14.jpg";
	}

	document.querySelector(".popup").classList.toggle("popup_hidden");
};
let popup = () => {
	document.querySelector(".popup").classList.toggle("popup_hidden");
};
document.getElementById("menu").addEventListener("click", onClickMenu);
document.getElementById("nav").addEventListener("click", onClickMenu);
document.getElementById("menu-bg").addEventListener("click", onClickMenu);
//document.getElementById("viwe").addEventListener("click", click);
document.querySelector(".button").addEventListener("click", popup);
document.querySelector(".viwe").addEventListener("click", click);
document.querySelector(".viwe_2").addEventListener("click", click);
document.querySelector(".viwe_3").addEventListener("click", click);
document.querySelector(".viwe_4").addEventListener("click", click);
document.querySelector(".viwe_5").addEventListener("click", click);
document.querySelector(".viwe_6").addEventListener("click", click);
document.querySelector(".viwe_7").addEventListener("click", click);
document.querySelector(".viwe_8").addEventListener("click", click);
document.querySelector(".viwe_9").addEventListener("click", click);
document.querySelector(".viwe_10").addEventListener("click", click);
document.querySelector(".viwe_11").addEventListener("click", click);
document.querySelector(".viwe_12").addEventListener("click", click);
document.querySelector(".viwe_13").addEventListener("click", click);
document.querySelector(".viwe_14").addEventListener("click", click);
document.querySelector(".viwe_1").addEventListener("click", click);
document.querySelector(".cancel").addEventListener("click", popup);
