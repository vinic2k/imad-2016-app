
function loadLoginForm () {
    var loginHtml = `
    <div class="container">
      <div class="row">
        <section class="col-xs-12">
    
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-2 control-label" for="inputName">username</label>
              <div class="col-sm-10">
                <input class="form-control" type="text" id="username" placeholder="username">
              </div>
            </div>
    
            <div class="form-group">
              <label class="col-sm-2 control-label" for="inputPassword">password</label>
              <div class="col-sm-10">
                <input class="form-control" type="password" id="password" placeholder="password">      
              </div>
            </div>
    
    
            <div class="form-group">
              <div class="col-sm-10 col-sm-offset-2">
                <input type="submit" id="login_btn" class="btn btn-default" value="Login">
              </div>
            </div>
    
            <div class="form-group">
              <div class="col-sm-10 col-sm-offset-2">
                <input type="submit" id="register_btn" class="btn btn-default" value="Register">
              </div>
            </div>
    
          </form>
    
        </section>
      </div><!-- row -->   
    </div><!-- content container -->
                `;
    document.getElementById('login_area').innerHTML = loginHtml;

    // Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();

        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }
          // Not done yet
        };

        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));
        submit.value = 'Logging in...';

    };

    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();

        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };

        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));
        register.value = 'Registering...';

    };
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };

    request.open('GET', '/check-login', true);
    request.send(null);
}


// The first thing to do is to check if the user is logged in!
loadLogin();
