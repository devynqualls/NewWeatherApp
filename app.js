let weatherInput = document.getElementById("weatherInput");
const submitBtn = document.getElementById("submit");
let weatherDegree = document.getElementById("weatherDegree");
let weatherLocation = document.getElementById("weatherLocation");
let weatherIcon = document.getElementById("weatherIcon");
const Apikey = '156af92f32ba09e4e0287fd07eb7ea36';
let weatherDesc = document.getElementById("weatherDesc"); 


function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ weatherInput.value + '&appid=156af92f32ba09e4e0287fd07eb7ea36')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        weatherLocation.innerHTML = data['name'];
        weatherDesc.innerHTML = data["weather"][0]['description'];
        weatherDegree.innerHTML = data['main']['temp']
    })

    .catch(err => alert("No City Found! "))
}

submitBtn.addEventListener("click", getWeather)


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//156af92f32ba09e4e0287fd07eb7ea36