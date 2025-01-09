//Scroll

// Registrar el plugin ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

// 1. Fer aparèixer els mòduls a mesura que el "Scroll" baixa

var modulsGrid = document.querySelectorAll(".modul__grid");

modulsGrid.forEach((item, i) => {
	gsap.from(item, {
		scrollTrigger: {
			trigger: item,
			start: "top 85%",
			end: "90% top",
			// markers: true,
			toggleActions: "play none none none",
		},
		opacity: 0,
		y: 30,
		duration: 0.5,
		ease: "power1.out",
	});
});
