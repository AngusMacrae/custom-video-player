const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function togglePlayPause() {
    video.paused ? video.play() : video.pause();
}

function updatePlayPauseIcon() {
    playPauseBtn.innerHTML = video.paused ? '<i class="fa fa-play fa-2x"></i>' : '<i class="fa fa-pause fa-2x"></i>';
}

function updateProgress() {
    // if (!progress.matches(':active')) {
    progress.value = 100 * video.currentTime / video.duration;
    // }
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    timestamp.textContent = `${mins}:${secs}`;
    console.log(video.seeking);

}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', togglePlayPause);
video.addEventListener('play', updatePlayPauseIcon);
video.addEventListener('pause', updatePlayPauseIcon);
video.addEventListener('timeupdate', updateProgress);

playPauseBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setProgress);