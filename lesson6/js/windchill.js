let windspeed = parseFloat(document.querySelector("#windspeed").textContent);
let temp = parseFloat(document.querySelector("#temp").textContent);
let windchill = '';

if (temp <= 50 && windspeed > 3){
    wc = 35.74 + 0.6215 * temp - 35.75 * (windspeed ** 0.16) + 0.4275 * temp * (windspeed ** 0.16);
    windspeed = wc.toFixed(2) + " &deg; F";
    document.querySelector("#windchill").innerHTML = windspeed;
}
else{
    document.querySelector("#windchill").innerHTML = "N/A";
}
