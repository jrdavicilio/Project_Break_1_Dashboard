
let weatherContainer = document.getElementById('weatherContainer')

async function fetchData() {
    try {
        const response = await fetch ("https://api.weatherapi.com/v1/forecast.json?key=3e417fcbea604c809c1142300251804&q=Madrid&days=1&aqi=no&alerts=no");
        const data = await response.json();
        weatherContainer.innerHTML = `
        <div id="currentWeather">
            <h2>${data.location.name} / ${data.location.country}</h2>
            <p>${data.current.condition.text}</p>
            <div id="currentData">
                <div id="currentGrades">
                        <img class="weatherIcon" src="${data.current.condition.icon}" alt="${data.current.condition.text}">
                        <p>${data.current.temp_c}°C</p>
                    <ul>
                        <li>Precipitaciones: ${data.current.precip_mm}mm</li>
                        <li>Humedad: ${data.current.humidity}%</li>
                        <li>Viento: ${data.current.wind_kph}km/h</li>
                    </ul>
                </div>
                <ul id="forecastWeather"></ul>
            </div>
        </div>

        `
        data.forecast.forecastday[0].hour.forEach(hourData => {
            const hour = new Date(hourData.time).getHours();
            document.getElementById('forecastWeather').innerHTML += `
                <li>
                    <p>${hour}:00</p>
                    <img src="${hourData.condition.icon}" alt="${hourData.condition.text}">
                    <p>${hourData.temp_c}°C</p>
                </li>
            `;
        });
    } catch (error) {
        console.log(`Error: ${error}`)
    }
    
}

fetchData()