var tl_homeHero = gsap.timeline({ defaults: { autoAlpha: 0, duration: 0.5 } });

function init() {
	tl_homeHero
		.from(".home-hero", {})
		.from(".site-header", { y: -48 })
		.from(".home-hero__text", { y: 48 })
		.from(".home-hero__img", { y: 24 })
		.from(".home-hero__banner", { y: 80 });
}

window.addEventListener("load", function (event) {
	init(); //do stuff
});
