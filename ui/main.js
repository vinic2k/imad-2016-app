console.log('Loaded!');
// Change content of main-text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

// Move the image
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
};
var img = document.getElementById('vini');
img.onclick = function (){
  var interval = setInterval(moveRight, 10);
};v