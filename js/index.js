// let searchButton = document.querySelector(".searchBtn");

// searchButton.addEventListener("submit", () =>{
//     showWeather(searchBox.value)
// });


function showWeather() {
    const api = "ee6e548d6782897f9330820c9df79ce6";
    const cityInput = document.querySelector(".cityInput").value;
    console.log(cityInput);
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Dhaka&appid=${api}`;
    console.log(url);


    fetch(url)
        .then((response) => response.json())
        .then((data) => {    
            console.log(data)
            document.querySelector(".city").innerHTML = data.name + ",";
            document.querySelector(".country").innerHTML = data.sys.country;
            document.querySelector(".temp").innerHTML = data.main.temp + "°";
            document.querySelector(".feels").innerHTML = `It's feels like ${data.main.feels_like }° `;
            document.querySelector(".humidity").innerHTML = `humidity ${data.main.humidity}°`;
        })
}

showWeather();
