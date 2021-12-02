// var x = document.lastModified;
// document.getElementById("currentdate").innerHTML = x;


    const options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
              
    }; 
    const theYear = {
        year: 'numeric'
    }
    document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-UK", options);
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-UK", theYear);

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}

let today = new Date();
dayOfWeek = today.getDay();
msg = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
if (dayOfWeek == 5) {
    document.getElementById("message").style.display = "block";
    document.getElementById("message").textContent = msg;
} else {
    document.getElementById("message").style.display = "none";
} 

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

/*---------------- CODE FOR 5 DAY FORECAST --------------------------*/ 
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
var fourDays  = new Date(date.getTime() + 4 * 24 * 60 * 60 * 1000);
var fiveDays  = new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000);
document.getElementById('day1').innerHTML = weekday[tomorrow.getDay()];
document.getElementById('day2').innerHTML = weekday[twoDays.getDay()];
document.getElementById('day3').innerHTML = weekday[threeDays.getDay()];
document.getElementById('day4').innerHTML = weekday[fourDays.getDay()];
document.getElementById('day5').innerHTML = weekday[fiveDays.getDay()];



var eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i of [0, 2, 6]) {
        let card = document.createElement('section');
        let data = document.createElement('article');
        let name = document.createElement('h2');
        let year = document.createElement('h4');
        let population = document.createElement('h4');
        let rain = document.createElement('h4');
        let img = document.createElement('img');

        name.innerHTML = `${towns[i].name}`;
        year.innerHTML = `Year Founded: ${towns[i].yearFounded}`;
        population.innerHTML = `Population: ${towns[i].currentPopulation}`;
        rain.innerHTML = `Annual Rain Fall ${towns[i].averageRainfall}`;
        img.setAttribute('src', `images/${towns[i].photo}`);
        img.setAttribute('alt', `${towns[i].name}`);

        data.appendChild(name);
        data.appendChild(year);
        data.appendChild(population);
        data.appendChild(rain);
        card.appendChild(img);

        card.appendChild(data)

        document.querySelector('div.cards').appendChild(card);

        }      
        });