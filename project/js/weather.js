const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-33.963&lon=22.4617&appid=bfec02243921903c293dcb0c1b72d77d&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    temp = jsObject.current.temp;
    document.getElementById('temp').textContent = temp.toFixed(0);
    document.getElementById('currently').textContent = jsObject.current.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
   
    // let alerts = jsObject['alerts'];
    //   {
    //     let card = document.createElement('section')

    //     let alert = document.createElement('p');
    //     let details = document.createElement('p');

    //     alert.innerHTML = `Alert: ${alerts.event}`;
    //     details.innerHTML = alerts.description;

    //     card.appendChild(alert);
    //     card.appendChild(details);

    //     document.querySelector('span.message').appendChild(card);
    //   }
    
    let forecast = jsObject['daily'];
    for (let i of [0, 1, 2]) {
        let td = document.createElement('td');
        let img = document.createElement('img');
        let high = document.createElement('span');
        const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';  
        const desc = forecast[i].weather[0].description;  
        
        img.setAttribute('src', imagesrc);
        img.setAttribute('alt', desc);
        high.innerHTML = `${forecast[i].temp.day.toFixed(0)}&deg;F`;

        td.appendChild(img);
        td.appendChild(high);

        document.querySelector('tr.forecast-td').appendChild(td);
    }
  });

var date =new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
var twoDays = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
var threeDays  = new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000);
document.getElementById('day1').innerHTML = weekday[tomorrow.getDay()];
document.getElementById('day2').innerHTML = weekday[twoDays.getDay()];
document.getElementById('day3').innerHTML = weekday[threeDays.getDay()];