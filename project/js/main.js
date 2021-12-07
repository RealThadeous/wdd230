/*--------------------CODE FOR CURRENT DATE ---------------------------------*/

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

/*--------------------CODE FOR MENU RESPONSIVENESS ---------------------------------*/

function toggleMenu() {
document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}


/*--------------------CODE FOR RATING ---------------------------------*/

function adjustRating(rating) {
document.getElementById("ratingvalue").innerHTML = rating;
}

