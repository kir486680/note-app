
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#testarea");
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var text = document.getElementById('text');

var timer = [0,0,0,0];
var interval;
var timerRunning = false;




var texts1= [
    "I went to the park and saw a tree, it was a big tree and it was very green. I could see a red apple on a high branch so I reached up and picked it off. It was weird how I picked it off, as I am very short. I suppose I just jumped really high.",
    "Every time you look at the keyboard or make a mistake, you move your attention away from what you really want to do. Wouldn't it be nice if you could type as fast as you can think? This site is helping you do that.",
    "What I'm trying to say is this: speed matters. When you're a fast, efficient typist, you spend less time between thinking that thought and expressing it in code. Which means, if you're me at least, that you might actually get some of your ideas committed to screen before you completely lose your train of thought. Again.",
    "I can't understand why professional programmers out there allow themselves to have a career without teaching themselves to type. It doesn't make any sense. It's like being, I dunno, an actor without knowing how to put your clothes on."
   ];
   


window.onload = function what(){
    console.log(texts1.length);
    var rand = texts1[Math.floor(Math.random() * 4)];
    console.log(rand);
    document.getElementById('text').innerHTML = rand;

    };




// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress" , start , false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

