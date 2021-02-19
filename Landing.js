


function onLoad() {
    // This sets the inital opacity of the text to 0
    var titleElement = document.getElementById("BC_Title");
    var bodyElement = document.getElementById("BC_Body");
    titleElement.style.opacity = "0.0";
    bodyElement.style.opacity = "0.0";
    
    window.addEventListener('scroll', function() {
        scrollLogic();
    });
    animateCode();
    iconClick()
    fadeText(titleElement, bodyElement);
    clockUpdate();
}

function scrollLogic() {
    var header = document.getElementById('Head_Container');
    var offset = header.offsetTop;
    // Distance of headder from top of page
    
    if (window.pageYOffset > offset) {
        header.classList.add("sticky");
    } 
    else {
        header.classList.remove("sticky");
    }
}

function iconClick() {
    var title = document.getElementById("info");
    console.log(title)
    var isClicked = false;
    var id = setInterval(frame, 800);
    function frame() {
        if (false) {
            clearInterval(id);
        } 
        else {
            if (isClicked) {
                title.innerHTML = "<p style=\"display:inline-block;color:#F6C639;\" id=\"info\">&nbsp;I</p>";
                isClicked = false;
            }
            else {
                title.innerHTML = "<p style=\"display:inline-block;color:#f5f4f1;\" id=\"info\">&nbsp;I</p>";
                isClicked = true;
            }
        }
    }
}

function animateCode() {
    var lengthOfString = codeSnipit.length;
    var currentIndex = 0;
    var output = document.getElementById("C1_Code");
    var linebreak = document.createElement("br");
    
    var id = setInterval(frame, 30);
    function frame() {
        if (currentIndex >= lengthOfString) {
            clearInterval(id);
        }
        else {
            
            if (codeSnipit[currentIndex] == "!" & codeSnipit[currentIndex + 1] == "!") {
                //output.appendChild(linebreak);
                output.appendChild(linebreak);
                currentIndex = currentIndex + 1;
            }
            else if (codeSnipit[currentIndex] == " ") {
                output.innerHTML = output.innerHTML + "&nbsp;";
            }
            else {
                output.innerHTML = output.innerHTML + codeSnipit[currentIndex];
            }
        }
        currentIndex = currentIndex + 1;
    }
}

function fadeText(titleElement, bodyElement) {
    var opacityTitle = 0.0;
    var opacitySub = 0.0;
    
    
    var id = setInterval(frame, 30);
    function frame() {
        if (opacityTitle > 1 && opacitySub > 1) {
            clearInterval(id);
        }
        else {
            opacityTitle = opacityTitle + 0.02;
            opacitySub = opacitySub + 0.02;
            titleElement.style.opacity = String(opacityTitle)
            bodyElement.style.opacity = String(opacitySub)
        }
    }
}

function clockUpdate() {
    var time = document.getElementById("C2_Countdown");
    var today = new Date();
    var endDate = new Date(2021, 2, 19, 0, 0, 0, 0)
    var timeDifference = Math.abs(today - endDate);
    if (timeDifference < 0) {
        time.innerHTML = "See You <p style=\"display:inline-block; color:black;\">Next</p> Year!"
    }
    var numDays = timeDifference / 86400000
    numDays = parseInt(numDays, 10)
    timeDifference = timeDifference - (numDays * 86400000)
    
    var numHours = timeDifference / 3600000
    numHours = parseInt(numHours, 10)
    timeDifference = timeDifference - (numHours * 3600000)
    
    var numMinutes = timeDifference / 60000
    numMinutes = parseInt(numMinutes, 10)
    timeDifference = timeDifference - (numMinutes * 60000)
    
    var numSeconds = timeDifference / 1000
    numSeconds = parseInt(numSeconds, 10)
    
    time.innerHTML = "<p style=\"display:inline-block; color:black;\">" + String(numDays) + " Day&nbsp;</p>" + String(numHours) + " Hours <p style=\"display:inline-block; color:black;\">" + String(numMinutes) +" Minutes</p> " + String(numSeconds) + " Seconds</div>"
    
    var id = setInterval(frame, 1000);

    function frame() {
        if (false) {
            clearInterval(id);
        } 
        else {
            numSeconds = numSeconds - 1;
            
            time.innerHTML = "<p style=\"display:inline-block; color:black;\">" + String(numDays) + " Day&nbsp;</p>" + String(numHours) + " Hours <p style=\"display:inline-block; color:black;\">" + String(numMinutes) +" Minutes</p> " + String(numSeconds) + " Seconds</div>"
        }
        if (numSeconds <= 0) {
            numMinutes = numMinutes - 1;
            numSeconds = 59;
        }
        
        if (numMinutes <= 0) {
            numHours = numHours - 1;
            numMinutes = 59;
        }
        
        if (numHours <= 0) {
            numDays = numDays - 1;
            numHours = 59;
        }
        
        
    }
    
    
}






var codeSnipit = "Python:!!    # Load the CodeJam into memory!!    codeJameBinary = open(\"C://CodeJam\", \"r\");!!!!   for Coders in codeJameBinary:!!        if Coders == Awesome:   !!            Jump(Java)!!        else:!!            pass #There is no else ;)!!Java: !!    Public Static void main() {!!        System.out.print(\"We take all the awesome coders\");!!        Coder<IsAwsome> you = new Coder<IsAwsome>(\"Let's Code Jam\");!!        if (you.isReady()) {!!            Jump(C++)!!        }!!    }!!    !!C++!!    #include <stdio.h>!!    int main( int argc, const char* argv[] ) {!!        for (int i = 0; i < argc; ++i)  {!!            if (argv[i] == \"Let's Have Fun Coding & Jamming\") {!!                exit(0)!!            }!!        }!!    }"

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}



