function showClock() {
  let date = new Date();
  let hour = timeFormat(date.getHours());
  let min = timeFormat(date.getMinutes());
  let sec = timeFormat(date.getSeconds());

  document.getElementById("hour").innerHTML = `${hour}:${min}:${sec}`;

  const months = [
    "JAN",
    "FEB",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Satur"];
  
  let dayWeek =days[date.getDay()];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let textDate = `${dayWeek}, ${day} ${month}`;

  document.getElementById('date').innerHTML=textDate;
  
  document.getElementById('container').classList.toggle('encourage');
}

function timeFormat(time){
    if(time<10){
        time= "0" + time;
    }
    return time;   
    
      
};

setInterval(showClock, 1000);
