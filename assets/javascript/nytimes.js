//define selectors
let searchString = $(`#search-string`);
let startDate = $(`start-date`);
let endDate = $(`#end-date`);
let articleNum = $(`#article-num`);
let searchBtn = $(`#search`);
let topArticlesDiv = $(`#top-articles`);

let key = `8bf813cc29984257874f07be0ea2327f`;

let article = {

    getData: function () {
        // Built by LucyBot. www.lucybot.com
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': key,
            'q': searchString.val(),
            'begin_date': startDate.val(),
            'end_date': endDate.val(),
            'page': 1

        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            makeArticle(result.docs);
        }).fail(function (err) {
            throw err;
        });
    },

    makeArticle: function(articles){
        console.log(articles);
        // articles.map(function(currentArticle){
        //     console.log(currentArticle);

        // });

        for(let i = 1 ; i <= articleNum.val(); i++ ){
            console.log(articles[i]);
            console.log(articles[i].headline.main);
            let headline = articles[i].headline.main;
            console.log(articles[i].web_url);
            let articleUrl = articles[i].web_url;
            let newDiv = $(`<div>`);
            newDiv.html(`
            <span>${i}</span><span>${headline}</span><span>${articleUrl}</span>
            `);
            topArticlesDiv.append(newDiv);
        }
    }
}

$(document).ready(function () {
    searchBtn.click(function () {
        console.log(searchString.val());
        article.getData();
    })
})