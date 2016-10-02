console.log('Loaded!');
// Change content of main-text
var element = document.getElementById('main-text');
element.innerHTML = 'My name is Vineesh KP. This is the webapp I created for the Introduction to Modern Application Development course by Hasura.io and NPTEL. Thank you for visiting my page';

// Move the image
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
var img = document.getElementById('vini');
img.onclick = function (){
  var interval = setInterval(moveRight, 1);
};