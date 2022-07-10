//Step 1

let weatherCurrentDay = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let whatDay = days[weatherCurrentDay.getDay()];

let months = [
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
let whatMonth = months[weatherCurrentDay.getMonth()];

let whatDate = weatherCurrentDay.getDate();

let whatHour = weatherCurrentDay.getHours();

let whatMinutes = weatherCurrentDay.getMinutes();
if (whatMinutes < 10) {
  whatMinutes = `0${whatMinutes}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${whatDay}, ${whatMonth} ${whatDate}, ${whatHour}:${whatMinutes}`;

//Challenge 2
function displayWeather(response) {
  console.log(response.data.name);
}

function search(event) {
  event.preventDefault();
  let apiKey = "8542913933d6e9526040ad6e6691ada1";
  let enterCity = document.querySelector("#weather-engine").value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${enterCity}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
