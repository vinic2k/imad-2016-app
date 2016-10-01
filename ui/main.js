console.log('Loaded!');
// Change content of main-text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

// Move the image
var img = document.getElementById('vini');
img.onClick = function (){
    img.style.marginLeft = '100px';
}