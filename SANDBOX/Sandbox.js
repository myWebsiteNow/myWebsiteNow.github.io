document.addEventListener('scroll', function(){ sandbox() });




function loadAnimation(ID) {
    const selector = document.querySelector('#rawPhoto')
    selector.classList.add('magictime', 'spaceInLeft')
}


function onLoad() {
    document.getElementById("photo").style.opacity = 0;
}

function sandbox() {
    var position = window.pageYOffset || document.documentElement.scrollTop;
    if (position > 180) {
        setTimeout(function() {document.getElementById("photo").style.opacity = 1;}, 1)
        setTimeout(function(){loadAnimation("photo")}, 0);
    }
    console.log(window.pageYOffset || document.documentElement.scrollTop);
}