 const EXTENSION = "file:///Users/bennettlopez/Desktop/SECRET%20SANTA/"
 
 
 function formInput() {
    event.preventDefault();
    //window.open("http://google.com", "_self");
    var formInputUser = document.getElementById("inOne").value;
    var formInputPass = document.getElementById("inTwo").value;
    
    var hash = stringToHash(formInputPass);
    var newDirectory;
    if (formInputUser == "Steven Asker") {
        if (hash == 506058779) {
            newDirectory = stringToHash(formInputPass + "Salty-Salt-Why")
            console.log("NEW DIRECTORY: " + Math.abs(newDirectory));
            location.href = EXTENSION + Math.abs(newDirectory) + "/index.html";
            
        }
        else {
            location.reload();
        }
    }
    else {
        location.reload();
    }
    console.log("USERNAME: " + formInputUser);
    console.log("PASSWORD: " + formInputPass);
    console.log("HASH: " + stringToHash(formInputPass));
 }
 
 
 
 function stringToHash(string) { 
    var hash = 0; 

    for (i = 0; i < string.length; i++) { 
        char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
    return hash; 
} 