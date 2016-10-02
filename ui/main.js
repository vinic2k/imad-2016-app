console.log('Loaded!');
// Change content of main-text
// var element = document.getElementById('main-text');
// element.innerHTML = 'My name is Vineesh KP. This is the webapp I created for the Introduction to Modern Application Development course by Hasura.io and NPTEL. Thank you for visiting my page';

// // Move the image
// var marginLeft = 0;
// function moveRight (){
//     marginLeft = marginLeft + 1;
//     img.style.marginLeft = marginLeft + 'px';
// }
// var img = document.getElementById('vini');
// img.onclick = function (){
//   var interval = setInterval(moveRight, 1);
// };
// Counter code
var button = document.getElementById('counter');
button.onclick = function (){
      // Create a request object
      var request = new XMLHttpRequest();
      
      // Capture the response and store it in a variable
      request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        
        }
        // Not done yet; no action taken
        request.open('GET', 'http://vinic2k.imad.hasura-app.io/counter', true);
        request.send(null);
      };

};