let homePoints = 0;
let guestPoints = 0;
let homeFouls = 0;
let guestFouls = 0;
let homeTO = 3;
let guestTO = 3;
let period = 1;
let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

function homeAdd1() {
    // console.log("home +1 clicked");
    homePoints += 1;
    homeEl.textContent = homePoints;
}

function homeAdd2() {
    // console.log("home +2 clicked");
    homePoints += 2;
    homeEl.textContent = homePoints;
}

function homeAdd3() {
    // console.log("home +3 clicked");
    homePoints += 3;
    homeEl.textContent = homePoints;
}

function guestAdd1() {
    // console.log("guest +1 clicked");
    guestPoints += 1;
    guestEl.textContent = guestPoints;
}

function guestAdd2() {
    // console.log("guest +2 clicked");
    guestPoints += 2;
    guestEl.textContent = guestPoints;
}

function guestAdd3() {
    // console.log("guest +3 clicked");
    guestPoints += 3;
    guestEl.textContent = guestPoints;
}

function addHomeFouls() {
    // console.log("home-fouls pressed");
    homeFouls += 1;
    // console.log(homeFouls);
    document.getElementById("home-foul-span").textContent = homeFouls;
}

function addGuestFouls() {
    // console.log("guest-fouls pressed");
    guestFouls += 1;
    // console.log(guestFouls);
    document.getElementById("guest-foul-span").textContent = guestFouls;
}

function subtractHomeTO() {
    // console.log("home-TO pressed");
    homeTO -= 1;
    // console.log(homeTO);
    document.getElementById("homeTO-span").textContent = homeTO;
}

function subtractGuestTO() {
    // console.log("guest-TO pressed");
    guestTO -= 1;
    // console.log(guestTO);
    document.getElementById("guestTO-span").textContent = guestTO;
}

// set the timer to 3 seconds to simulate the last 3 seconds of a game to imitate switching to the next period
var countDownTimer = 1000*3;

function startTimer() {
    // calculations for minutes and seconds
    var minutes = Math.floor((countDownTimer % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countDownTimer % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = minutes + ":" + String(seconds).padStart(2, '0');

    // if period is equal to 4 & timer === 0 end the game
    if (minutes + seconds === 0 & period === 4) {
        // stop the loop from running when the game is over
        window.clearInterval(x);
        // console.log("game over!");
        document.getElementById("end").textContent = "GAME OVER!";
    } else if (countDownTimer === 0 & period.textContent != "4"){
        period++;
        document.getElementById("period").textContent = period;
        countDownTimer = 1000*3;
    } else {
        countDownTimer -= 1000;
    }
}


// reset the game when new game is pressed
function newGame() {    
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    document.getElementById("home-foul-span").textContent = 0;
    document.getElementById("guest-foul-span").textContent = 0;
    document.getElementById("homeTO-span").textContent = 3;
    document.getElementById("guestTO-span").textContent = 3; 
    countDownTimer = 1000 * 3;
    document.getElementById("period").textContent = 1;
    document.getElementById("end").textContent = "";
}

let x = setInterval(startTimer, 1000);