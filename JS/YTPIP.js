let v = document.querySelector('video');
v.addEventListener('webkitpresentationmodechanged', (e)=>e.stopPropagation(), true);

setTimeout(()=>v.webkitSetPresentationMode('picture-in-picture'), 3000);

completion()