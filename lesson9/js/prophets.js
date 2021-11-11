const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('h4');
        let place = document.createElement('h4');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        place.innerHTML = `Place of Birth: ${prophet.birthplace}`;
        img.setAttribute('src', `${prophet.imageurl}`);
        img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);


        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
        });
    });
