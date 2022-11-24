// prompt("javascript connected succesfuly!:)")
setInterval(() => {
  // code for analog watch 
    d=new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

// code for digital watch

document.getElementById("year").innerHTML = d.getFullYear();

Tarik = d.getDate()
document.getElementById("tarik").innerHTML = `${Tarik},`;

var hour_2 = d.getHours();

// wish
if (hour_2>=8 && hour_2<=12) {
  document.getElementById("wish").innerHTML = "Good Morning!";
} else if (hour_2>=13 && hour_2<= 16) {
  document.getElementById("wish").innerHTML = "Good afternoon!";
} else if(hour_2>=17 && hour_2<= 20) {
  document.getElementById("wish").innerHTML = "Good evening!";
} else {
    document.getElementById("wish").innerHTML = "Good night!";
}

// apm 
var am = 'am';
if(hour_2>12){
  hour_2 = hour_2-12;
  am = 'pm'
}
// time 
  // hour 
if (hour_2>9) {
    document.getElementById("hour-2").innerHTML = hour_2;
  } else {
    document.getElementById("hour-2").innerHTML = `0${hour_2}`;
  }
  // minute 
var minute_2 = d.getMinutes();
if (minute_2>9) {
    document.getElementById("minute-2").innerHTML = `: ${d.getMinutes()}`;
  } else {
    document.getElementById("minute-2").innerHTML = `: 0${d.getMinutes()}`;
  }
  // seconds
var second_2 = d.getSeconds();
if (second_2>9) {
    document.getElementById("second-2").innerHTML = `: ${d.getSeconds()} ${am}`;
  } else {
    document.getElementById("second-2").innerHTML = `: 0${d.getSeconds()} ${am}`;
  }

// print day name  
var day = d.getDay();
switch (day){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}  
document.getElementById("dayName").innerHTML = day;

// print month name
var month_name = d.getMonth();
switch (month_name){
  case 0:
    month_name = "January";
    break;
  case 1:
    month_name = "February";
    break;
  case 2:
    month_name = "March";
    break;
  case 3:
    month_name = "April";
    break;
  case 4:
    month_name = "May";
    break;
  case 5:
    month_name = "June";
    break;
  case 6:
    month_name = "July";
    break;
  case 7:
    month_name = "August";
    break;
  case 8:
    month_name = "September";
    break;
  case 9:
    month_name = "October";
    break;
  case 10:
    month_name = "November";
    break;
  case 11:
    month_name = "December";
    break;    
}  
document.getElementById("m_name").innerHTML = month_name;


},100)