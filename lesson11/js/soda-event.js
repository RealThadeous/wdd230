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
        
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        
        event1.innerHTML = `${towns[i].events[0]}`;
        event2.innerHTML = `${towns[i].events[1]}`;
        event3.innerHTML = `${towns[i].events[2]}`;
        
        card.appendChild(event1);
        card.appendChild(event2);
        card.appendChild(event3);

        document.querySelector('div.event').appendChild(card);

        }      
        });