window.onload =() =>{
    function buildclock(){
        console.log("Timer");

        const date = new Date();
        console.log(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours=hours < 10? "0"+hours :hours;
        minutes=minutes < 10? "0"+minutes: minutes; 
        seconds=hours < 10? "0"+seconds :seconds;
    
        document.querySelector('#clock-hours').innerText = hours;
        document.querySelector('#clock-minutes').innerText = minutes;
        document.querySelector('#clock-seconds').innerText = seconds;

        setTimeout(buildclock,1000);
    }
    buildclock();
}