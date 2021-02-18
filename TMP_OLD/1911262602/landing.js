const EXIT_MESSAGE = "Thanks For Participating! See you Next Year!";
const CUT_OFF_DAY = 7;
const DECEMBER = 12;
const REGISTER_URL = "https://mywebsitenow.github.io/1911262602/Register/index.html"
const FIND_URL = "https://mywebsitenow.github.io/1911262602/FindOut/index.html"
 
function addPerson() {
    location.href = REGISTER_URL;
}

function whoYouGot() {
    location.href = FIND_URL;
}

function run() {
    event.preventDefault();
    var banner = document.getElementById("bottom_banner");
    var signup = document.getElementById("signup");
    var ending = document.getElementById("ending");
    
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    month = month + 1;
    
    // If the month is december
    if (month == DECEMBER) {
        // If before a date: Signup phase
        if (day < CUT_OFF_DAY) {
            banner.innerHTML = (CUT_OFF_DAY - day) + " Days Until The Reveal!"
            signup.setAttribute("onclick", "addPerson()");
            ending.setAttribute("onclick", "");
        }
        // If after a date: Find out who you got phase
        else {
            banner.innerHTML = "See Who You Got!"
            signup.className = "btn btn-info btn-lg disabled"
            ending.className = "btn btn-info btn-lg"
            signup.setAttribute("onclick", "");
            ending.setAttribute("onclick", "whoYouGot()");
        }
    }
    else {
        banner.innerHTML = EXIT_MESSAGE;
    }
}
