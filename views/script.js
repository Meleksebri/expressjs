const today = new Date();

const month_map = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = today.getDate();

const day = today.getDay();
const hour = today.getHours();

const month = today.getMonth();
const year = today.getFullYear();
console.log(date);

var deadline;
if (day >= 1 && day < 5 && hour <= 23 && hour >= 17) {
  deadline = `${month_map[month]} ${date + 1}, ${year} 09:00:00`;
} else if (day > 1 && day < 5 && hour <= 8 && hour >= 0) {
  deadline = `${month_map[month]} ${date}, ${year} 09:00:00`;
} else if (day == 5 && hour <= 23 && hour >= 17) {
  deadline = `${month_map[month]} ${date + 3}, ${year} 09:00:00`;
} else if (day == 6) {
  deadline = `${month_map[month]} ${date + 2}, ${year} 09:00:00`;
} else if (day == 0) {
  deadline = `${month_map[month]} ${date + 1}, ${year} 09:00:00`;
} else if (day == 1 && hour <= 8 && hour >= 0) {
  deadline = `${month_map[month]} ${date}, ${year} 09:00:00`;
}

var dead = new Date(deadline).getTime();

var countdownfunction = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = dead - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
