var video;
video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener(
	"click",function() {
		video.play();
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	}
);

document.querySelector("#pause").addEventListener(
	"click",function() {
		video.pause();
	}
);

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function (){
	video.playbackRate += 0.1;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function (){
	if(video.duration > video.currentTime + 10 ){
		video.currentTime += 10;
	}else{
		video.currentTime = 0; 
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function (){
	let muteText = document.querySelector("#mute");
	if(!video.muted){
		video.muted = true;
		muteText.innerHTML = "Unmute";
	}else{
		video.muted = false;
		muteText.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change",function (){
	video.volume = parseFloat(this.value) / 100;
	document.querySelector("#volume").innerHTML = this.value  + "%";

})

document.querySelector("#vintage").addEventListener("click",function() {
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function (){
	video.classList.remove("oldSchool");
})
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

