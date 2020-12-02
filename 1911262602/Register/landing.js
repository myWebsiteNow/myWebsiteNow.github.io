const ADULT = "Adult";
const KID = "Kid"
const DEFAULT = ""
const RE_DIRECT = "file:///Users/bennettlopez/Desktop/SECRET%20SANTA/1911262602/Register/redirect.html"

var currentGroup = DEFAULT;

function run() {
   document.getElementById("submit").disabled = true;
}


function disableButton(type) { 
    currentGroup = type;
    document.getElementById("submit").disabled = false;
    if (currentGroup == ADULT) {
        document.getElementById(KID).className = "btn btn-success btn-lg disabled";
        document.getElementById(ADULT).className = "btn btn-success btn-lg";
    }
    else {
        document.getElementById(KID).className = "btn btn-success btn-lg";
        document.getElementById(ADULT).className = "btn btn-success btn-lg disabled";
    }
}

function formInput() {
    document.getElementById("submit").disabled = true;
    document.getElementById(KID).disabled = true;
    document.getElementById(ADULT).disabled = true;
    event.preventDefault();
    var name = document.getElementById("fname").value;
    var nickname = document.getElementById("nickname").value;
    sendEmail(name, nickname, currentGroup);
 }
 
 
 
 function sendEmail(name, nickname, group) { 
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "lopez.asker.secretsanta@gmail.com", 
        Password: "GJMio4RyoAK7nAZkcsNRtUpDyTOFxJ9Ue25khEj6c2KNi8REIxw0tC6227UqpWqLB6cew7xh3ptX2hKcupYNNbAgR1EajVifAf", 
        To: 'lopez.asker.secretsanta@gmail.com', 
        From: "lopez.asker.secretsanta@gmail.com", 
        Subject: "SS", 
        Body: name + "," + nickname + "," + group + "\n" , 
    }) 
    .then(function (message) { 
        location.href = RE_DIRECT;
    }); 
} 