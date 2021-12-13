var file = "js/business_profiles.json";

fetch(file)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const business = jsonObject['businesses'];
business.forEach((bus) => {
    let sec = document.createElement('section');
      
    let name = document.createElement('h3');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let bio = document.createElement('p');
    let img = document.createElement('img');

    name.innerHTML = bus.name;
    phone.innerHTML = bus.phone;
    website.innerHTML = bus.website;
    bio.innerHTML = bus.bio;
    img.setAttribute('src', `images/${bus.image}`);
    img.setAttribute('alt', `${bus.name}`);
    
    sec.appendChild(name);
    sec.appendChild(phone);
    sec.appendChild(img);
    sec.appendChild(website);
    sec.appendChild(bio);

    document.querySelector('div.directory-cards').appendChild(sec);

  });
});