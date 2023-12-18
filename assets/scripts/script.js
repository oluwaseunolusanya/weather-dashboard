// Get a city's current and 5-Day weather conditions.
let getWeatherData = function(city){
    let lat, lon;
    let queryGeoCode = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${moon}`;

    fetch(queryGeoCode)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        lat = data[0].lat;     // Get the latitude of the city
        console.log(lat);
        lon = data[0].lon;     // Get the longitude of the city
        console.log(lon);
        let query5DayForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${moon}`;
        console.log(query5DayForecast);
        fetch(query5DayForecast)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
            })
    })
}

// Add click event to search button
let searchButton = $("#search-button");

searchButton.on("click",function(e){
    e.preventDefault();
    let city = $("#search-input").val()
    getWeatherData(city);
})


