// Make Sure that the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function(event) { 
    // Stuf to do onload
});


window.addEventListener('scroll', function() {
    scrollLogic();
});


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
    animateCode();
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
                console.log("Click");
                isClicked = false;
            }
            else {
                title.innerHTML = "<p style=\"display:inline-block;color:#f5f4f1;\" id=\"info\">&nbsp;I</p>";
                console.log("Un-Click");
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


var codeSnipit = "    # Open the CSV file. This assumes that its comma separated !!   with open(args.path, newline='') as csvFile:!!        csvRows = csv.reader(csvFile, delimiter=',')!!        for currentRow in csvRows:!!            if numElement == 0:!!                pass    # The Header Line!!            else:!!                # Get the different service types in the file!!                if float(currentRow[5]) < minSalary:!!                    minSalary = float(currentRow[5])!!                elif float(currentRow[5]) > maxSalary:!!                    maxSalary = float(currentRow[5]);!!!!                if currentRow[3] not in serviceTypes:!!                    serviceTypes.append(currentRow[3])!!                    serviceTypeCounts.append(0)!!                    serviceAveragePay.append(0)!!                    partTimeAverageOmission.append(0)!!                    partTimeNumberOmission.append(0)!!                    totalSalaries.append([])!!                index = serviceTypes.index(currentRow[3])!!                # Add a count of the number of workers in each service!!                serviceTypeCounts[index] += 1!!                # Add the Average to the category of service!!                serviceAveragePay[index] += float(currentRow[5])!!                totalSalaries[serviceTypes.index(currentRow[3])].append(float(currentRow[5]));!!                if currentRow[4] != \"Part-Time\":!!                    partTimeNumberOmission[index] += 1;!!                   partTimeAverageOmission[index] += float(currentRow[5]);!!!!            numElement += 1!!    # Calculate the average for all workers!!    for i in range(0, len(serviceAveragePay)):!!        serviceAveragePay[i] = round(serviceAveragePay[i] / serviceTypeCounts[i], 2)!!    # Calculate the average for full time workers!!    for i in range(0, len(partTimeAverageOmission)):!!        partTimeAverageOmission[i] = round(partTimeAverageOmission[i] / partTimeNumberOmission[i], 2) "




