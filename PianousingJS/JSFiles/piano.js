const volumeSlider = document.querySelector("volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

function playSound(key){

    switch(key){

        case 'A':const sound1 = new Audio('SoundFiles/tunes/A.mp3');
                 sound1.play();
                 break;

        case 'W':const sound2 = new Audio('SoundFiles/tunes/w.wav');
                 sound2.play();
                 break;

        case 'S':const sound3 = new Audio('SoundFiles/tunes/s.wav');
                 sound3.play();
                 break;

        case 'E':const sound4 = new Audio('SoundFiles/tunes/e.wav');
                sound4.play();
                break;

        case 'D':const sound5 = new Audio('SoundFiles/tunes/D.wav');
                 sound5.play();
                 break;

        case 'F':const sound6 = new Audio('SoundFiles/tunes/F.wav');
                 sound6.play();
                 break;

        case 'T':const sound7 = new Audio('SoundFiles/tunes/T.wav');
                 sound7.play();
                 break;

        case 'G':
                 const sound8 = new Audio('SoundFiles/tunes/G.wav');
                 sound8.play();
                 break;

        case 'Y':const sound9 = new Audio('SoundFiles/tunes/Y.wav');
                 sound9.play();
                 break;

        case 'H':const sound10 = new Audio('SoundFiles/tunes/H.wav');
                 sound10.play();
                 break;

        case 'U':const sound11 = new Audio('SoundFiles/tunes/U.wav');
                 sound11.play();
                 break;

        case 'J':const sound12 = new Audio('SoundFiles/tunes/J.wav');
                 sound12.play();
                 break;


        case 'K':const sound13 = new Audio('SoundFiles/tunes/K.wav');
                 sound13.play();
                 break;

        case 'O':const sound14 = new Audio('SoundFiles/tunes/O.wav');
                 sound14.play();
                 break;

        case 'L':const sound15 = new Audio('SoundFiles/tunes/L.wav');
                 sound15.play();
                 break;

        case 'P':const sound16 = new Audio('SoundFiles/tunes/P.wav');
                 sound16.play();
                 break;

        case ';':const sound17 = new Audio('SoundFiles/tunes/;.wav');
                 sound17.play();
                 break;

    }
}

for(let i=0; i<17; i++){

    let pianoKeys=document.querySelectorAll(".piano-keys .key")[i].addEventListener("click", (eve)=>{
    let tune = eve.target.innerHTML;
        playSound(tune);
    })

}   

document.addEventListener("keypress", (event)=>{
let tune = event.key;
    playSound(tune);
});

const handleVolume = (e) => {
    const volume = e.target.value;
    // Adjust volume for each new sound played
    document.querySelectorAll('Audio').forEach(audio => audio.volume = volume);
}

const showHideKeys = () => {
    document.querySelectorAll(".piano-keys .key").forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);

