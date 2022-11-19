// Add js here.
window.onload = init;

function init () {
    var vid = document.getElementById('videoplayer');
    vid.load ();
    vid.auotplay = false;
    vid.loop = false;
};

var play = document.getElementById('play');

play.addEventListener('click', function playVid () {
    var vid = document.getElementById('videoplayer')
    vid.play()
});

var pause = document.getElementById('pause');

pause.addEventListener('click', function pauseVid () {
    var vid = document.getElementById('videoplayer')
    vid.pause()
});

var slow = document.getElementById('slower');

slow.addEventListener('click', function slowVid () {
    var vid = document.getElementById('videoplayer')
    if (vid.playbackRate == 2.0) {
        vid.playbackRate = 1.0
    } else {
    if (vid.playbackRate == 1.0) {
        vid.playbackRate = 0.5
    }
    else {
        window.alert('Video is at slowest speed!')
    }}
});

var fast = document.getElementById('faster');

fast.addEventListener('click', function fastVid () {
    var vid = document.getElementById('videoplayer')
    if (vid.playbackRate == 0.5) {
        vid.playbackRate = 1.0
    } else {
        if (vid.playbackRate == 1.0) {
            vid.playbackRate = 2.0
        }
            else {
            window.alert('Video is at fastest speed!')
            }}
});

var skip = document.getElementById('skip');

function skipVid() {
    var vid = document.getElementById('videoplayer');
    vid.currentTime = vid.currentTime + 15;
    if (vid.ended) {
        vid.currentTime = 0;
        vid.pause()
    }
};

skip.addEventListener('click', skipVid);

var muteButton = document.getElementById('mute');

function muteToggle() {
    var vid = document.getElementById('videoplayer');
    var volText = document.getElementById('volume');
    if (vid.muted === false) {
        vid.muted = true;
        muteButton.textContent = 'Unmute';
        volText.textContent = 0;
    }
    else {
        vid.muted = false;
        muteButton.textContent = 'Mute'
        volText.textContent = volSlider.value
    }
};

muteButton.addEventListener('click', muteToggle);

var volSlider = document.getElementById('slider');
var volText = document.getElementById('volume');

volSlider.oninput = function volSlide() {
    var vid = document.getElementById('videoplayer');
    vid.volume = volSlider.value / 100
    volText.textContent = volSlider.value
}