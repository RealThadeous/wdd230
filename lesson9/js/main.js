// var x = document.lastModified;
// document.getElementById("currentdate").innerHTML = x;


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

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}

let today = new Date();
dayOfWeek = today.getDay();
msg = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
if (dayOfWeek == 5) {
    document.getElementById("message").style.display = "block";
    document.getElementById("message").textContent = msg;
} else {
    document.getElementById("message").style.display = "none";
} 

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}