const minutesLabel = document.getElementById('min');
const secondsLabel = document.getElementById('sec');
const millisecLabel = document.getElementById('ms');
console.log(minutesLabel);

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList =  document.querySelector('.lapList');


// stpwatch variables
let min = 0;
let sec = 0;
let ms = 0;
let interval;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
resetButton.addEventListener('click',resetTimer);

function startTimer(){
    interval = setInterval(updateTimer,10)
    startButton.disabled = true;
}

function updateTimer(){
    ms++;
    if (ms === 100){ // 1sec = 1000ms
        ms = 0;
        sec ++;
        if(sec === 60){
            sec = 0;
            min ++;
        }
    }
    displayTimer();
}

function pauseTimer(){
    clearInterval(interval);
    startButton.disabled = false;
}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;
}

function stopTimer(){
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;

}

function resetTimerData(){
    min = 0;
    sec = 0;
    ms = 0;
    displayTimer(); 
}

function displayTimer(){
    millisecLabel.textContent = padTime(ms);
    secondsLabel.textContent = padTime(sec);
    minutesLabel.textContent = padTime(min);
}

function padTime(time){
    return time.toString().padStart(2,'0')
}

function addToLapList(){
    const lapTime = `${padTime(min)}:${padTime(sec)}:${padTime(ms)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.children.length + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
} 