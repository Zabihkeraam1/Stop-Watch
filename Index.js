const display = document.getElementById('display');
const start = document.getElementById('start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

const time={
    milliSecond: 0,
    second: 0,
    minute: 0,
    hour: 0,
};
   const sInterval = function interval(){
        window.s = setInterval(() => {
            time.milliSecond ++;
            if(time.milliSecond === 59) {
                time.milliSecond = 0;
                time.second++;
                if (time.second === 59) {
                    time.second = 0;
                    time.minute++;
                    if (time.minute === 59) {
                        time.minute = 0;
                        time.hour++;
                    }
                }
            }
           display.innerHTML = `${time.hour} : ${time.minute} : ${time.second} : ${time.milliSecond}`;
       }, 20);
   }
function cInterval(){
     clearInterval(s);
}
function rInterval(){
       clearInterval(s);
       time.milliSecond = 0;
       time.second = 0;
       time.minute = 0;
       time.hour = 0;
       display.innerHTML = `${time.hour} : ${time.minute} : ${time.second} : ${time.milliSecond}`;
}
start.addEventListener('click', sInterval);

stop.addEventListener('click', cInterval);

reset.addEventListener('click', rInterval);
