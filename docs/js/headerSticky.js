// Initial state
var scrollPosY = window.scrollY;
var scrollUpOnce = false;
var headerSite = document.querySelector(".site-header");
var posFixedY = 0;

window.onscroll = function () {
	console.log("scroll----->" + scrollPosY);
	console.log("Body----->" + document.body.getBoundingClientRect().top);
	// Mirem si el top del bodySite es més petit que la posició Y del Scroll
	if (document.body.getBoundingClientRect().top < scrollPosY) {
		// Si ja hem fet el primer scroll cap amunt...
		if (scrollUpOnce) {
			// ... fixem el headerSite al top de la finestra...
			headerSite.style.top = window.scrollY + "px";
			//... eliminem el fixed i el deixem en absolute...
			headerSite.classList.remove("fixar");
			//... i canviem la variable de scroll amunt a false
			scrollUpOnce = false;
		}
		console.log("DOWN");
	} else if (document.body.getBoundingClientRect().top >= 0) {
		// Si el document ha arribat a dalt de tot
		// Posem el top a 0px
		headerSite.style.top = "0px";
		// Borrem les clases
		headerSite.classList.remove("stickyActive", "fixar");
		// Posem la variables scrollUpOnce a 0
		scrollUpOnce = false;
		console.log("STOP");
	} else {
		if (!scrollUpOnce) {
			//Calculem la posició on hem de situar el headerSite
			posFixedY = Math.round(window.scrollY - headerSite.getBoundingClientRect().height) + "px";
			// Posem el headerSite en posició top: posició scrolly menys l'alçada del headerSite
			headerSite.style.top = posFixedY;
			// Posem un estil nou al headerSite
			headerSite.classList.add("stickyActive");
			// Canviem la variable a "true", ja que ja hem fet scroll cap avall
			scrollUpOnce = true;
			console.log("UP");
		} else if (headerSite.getBoundingClientRect().top >= 0) {
			// Fixem el headerSite en posició "fixed" i top: 0 !important un cop el top del headerSite és més gran o igual a 0
			headerSite.classList.add("fixar");
		}
	}
	scrollPosY = document.body.getBoundingClientRect().top;
	// scrollPosY = window.scrollY;
};
