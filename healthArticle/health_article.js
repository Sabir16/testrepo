var xhr = new XMLHttpRequest();
var url = './health_article.json';
// Définition de l'url et configuration de la requete
xhr.open('GET' , url , true);
// Spécification du type de réponse
xhr.responseType = 'json';

// Gestion  de l'événement 'onload'
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

// Itération à travers les articles et construction de HTML
articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Moyens d\'atteindre';

    var waysList = document.createElement('ul');

    article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Avantages :';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);
    
    articlesDiv.appendChild(articleDiv);
});
}
// Envoi de la requete
xhr.send();
