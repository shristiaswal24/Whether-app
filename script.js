function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a location");
        return;
    }

    const apiKey = "06914bb7337741399d273304260502";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherCard").style.display = "block";

            document.getElementById("city").innerText = data.location.name;
            document.getElementById("temp").innerText = data.current.temp_c + "°C";
            document.getElementById("condition").innerText = data.current.condition.text;
            document.getElementById("humidity").innerText = data.current.humidity;
            document.getElementById("wind").innerText = data.current.wind_kph;
            document.getElementById("icon").src = data.current.condition.icon;
        })
        .catch(error => {
            alert("Location not found ❌");
        });
}
