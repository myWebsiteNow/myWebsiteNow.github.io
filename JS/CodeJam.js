document.addEventListener('scroll', function(){ 
    updateOnScroll();
    scrollLogic();
});
  
$(document).ready(function(){
    $(".ProfPhoto").mouseenter(function() {
        $(this).stop(true).children().animate({height: '170px', width: '170'})
    })
    .mouseleave(function() {
        $(this).stop(true).children().animate({height: '150px',  width: '150'})
    });
});

function onLoad() {
    console.log("HERE");
    fadeText("WT_Header", "WT_Footer")
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

var once = true;
function updateOnScroll() {
    var position = window.pageYOffset || document.documentElement.scrollTop;
    if (position > 500 && once) {
        once = false;
    }    
}

function fadeText(titleElement, bodyElement) {
    var title = document.getElementById(titleElement);
    var body = document.getElementById(bodyElement);
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
            title.style.opacity = String(opacityTitle)
            body.style.opacity = String(opacitySub)
        }
    }
}