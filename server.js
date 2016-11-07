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

  pool.query("SELECT * FROM article WHERE article_link = $1", [req.params.articleName], function (err, result) {
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
