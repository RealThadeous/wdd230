var eventURL = "js/events.json";

fetch(eventURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const events = jsonObject['events'];
    events.forEach((event) => {
        let card = document.createElement('section');
        
        let name = document.createElement('h3');
        let date = document.createElement('p');
        let time = document.createElement('p');
        let details = document.createElement('p');
        let website = document.createElement('p');

        name.innerHTML = `${event.name}`;
        date.innerHTML = `Date: ${event.date}`;
        time.innerHTML = `Time: ${event.time}`;
        details.innerHTML = `Details: ${event.details}`;
        website.innerHTML = `Website: ${event.website}`;

        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(time);
        card.appendChild(details);
        card.appendChild(website);

        document.querySelector('div.event-cards').appendChild(card);

        })      
        });