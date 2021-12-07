var file = "js/business_profiles.json";

fetch(file)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const business = jsonObject['businesses'];
    business.forEach((bus) => {
        let card = document.createElement('section');
        
        let name = document.createElement('h3');
        let website = document.createElement('p');
        let bio = document.createElement('p');
        let img = document.createElement('img');
        
        name.innerHTML = bus.name;
        website.innerHTML = bus.website;
        bio.innerHTML = bus.bio;
        img.setAttribute('src', `images/${bus.image}`);
        img.setAttribute('alt', `${bus.name}`);
        
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(website);
        card.appendChild(bio);

        document.querySelector('div.bus-cards').appendChild(card);

        })      
        });