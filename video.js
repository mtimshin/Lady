let video;
let playButton;
let pauseButton;
let stopButton;

video = document.querySelector('#video-player');
playButton = document.querySelector('#play');
pauseButton = document.querySelector('#pause');
stopButton = document.querySelector('#stop');

playButton.onclick = function() {
    play();
    pauseButton.style.display = 'inline-block';
    stopButton.style.display = 'inline-block';
    pauseButton.onclick = pause;
    stopButton.onclick = stop;
};

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}



// document.querySelector('#play').onclick = play;
// document.querySelector('#pause').onclick = pause;
// document.querySelector('#stop').onclick = stop;
// document.querySelector('#volume').oninput = videoVolume;

// let video;
// let display;
// let progress;

// video = document.querySelector('#video-player');
// progress = document.querySelector('#progress');
// // !!!!
// video.ontimeupdate = progressUpdate;
// progress.onclick = function(event) {
//     videoRewind(event);
// };

// function play() {
//     video.play();
// }
// function pause() {
//     video.pause();
// }
// function stop() {
//     video.pause();
//     video.currentTime = 0;
// }
// function videoVolume() {
//     let v = this.value;
//     console.log(v);
//     video.volume = v / 100;
// }
// function progressUpdate() {
//     console.log(video.duration);
//     console.log(video.currentTime);
//     let d = video.duration;
//     let c = video.currentTime;
//     progress.value = (100 * c) / d;
// }
// function videoRewind(event) {
//     let w = this.offsetWidth;
//     let o = event.offsetX;
//     console.log(w);
//     console.log(o);
//     this.value = 100 * o / w;
//     video.pause();
//     video.currentTime = video.duration * (o / w);
// }

// document.querySelector('#play').onclick = play;
// document.querySelector('#pause').onclick = pause;
// document.querySelector('#stop').onclick = stop;




// let video;

// video = document.querySelector('#video-player');

// function play() {
//     video.play();
// }
// function pause() {
//     video.pause();
// }
// function stop() {
//     video.pause();
//     video.currentTime = 0;
// }
