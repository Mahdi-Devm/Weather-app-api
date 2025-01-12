# Weather App API ☁️🌡️

Welcome to the Weather App API project! This API provides information about current weather conditions, forecasts, and more, all powered by JavaScript. It is designed to be easy to use and integrate into your applications.

## Features 🌟
- Get real-time weather data for any location
- Access detailed weather forecasts
- User-friendly API responses
- Lightweight and efficient

## Demo 
([demo](https://raw.githack.com/Mahdi-Devm/Weather-app-api/main/index.html))

## Installation 🔧
To get started with the Weather App API, follow these steps:

1. Clone the repository:
   

Bash
   git clone https://github.com/Mahdi-Devm/Weather-app-api.git
   


2. Navigate to the project directory:
   

Bash
   cd Weather-app-api
   


3. Install the necessary dependencies (if any):
   

Bash
   npm install
   


4. Start the server:
   

Bash
   npm start
   


## Usage 📊
After starting the server, you can access the API endpoints to get weather information. Here’s an example of how to use the API:

JavaScript
fetch('https://api.openweathermap.org/data/2.5/weather?q=${namecitr}&appid=2b2f2d4a6b5dd5aeac316a832015fccb')
  .then(response => response.json())
  .then(data => console.log(data));

## Contributing 🤝
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request.

Good luck! 🎉! 
