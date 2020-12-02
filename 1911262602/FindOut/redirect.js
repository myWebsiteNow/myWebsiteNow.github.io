const FILE_PATH = "file:///Users/bennettlopez/Desktop/SECRET%20SANTA/1911262602/FindOut/names.txt"
var participants = [];

function run() {
    participants = readTextFile(FILE_PATH).split(/\r\n|\n/);
}



function done() {
    event.preventDefault();
    var display = "Name not found! Make sure its the first name/nickname";
    var name = document.getElementById("name").value;
    var i;
    console.log(participants);
    for (i = 0; i < participants.length; i++) {
        var currentLine = participants[i].split(",");
        if (currentLine[0] == name) {
            display = "You Got: <u>" + currentLine[1] + "</u> With The Nickname of: <u>" + currentLine[2] + "</u>";
        }
    }
    document.getElementById("topMessage").innerHTML = display;
}

function readTextFile(file) {
    var allText = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status === 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText
}