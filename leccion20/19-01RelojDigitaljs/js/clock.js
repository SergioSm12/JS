const showClock = () => {
  let date = new Date();
  let hour = timeformat(date.getHours());
  let min = timeformat(date.getMinutes());
  let sec = timeformat(date.getSeconds());
  document.getElementById("hour").innerHTML = `${hour}:${min}:${sec}`;

  const months =['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  const days =['Sun','Mon', 'Tues', 'Wed', 'Thurs', 'Fri','Satur'];
  let  dayWeek = days[date.getDay()]; // day in letters
  let day= date.getDate(); // day in Number
  let month = months[date.getMonth()];
  let textDate = `${dayWeek}, ${day} ${month} `;

  document.getElementById('date').innerHTML=textDate;

  document.getElementById('container').classList.toggle('animar');
};

const timeformat = (hour) => {
  if (hour < 10) hour = "0" + hour;
  return hour;
};

setInterval(showClock, 1000);
