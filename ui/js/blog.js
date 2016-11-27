function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) {
                var content = '<ul class="container">';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<li>
                    <a href="/articles/${articleData[i].link}"><h1>${articleData[i].heading}<small> By Vineesh KP</small></h1></a>
                    (${articleData[i].date.split('T')[0]})
                    <br><p>${articleData[i].brief}</p>
                    <br><button class="btn btn-info"><a href="/articles/${articleData[i].link}">Read more</a></button></li><hr>`;
                }
                content += "</ul>"
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };

    request.open('GET', '/get-articles', true);
    request.send(null);
}

// Now this is something that we could have directly done on the server-side using templating too!
loadArticles();
