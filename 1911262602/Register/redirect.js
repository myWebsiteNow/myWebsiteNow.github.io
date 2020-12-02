const BACK = "file:///Users/bennettlopez/Desktop/SECRET%20SANTA/1911262602/index.html";
const AGAIN = "file:///Users/bennettlopez/Desktop/SECRET%20SANTA/1911262602/Register/index.html";

function action(num) {
    if (num == 1) {
        location.href = BACK;
    }
    else {
        location.href = AGAIN;
    }
    
}