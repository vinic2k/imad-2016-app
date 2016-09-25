<<<<<<< HEAD
var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
         ${date}
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

app.get('/:articleName', function (req, res) {
//  articleName == article-one
//  articles[articleName] == {} content object for article-one
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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

app.get('/ui/vini.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vini.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
=======
var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
         ${date}
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

app.get('/:articleName', function (req, res) {
//  articleName == article-one
//  articles[articleName] == {} content object for article-one
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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

app.get('/ui/vini.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vini.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
>>>>>>> 0a84bbdfff7bddf31f52a6a099154d09f8f6502c
