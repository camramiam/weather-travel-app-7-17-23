const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const currentWeatherDiv = document.getElementById('currentWeather');
const forecastWeatherDiv = document.getElementById('forecastWeather');
const searchHistoryDiv = document.getElementById('searchHistory');
let searchHistory = [];

searchForm.addEventListener('submit', function (e)) { 
    e.preventDefault();
    const city = cityInput.ariaValueMax.trim();
    if (city !=='') {
        getWeatherData(city);
        cityInput.value = '';
    }
});

function getWeatherData(city) {
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=$(city')
    .then(resonse => Response.json())
    .then(data => {
        //Process current weather data and display it
        const currentWeatherInfo = processCurrentWeatherData (data);
        displayCurrentWeather(currentWeatherInfo);
    })
}