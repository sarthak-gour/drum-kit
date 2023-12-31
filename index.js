function playSound(key){
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
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "j":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

    }
}

function animation(key){
    var pressedKey = document.querySelector("." + key);
    pressedKey.classList.add("pressed");

    setTimeout(function(){
        pressedKey.classList.remove("pressed");
    }, 100);
}

var drumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<drumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        animation(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    animation(event.key)
});