const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i of [0, 2, 6]) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let year = document.createElement('h4');
        let population = document.createElement('h4');
        let rain = document.createElement('h4');
        let img = document.createElement('img');

        name.innerHTML = `${towns[i].name}`;
        year.innerHTML = `Year Founded: ${towns[i].yearFounded}`;
        population.innerHTML = `Population: ${towns[i].population}`;
        rain.innerHTML = `Annual Rain Fall ${towns[i].averageRainfall}`;
        img.setAttribute('src', `${towns[i].photo}`);
        img.setAttribute('alt', `${towns[i].name}`);

        card.appendChild(name);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rain);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
        }      
        });


// const townsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// fetch(townsURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject); 
//     const towns = jsonObject['towns'];
//     if (towns.name == 'Preston') ()=> }
        
//         let card = document.createElement('section');
//         let name = document.createElement('h2');
//         let year = document.createElement('h4');
//         let population = document.createElement('h4');
//         let rain = document.createElement('h4');

//         name.innerHTML = `${town.name}`;
//         year.innerHTML = `Year Founded: ${town.yearFounded}`;
//         population.innerHTML = `Population: ${town.population}`;
//         rain.innerHTML = `Annual Rain Fall ${town.averageRainfall}`;


//         card.appendChild(name);
//         card.appendChild(year);
//         card.appendChild(population);
//         card.appendChild(rain);

//         document.querySelector('div.cards').appendChild(card);
//         }));
//     });