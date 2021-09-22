const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = () => {
		if (video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

			video.currentTime = video.duration * percentScrolled;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo("#videobody", "#videobody video")


function myFunction() {
	window.location.href = 'HTMLPages/Slider.html'
	// console.log(document.getElementById('videobody').clientHeight);
	// var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
	// console.log(scrollPos);
}

function myFunction2() {
	// document.body.scrollTop = 0;
	// document.documentElement.scrollTop = 0;
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	  });
}

var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
	triggerElement: "#trigger1",
	triggerHook: 0.9, // show, when scrolled 10% into view
	offset: -24000
})
	.setClassToggle("#reveal1", "visible") // the tween durtion can be omitted and defaults to 1
	.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger2",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: 4000,
	offset: -21000
})
	.setClassToggle("#reveal2", "visible") // the tween durtion can be omitted and defaults to 1
	.addTo(controller);


new ScrollMagic.Scene({
	triggerElement: "#trigger3",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: 4000,
	offset: -15000
})
	.setClassToggle("#reveal3", "visible") // the tween durtion can be omitted and defaults to 1
	.addTo(controller);


new ScrollMagic.Scene({
	triggerElement: "#trigger4",
	triggerHook: 0.9, // show, when scrolled 10% into view
	offset: -3000
})
	.setClassToggle("#reveal4", "visible") // the tween durtion can be omitted and defaults to 1
	.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger5",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: 6000,
	offset: -12000
})
	.setClassToggle("#reveal5", "visible") // the tween durtion can be omitted and defaults to 1
	.addTo(controller);


	  
  


