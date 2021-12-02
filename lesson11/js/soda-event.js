var eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i of [0]) {
        let card = document.createElement('section');
        
        let name = document.createElement('h2');
        let year = document.createElement('h4');
        let population = document.createElement('h4');
        let rain = document.createElement('h4');
        let img = document.createElement('img');

        name.innerHTML = `${towns[i].events}`;

        card.appendChild(name);

        document.querySelector('div.event').appendChild(card);

        }      
        });