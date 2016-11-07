var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'vinic2k',
    database: 'vinic2k',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
  title: 'Article One | Vineesh KP',
  heading: 'Article One',
  date: 'Sep 5 2016',
  content:`
   <p>
     In this article we are going to talk about server side programming to make urls.
   </p>
   <p>
     In this article we are going to talk about server side programming to make urls.
   </p>
   <p>
     In this article we are going to talk about server side programming to make urls.
   </p>
   <p>
     In this article we are going to talk about server side programming to make urls.
   </p>
   <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </p>
   <p>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </p>`
 },

 'article-two': {
   title: 'Article Two | Vineesh KP',
   heading: 'Article Two',
   date: 'Sep 10 2016',
   content:`
    <p>
      In this article we are going to talk about server side programming to make urls.
    </p>
    <p>
      In this article we are going to talk about server side programming to make urls.
    </p>
    <p>
      In this article we are going to talk about server side programming to make urls.
    </p>
    <p>
      In this article we are going to talk about server side programming to make urls.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>`
  },


  'article-three': {
    title: 'Article Three | Vineesh KP',
    heading: 'Article Three',
    date: 'Sep 15 2016',
    content:`
    <p>
      In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.
    </p>
    <p>
      In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.
    </p>
    <p>
      In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.
    </p>
    <p>
      In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.In this article we are going to talk about client side javascript.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>`
   }

};

function createTemplate (data) {
  var title = data.title;
  var heading = data.heading;
  var date = data.date;
  var content = data.content;

var htmlTemplate = `
<html>
 <head>
   <title>
     ${title}
   </title>
     <meta name="viewpoint" content="width=device-width, initial-scale=1" />
     <link href="/ui/style.css" rel="stylesheet" />
   <body>
     <div class="container">
       <div>
         <a href="/">Home</a>
       </div>
       <hr/>
       <h1>
         ${heading}
       </h1>
       <div>
         ${date.toDateString()}
       </div>

       <div>
         ${content}
       </div>

     </div>
   </body>
 </head>
</html>
`;
return htmlTemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req, res) {
   // Maka a select request
   // Return a response with the results
   pool.query('SELECT *  FROM test', function(err, result) {
       if (err) {
           res.status(500).send(err.toString());
       }else {
           res.send(JSON.stringify(result.rows));
       }
   });
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) { // URL: /submit-name?name=Elliot
    // Get the name from the request
    var name = req.query.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/articles/:articleName', function (req, res) {
//  articleName == article-one
//  articles[articleName] == {} content object for article-one

  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(404).send('Article not found');
          } else {
              articleData = result.rows[0];
              res.send(createTemplate(articleData));
          }
      }
  });
});

app.get('/ui/background.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'background.jpg'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/home.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/vini.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vini.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
