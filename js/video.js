(() => {
  (vid = document.querySelector("#video video")),
    (playButton = document.querySelector("#play")),
    (pauseButton = document.querySelector("#pause")),
    (restartButton = document.querySelector("#restart")),
    (volumeSlider = document.querySelector("#volumeSlider"));

  function pauseVideo() {
    vid.pause();
  }

  function playVideo() {
    vid.play();
  }

  function restartVideo() {
    vid.currentTime = 0;
  }

  function setVolume() {
    vid.volume = volumeSlider.value / 100;
  }

  function vidControls() {
    vid.controls = false;
  }

  vidControls();
  pauseButton.addEventListener("click", pauseVideo);
  playButton.addEventListener("click", playVideo);
  restartButton.addEventListener("click", restartVideo);
  volumeSlider.addEventListener("change", setVolume);
})();
