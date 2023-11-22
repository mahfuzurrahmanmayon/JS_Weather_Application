const API_KEY = `ee6e548d6782897f9330820c9df79ce6`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}


const showWeather = (data) => {

    const weatherContainer = document.getElementById("weather");

    weatherContainer.innerHTML = '';

    // Create elements
    const h1 = document.createElement("h1");
    h1.className = "weather-wrapper";

    const citySpan = document.createElement("span");
    citySpan.className = "city";
    citySpan.textContent = data.name + ", ";

    const countrySpan = document.createElement("span");
    countrySpan.className = "country";
    countrySpan.textContent = data.sys.country;

    // Append spans to h1
    h1.appendChild(citySpan);
    h1.appendChild(countrySpan);

    const weatherInfoDiv = document.createElement("div");
    weatherInfoDiv.className = "weather-info";

    const h2 = document.createElement("h2");
    h2.className = "temp";
    h2.textContent =  Math.round(data.main.temp) + "°C";

    // Append h2 to weatherInfoDiv
    weatherInfoDiv.appendChild(h2);



    // create add info elements
    const addInfoDiv = document.createElement("div")
    addInfoDiv.className = "add_info"

    const addInfoFeels = document.createElement("p")
    addInfoFeels.className = "feels"
    addInfoFeels.style.color = "#000"
    addInfoFeels.style.fontSize = "24px"
    addInfoFeels.style.fontStyle = "italic"
    addInfoFeels.textContent = `It's feels like ${Math.round(data.main.feels_like)}°C `;

    const addInfoHumidity =document.createElement("p")
    addInfoHumidity.className = "humidity"
    addInfoFeels.style.color = "#333"
    addInfoFeels.style.fontSize = "24px"
    addInfoFeels.style.fontStyle = "italic"
    addInfoHumidity.textContent = `humidity ${data.main.humidity}%`;

    // Append P into AddInfoDiv
    addInfoDiv.appendChild(addInfoFeels)

    // Append h1 and weatherInfoDiv to weatherContainer
    weatherContainer.appendChild(h1);
    weatherContainer.appendChild(weatherInfoDiv);
    weatherContainer.appendChild(addInfoDiv)
    weatherContainer.appendChild(addInfoHumidity)

}


// After submit show the City Weather
form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        search.value = '';
        
        event.preventDefault();
    }
)