const time = new Date()

let today = time.getDay();
let daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday']

document.getElementById('timeAndDate').innerHTML = "Today is:" + daylist[today];
// currentDate

let date = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();

document.getElementById('currentDatedmy').innerHTML = "Date in DD/MM/YYYY format = " + date + "/" + month + "/" + year;
document.getElementById('currentDatemdy').innerHTML = "Date in MM/DD/YYYY format = " + month + "/" + date + "/" + year;
document.getElementById('currentDateymd').innerHTML = "Date in YYYY/MM/DD format = " + year + "/" + month + "/" + date;