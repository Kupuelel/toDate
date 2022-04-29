console.log('Hello World');

const form = document.querySelector('form');
const input = form.querySelector('input');

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const secondsOverlay = document.querySelector('.seconds_overlay');


form.addEventListener('submit', e => {
    e.preventDefault();
    loadDate();
    deadline = input.value;
    console.log(deadline);
    setDate(deadline);
});

function setDate(deadline) { 
    total = Date.parse(deadline) - Date.parse(new Date()); 
    console.log(total);

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(total / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(total / (1000 * 60) % 60);
    const seconds = Math.floor(total / 1000 % 60);
    return {
        'total' : total,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
function loadDate() {
    const timerInterval = setInterval(updateTime, 1000);
    function updateTime() {
        const time = setDate(deadline);

        days.innerHTML = getZero(time.days);
        hours.innerHTML = getZero(time.hours);
        minutes.innerHTML = getZero(time.minutes);
        seconds.innerHTML = getZero(time.seconds);
        secondsOverlay.innerHTML = getZero(time.seconds);
        if ( total <= 0) {
            days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        }
    }
}
