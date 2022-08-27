const showClock = () => {
  let date = new Date();
  let hour = formatDate(date.getHours()) ;
  let min = formatDate(date.getMinutes());
  let sec = formatDate(date.getSeconds());

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

  let dayWeek = days[date.getDay()];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let textDate = `${dayWeek}, ${day} ${month}  ${year} `;

  document.getElementById("date").innerHTML = textDate;

  document.getElementById('container').classList.toggle('animation')
};

const formatDate = (time) => {
    if(time<10){
        time="0"+ time;
    }
    return time;
}; 

setInterval(showClock, 1000);
