



var thumbnail = document.querySelector('#thumbnail'); // album cover 
const song = document.querySelector('#song'); // audio object

var songArtist = document.querySelector('.song-artist'); // element where track artist appears
var songTitle = document.querySelector('.song-title'); // element where track title appears
var progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
var pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['./assets/music/A-Mos Def - Mathematics.mp3', 
'./assets/music/Blackstar - Definition.mp3', './assets/music/Dumbfoundead - One Day .mp3', 
'./assets/music/Sea Lion by Sage Francis.mp3', 
'./assets/music/The Four Owls - Not Like Before .mp3']; 
// object storing paths for audio objects

thumbnails = ['./assets/images/mos def mathmatics.jpg', './assets/images/blackstar-the defintion.jpg', 
'./assets/images/dumbfounded -one-day.jpeg','./assets/images/sage-sea-lion.jpg','./assets/images/the four owls.jpg']; 
// object storing paths for album covers and backgrounds
songArtists = ['Mos Def', 'Blackstar', 'Dumbfounded','Sage Francias', 'The Four owls']; 
// object storing track artists
songTitles = ["Mathematics", "Defintion", "One Day", 'Sea Lion', 'Not like before']; 
// object storing track titles

// function where pp (play-pause) element changes based on playing boolean value -
// if play button clicked, change pp.src to pause button and call song.play() and vice versa.

let playing = true;
function playPause() {              //THIS SECTION HERE WILL TURN THE PLAY BUTTON ON AND OFF 
    if (playing) {
        const song = document.querySelector('#song'), // This is selecting the song id / I used to const to ensure the play button will turn off
        thumbnail = document.querySelector('#thumbnail');// This is selecting the thumnail id 

        pPause.src = "./assets/icons/pause.png" // This will src the play and pause icon to activate
        thumbnail.style.transform = "scale(1.15)";// This will make the img scale 1.15 when you push play
        
        song.play(); // This is calling the function for the song to play from index 0
        playing = false; // This states that when the song plays it changes state from true to false// Off is true//on is false
    } else {
        pPause.src = "./assets/icons/play.png" // This will source the pause icon 
        thumbnail.style.transform = "scale(1)" // This will make the img scale 1 when you push pause
        
        song.pause(); // This will call the pause function to fire
        playing = true; // As mentioned above when play is paused the variable will go back to true
    }
}
// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});
//When the Play button is clicked, the HTML element will run playPause(), 
//the logic in the IF statement will be executed, and the playing variable 
//will be set to false.

//If the Pause button is clicked, the HTML element will run playPause(), 
//the logic in the ELSE statement will be executed, and the playing variable will be true.

// This event will make the player automatically play the 
//next song at the end of the audio object's duration

function nextSong() { // This function will allow you to move to the next song and see the song and artist titles
    songIndex++;
    if (songIndex > 4) { //This will call the song array of 5 songs starting from index 0 
        songIndex = 0;
    };
    song.src = songs[songIndex]; //This is srcing the song index
    thumbnail.src = thumbnails[songIndex]; // This is srcing the thumbnail index

    songArtist.innerHTML = songArtists[songIndex]; // This is grabbing the song artist index to push forward
    songTitle.innerHTML = songTitles[songIndex];// This is grabbing the song title index to scroll through song titles

    playing = true;
    playPause();
}

function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 1
    };
    song.src = songs[songIndex];//This is srcing the song index
    thumbnail.src = thumbnails[songIndex];// This is srcing the thumbnail index

    songArtist.innerHTML = songArtists[songIndex];// This is making the song artist index to push back
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}


// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};





