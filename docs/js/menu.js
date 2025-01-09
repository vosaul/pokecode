// Menú

const fons = document.querySelector("body");
const area_mobile = document.querySelector(".safe-area--mobile");
const burger = document.querySelector(".btn-burger");
const linksMenu = document.querySelectorAll("#primary-menu > .menu-item");
const linksSubmenu = document.querySelectorAll(".menu-item-has-children > span");

linksMenu.forEach((link) => {
	link.addEventListener("click", (e) => {
		console.log("off");
		tl.reverse();
		burger.setAttribute("aria-expanded", "false");
		document.querySelector(".main-navigation").classList.remove("toggled");
	});
});

linksSubmenu.forEach((element) => {
	element.addEventListener("click", () => {
		if (window.innerWidth < 813) {
			const submenu = element.nextElementSibling;
			const submenuHeight = submenu.scrollHeight;
			if (submenu.classList.contains("dropdown-menu--obert")) {
				submenu.classList.remove("dropdown-menu--obert");
				submenu.removeAttribute("style");
			} else {
				submenu.classList.add("dropdown-menu--obert");
				submenu.style.height = submenuHeight + "px";
			}
		}
	});
});

var tl = gsap.timeline({
	onComplete: activarlinks,
	onReverseComplete: desactivarlinks,
	paused: true,
	defaults: { duration: 0.25, ease: "power1.out" },
});

tl.to("#container-menu", { opacity: 1 });

if (burger) {
	burger.addEventListener("click", () => {
		var foo = burger.getAttribute("aria-expanded");
		switch (foo) {
			case "true":
				console.log("off----------1");
				tl.play();
				break;
			case "false":
				console.log("on----------1");
				tl.reverse();
				break;
			default:
				console.log("error----------1");
		}
	});
}

function activarlinks() {
	// Control els links els detecti
	area_mobile.style.pointerEvents = "auto";
	// Control scroll inferior
	fons.style.overflow = "hidden";
}

function desactivarlinks() {
	// Control els links no els detecti
	area_mobile.style.pointerEvents = "none";
	// Control scroll inferior
	fons.style.overflow = "auto";
}
