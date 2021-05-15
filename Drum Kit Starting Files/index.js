
//Adding Event Listeners to all buttons
for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
    });    //No parenthesis when calling function....
}

//Keyboard....
//event gets us the info about the key pressed
//event.key gets us which key is pressed
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
})

function makeSound(key){
    switch(key.toLowerCase()){
        case 'w':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'a':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 's':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'k':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'l':
            new Audio("sounds/kick-bass.mp3").play();
            break;

    }
}


