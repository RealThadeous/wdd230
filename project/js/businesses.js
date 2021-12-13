var file = "js/business_profiles.json";

fetch(file)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const business = jsonObject['businesses'];
    for (let i of [0, 1 , 2, 3]) {
        let card = document.createElement('section');
        
        let name = document.createElement('h3');
        let website = document.createElement('p');
        let bio = document.createElement('p');
        let img = document.createElement('img');
        
        name.innerHTML = business[i].name;
        website.innerHTML = business[i].website;
        bio.innerHTML = business[i].bio;
        img.setAttribute('src', `images/${business[i].image}`);
        img.setAttribute('alt', `${business[i].name}`);
        
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(website);
        card.appendChild(bio);

        document.querySelector('div.bus-cards').appendChild(card);

        };
  });