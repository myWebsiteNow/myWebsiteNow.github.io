var currentStartingDate;
var currentStartingMonth;
var currentStartingDay;
var currentStartingYear;
var showDate = false;
var currentRoll;
var start = true;

/**
 * This method starts/restarts the calendar
 */
function run() {
    
    var date = new Date();
    currentRoll = 0;
    currentStartingDate = date.getDate();
    currentStartingMonth = date.getMonth();
    currentStartingDay = date.getDay();
    currentStartingYear = date.getYear();
    
    console.log(currentStartingMonth + "/" + currentStartingDate);
    
    fillOutTime(date.getMonth(), date.getDay());
    
    if (start) {
        // Call DB and get data for user
        
        // addCategory("Tests");
        // addCategory("Quiz");
        // addCategory("Homework");
    
        // addCategoryLineItem("Tests", "id#1", "blue");
        // addCategoryLineItem("Quiz", "id#2", "green");
        // addCategoryLineItem("Homework", "id#3", "red");
        start = false;
    }
    
    getTasks();
    
}

/**
 * This function should get the tasks from the DB for the current week, and display them
 */
function getTasks() {
    // Get the tasks for the week from DB using DMY
    connectToDB();
    // populateTask(1, "Finish the description", "#FFF2CC", "Quiz", "1", "1", "1");
    // populateTask(1, "Review For Testing", "#D9EAD3", "Tests", "2", "2", "2");
    // populateTask(1, "Net admin ch 13", "#6FA8DC", "Homewok", "3", "3", "3");
    // populateTask(1, "Review For OS", "#F4CCCC", "Quiz", "4", "4", "4");
    
    // populateSmallTask(2, "Review For OS", "#F4CCCC", "SmallQuiz", "5", "1", "5");
}


/**
 * currentDayNumber: This is the number for the name of the DOTW
 * tDescription: This is the description of the task
 * tColor: This is the color of the task (Corresponds to category)
 * tCategory: This is the category of the task
 * tGroupID: This is the uneque ID of the task
 * numTasks: This is the current number of tasks in the day (Starting at one)
 * tID: This is the uneque ID for the task
 */
function populateTask(currentDayNumber, tDescription, tColor, tCategory, tGroupID, numTasks, tID) {
    var taskList = document.getElementById("tasks" + currentDayNumber);
    console.log("tasks" + currentDayNumber);
    // HTML
    taskList.innerHTML += "<div class = \"Class"+ tGroupID +"\" id = \"Id"+ tID +"\"> <b>" + tCategory + "</b><br>" + tDescription + " </div>";
    // CSS
    console.log(numTasks +"/"+ (parseInt(numTasks) + 1));
    taskList.innerHTML += "<style>  #Id"+ tID +"{ grid-column: 1; grid-row: "+ numTasks +"/"+ (parseInt(numTasks) + 1) +"; background-color: "+ tColor +"; border-radius: 25px; padding: 20px; font-size: 20px ;}</style>";
    
    // Change the inner grid options
    document.getElementById("tasks" + currentDayNumber).style.gridTemplateRows = "repeat(4, 200px)";
}

/**
 * This method is the same as populateTask(), but in the smaller sections w/o the text
 */
function populateSmallTask(currentDayNumber, tDescription, tColor, tCategory, tGroupID, numTasks, tID) {
    var taskList = document.getElementById("tasks" + currentDayNumber);
    console.log("tasks" + currentDayNumber);
    // HTML
    taskList.innerHTML += "<div class = \"Class"+ tGroupID +"\" id = \"Id"+ tID +"\"> <b>" + tCategory + "</b><br>" + tDescription + " </div>";
    // CSS
    console.log(numTasks +"/"+ (parseInt(numTasks) + 1));
    taskList.innerHTML += "<style>  #Id"+ tID +"{ grid-column: 1; grid-row: "+ numTasks +"/"+ (parseInt(numTasks) + 1) +"; background-color: "+ tColor +"; border-radius: 25px; padding: 20px; font-size: 1px; color: yellow;} </style>";
    
    // Change the inner grid options
    document.getElementById("tasks" + currentDayNumber).style.gridTemplateRows = "repeat(4, 150px)";
}

/**
 * This function is used internally (run()) to add a category 
 */
function addCategory(category) {
    var cat = document.getElementById("categories");
    cat.innerHTML += "<h3>" + category + "</h3>";
    cat.innerHTML += "<ul style=\"list-style-type:none;\" id = \"" + category + "\"> </ul>";
}

/**
 * This function is used interally to add a line item to the category
 */
function addCategoryLineItem(category, name, color) {
    var cat = document.getElementById(category);
    cat.innerHTML += "<li id = \"" + name + "\"><li>";
    drawCircle(name, color);
}

/**
 * This function draws the circle for the category TODO: Fix the color issue
 */
function drawCircle(name, color) {
    var circle = document.getElementById(name);
    circle.innerHTML = "<img src=\"circle.gif\" width=\"35\" height=\"35\">";
}

/**
 * This function is used to fill out the labels for the days
 */
function fillOutTime(month, startDay) {
    
    updateMonth(month);
    
    var currentDay = startDay;
    
    document.getElementById("d1").innerHTML = getDayLong(currentDay);
    currentDay = incrementTheDay(currentDay);
    for (var i = 2; i <=7; i++) {
        document.getElementById("d" + i).innerHTML = getDayShort(currentDay);
        currentDay = incrementTheDay(currentDay);
    }
}

/**
 * This function gets the name of the Month
 */
function getMonth(currentMonth) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
    return month[currentMonth];
    
}

/**
 * This function gets the long name of the day
 */
function getDayLong(currentDay) {
    var day = new Array();
    day[2] = "Monday";
    day[3] = "Tuesday";
    day[4] = "Wednesday";
    day[5] = "Thursday";
    day[6] = "Friday";
    day[7] = "Saturday";
    day[1] = "Sunday";
    
    return day[currentDay];
}

/**
 * This function gets the short of the day
 */
function getDayShort(currentDay) {
    var date = new Date();
    var day = new Array();
    day[2] = "M";
    day[3] = "Tu";
    day[4] = "W";
    day[5] = "Th";
    day[6] = "F";
    day[7] = "Sa";
    day[1] = "Su";
    
    return day[currentDay];
}

/**
 * This function rolls over the DAY (NOT THE DATE)
 */
function incrementTheDay(currentDay) {
    currentDay = currentDay + 1;
    if (currentDay > 7) {
        currentDay = 1;
    }
    return currentDay;
}

/**
 * This function rolls over the date (NOT THE DAY)
 */
function validDate(day, month) {
    var months = new Array();
    months[0] = 31;
    months[1] = 28;
    months[2] = 31;
    months[3] = 30;
    months[4] = 31;
    months[5] = 30;
    months[6] = 31;
    months[7] = 31;
    months[8] = 30;
    months[9] = 31;
    months[10] = 30;
    months[11] = 31;
    
    // Roll over the months (i.e 1 - 7 = -6 will result in the 5th)
    if (months[month] < day) {
        console.log("IN");
        var tmp = 0;
        while (months[month] < day) {
            tmp++;
            day--;
        }
        
        day = tmp;
        
        if (month == 11) {
            month = 1;
        }
        else {
            month++;
        }
    }
    
    // If the date goes negative
    if (day <= 0) {
        if (month == 0) {
            month = 11;
        }
        else {
            month--;
        }
        
        day = months[month] + day;
    }
    
    // Incrememnting / Decrementing the year
    if (day == 31 && month == 11) {
        currentStartingYear += currentRoll;
        updateMonth(month);
    }
    return [day, month]
}

/**
 * This function either adds 7 or subtracts 7 from the date
 */
function rollDates(backForward) {
    
    currentRoll = backForward;
    // Put the name of the days
    fillOutTime (currentStartingMonth, currentStartingDay);
    
    // Add 7 to the time
    if (backForward > 0) {
        currentStartingDate = currentStartingDate + 7;
    }
    else {
        currentStartingDate = currentStartingDate - 7;
    }
    
    // Validate the days
    var tmp = validDate(currentStartingDate, currentStartingMonth);
    
    // Change the starting positions
    currentStartingDate = tmp[0];
    currentStartingMonth = tmp[1];
    
    if (showDate) {
        showDate = false;
        showDates();
    }
    
    // Call server to update the tasks
    getTasks();
}

/**
 * This function this method shows the date/ updates the current date
 */
function showDates() { 
    if (!showDate) {
        showDate = true;
        var tmp = validDate(currentStartingDate, currentStartingMonth);
    
    
        for (var i = 1; i <= 7; i++) {
            document.getElementById("d" + i).innerHTML += " " + (parseInt(tmp[1]) + 1) + "/" + tmp[0];
            tmp[0]++;
            tmp = validDate(tmp[0], tmp[1]);
        }
    }
    else {
        showDate = false;
        fillOutTime (currentStartingMonth, currentStartingDay);
    }
}

/**
 * This function updates the month and the year
 */
function updateMonth(month) {
    var current_date = getMonth(month);
    var formattedDate = "";
    
    var x = 0;
    while (x < current_date.length) {
        formattedDate = formattedDate.concat(current_date.charAt(x));
        formattedDate = formattedDate.concat(" ");
        
        x++;
    }
    formattedDate = formattedDate.concat("&nbsp;&nbsp;&nbsp;");
    formattedDate = formattedDate.concat(String(parseInt(currentStartingYear) + 1900))
    
    console.log(formattedDate);
    document.getElementById("month").innerHTML = formattedDate;
}

function connectToDB() {
    console.log("--1--");
    
    const {Client} = require('pg');
    const client = new Client({
      user: 'postgres',     // Username
      host: 'localhost',    // The IP
      database: 'postgres',     // The DB
      password: 'password', // Password for the user
      port: 5432,           // port
    })
    
    
    client.connect()
        .then(() => console.log("CONNECTION SUCCESSFUL"))
        .catch(e => console.log(e))
        .finally(() => client.end)
        

    // pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     response.status(200).json(results.rows)
    //     })
    // }
}
























