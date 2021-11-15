const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bfec02243921903c293dcb0c1b72d77d'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let K = jsObject.list[0].main.temp;
    let F = (K - 273.15) * 9/5 +32;
    document.getElementById('current-temp').textContent = F.toFixed(2);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });