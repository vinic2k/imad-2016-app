// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
      // Create a request object
      var request = new XMLHttpRequest();
      
      // Capture the response and store it in a variable
      request.onreadystatechange = function () {
        if(request.readystate === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = count.toString();
            }
        
        }
        // Not done yet; no action taken
      };
    // Make the request
         request.open('GET', 'http://vinic2k.imad.hasura-app.io/counter', true);
         request.send(null);
};