const video = document.querySelector("#video video");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const restartButton = document.querySelector("#restart");
const volumeSlider = document.querySelector("#volumeSlider");

const pauseVideo = () => video.pause();
const playVideo = () => video.play();
const restartVideo = () => (video.currentTime = 0);
const setVolume = () => (video.volume = volumeSlider.value / 100);

const hideVideoControls = () => (video.controls = false);

video.autoplay = true;
video.loop = true;
video.volume = 0;

hideVideoControls();
pauseButton.addEventListener("click", pauseVideo);
playButton.addEventListener("click", playVideo);
restartButton.addEventListener("click", restartVideo);
volumeSlider.addEventListener("input", setVolume);
