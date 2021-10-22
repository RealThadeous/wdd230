let t = parseFloat(document.querySelector("#temp").textContent);
let ws = parseFloat(document.querySelector("#windspeed").textContent);
let wc = '';
if (t <= 50 && ws > 3){
    wind_chill = 35.74 + 0.6215 * t - 35.75 * (ws ** 0.16) + 0.4275 * t * (ws ** 0.16);
    ws = wind_chill.toFixed(2) + " &deg; F";
    document.querySelector("#windchill").innerHTML = ws;
}
else{
    document.querySelector("#windchill").innerHTML = "N/A";
}
