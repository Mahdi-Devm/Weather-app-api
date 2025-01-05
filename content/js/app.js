const inputelm = document.querySelector(".search-box");
let city = document.querySelector(".city");
let date = document.querySelector(".date");
let temp = document.querySelector(".temp");
let weather = document.querySelector(".weather");
let hilow = document.querySelector(".hi-low");

inputelm.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let namecitr = inputelm.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${namecitr}&appid=2b2f2d4a6b5dd5aeac316a832015fccb`
    )
      .then((res) => res.json())
      .then((datacity) => {
        console.log(datacity);
        city.innerHTML = datacity.name + "," + datacity.sys.country;
        weather.innerHTML = datacity.weather[0].main;
        date.innerHTML = showdata();
        temp.innerHTML = `${Math.floor(datacity.main.temp - 273.15)}°c`;
        hilow.innerHTML = `${Math.floor(
          datacity.main.temp_min - 273.15
        )}'c' / ${Math.floor(datacity.main.temp_max - 273.15)}`;
      })
      .catch((err) => {
        console.error(err);
        alert('City not found, please try again');
      });
  }
});
function showdata() {
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

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();

  let month = months[now.getMonth()];
  let day = days[now.getDay()];
  let yar = now.getFullYear();
  let date = now.getDate();
  console.log(date);

  return `${day} ${date} ${month} ${yar}`
}
