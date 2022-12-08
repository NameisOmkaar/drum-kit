//Button Press;

let numberOfQueries = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfQueries; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {

        let druminnerHTML = this.innerHTML;
        makeSound(druminnerHTML)
        drumAnimation(druminnerHTML)
    })
};


//KeyPress

document.addEventListener("keydown", function(event) {
    makeSound(event.key.toLowerCase() || event.key.toUpperCase());
    drumAnimation(event.key.toLowerCase() || event.key.toUpperCase());
});


function makeSound(key) {

    switch (key) {
        case "a":
            let clap = new Audio('./Assets/sounds/clap.wav');
            clap.play();
            break;
        case "s":
            let hiHat = new Audio('./Assets/sounds/hihat.wav');
            hiHat.play();
            break;
        case "d":
            let kick = new Audio('./Assets/sounds/kick.wav');
            kick.play();
            break;
        case "f":
            let openHat = new Audio('./Assets/sounds/openhat.wav');
            openHat.play();
            break;
        case "g":
            let boom = new Audio('./Assets/sounds/boom.wav');
            boom.play();
            break;
        case "h":
            let ride = new Audio('./Assets/sounds/ride.wav');
            ride.play();
            break;
        case "j":
            let snare = new Audio('./Assets/sounds/snare.wav');
            snare.play();
            break;
        case "k":
            let tom = new Audio('./Assets/sounds/tom.wav');
            tom.play();
            break;
        case "l":
            let tink = new Audio('./Assets/sounds/tink.wav');
            tink.play();
            break;
        default: console.log(key);
           
    }
}

// function drumAnimation(currentKey) {
//     let drumButton = document.querySelector("." + currentKey);

//     drumButton.classList.add("pressed");

//     setTimeout(
//         function() {
//             drumButton.classList.remove("pressed");
//         }, 1000
//     )

// }

function drumAnimation(key) {
    if (document.querySelector("." + key) != null) {
        document.querySelector("." + key).classList.add("pressed");
        setTimeout(function() { document.querySelector("." + key).classList.remove("pressed") }, 50);
    }
}
