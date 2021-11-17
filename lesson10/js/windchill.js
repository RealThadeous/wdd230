const api = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bfec02243921903c293dcb0c1b72d77d&units=imperial'

fetch(api)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let windspeed = jsObject.list[0].wind.speed;
    let temp = jsObject.list[0].main.temp;

    if (temp <= 50 && windspeed > 3){
    let wc = 35.74 + 0.6215 * temp - 35.75 * (windspeed ** 0.16) + 0.4275 * temp * (windspeed ** 0.16);
    let ws = wc.toFixed(2);
    document.getElementById("windchill").textContent = `${ws}&deg;F`;
    }
    else{
        document.querySelector("#windchill").innerHTML = "N/A";
    }
});