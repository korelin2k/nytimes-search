//define selectors
let searchString = $(`#search-string`);
let startDate = $(`start-date`);
let endDate = $(`#end-date`);
let articleNum = $(`#article-num`);
let searchBtn = $(`#search`);

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
            makeArticle(result);
        }).fail(function (err) {
            throw err;
        });
    },

    makeArticle: function(articles){
        articles.map(function(currentArticle){
            console.log(currentArticle);
        })
    }
}

$(document).ready(function () {
    searchBtn.click(function () {
        console.log(searchString.val());
        article.getData();
    })
})