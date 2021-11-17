

var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate * 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video");
	video.playbackRate = video.playbackRate * 1.05;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime = video.currentTime +  15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML= "Unmute";
	}
// 	else (video.muted = false) {
// 		document.querySelector("#mute").innerHTML = "Mute";

// 	}
  });


document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value / 100; 
	document.querySelector("#volume").innerHTML=this.value + "%";
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});



	