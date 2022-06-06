// detects button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML; //checking the innerHTML of the button pressed
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

// detects keyboard press

document.addEventListener("keydown", function (event) { //here this event input basically gives a log / keyboard event list containing every information/properties about which keyboard key is clicked, if ctrl is clicket with it or no etc. to understand better try console.log(event) and see what happens
    makeSound(event.key); //key is like one of the properties and we are accessing it through event and passing it throught the makesound function that trigger the sound corresponding to the letter clicked
    buttonAnimation(event.key);
});

// this function looks after the audio department
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(buttonInnerHTML);
    };
}

function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function () {
        activeKey.classList.remove("pressed", 0.2)
    })
}