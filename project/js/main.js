/*--------------------CODE FOR LAST UPDATED DATE ---------------------------------*/

var x = document.lastModified;
document.getElementById("currentDate").innerHTML = x;

/*--------------------CODE FOR MENU RESPONSIVENESS ---------------------------------*/

function toggleMenu() {
document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}


/*--------------------CODE FOR RATING ---------------------------------*/

function adjustRating(rating) {
document.getElementById("ratingvalue").innerHTML = rating;
}

/*--------------------CODE FOR CONTACT FORM COMPLETE MESSAGE ---------------------------------*/

var nextStep = document.querySelector('#nextStep');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('my_form').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
  });