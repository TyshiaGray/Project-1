
$("#ingredients").on("click", function (event) {
    event.preventDefault();

    var searchBar = $("#food").val();
    var queryURL = "https://api.edamam.com/search?q=" + searchBar + "&app_id=86916448&app_key=db5527650c463d5a08d5821e727b2b08	&from=0&to=6";
    // var queryURL = "https://api.spoonacular.com/recipes/findbyIngredients?ingredients=" + searchBar + "&apiKey=df8d7ec54f344b5fa40fa028efe7f6e3&number=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 0; i < response.hits.length; i++) {
            var recipe = $("<div class='column is-one-third'></div>");

            var title = $("<h2>")
            title.text(response.hits[i].recipe.label)
            $(recipe).append(title);

            var images = $("<img>");
            images.attr("src", response.hits[i].recipe.image)
            $(recipe).append(images);

            var formButton = $(`
            <form target="_blank" action=${response.hits[i].recipe.url} method="get" >
                <button class="">View Recipe</button>
            </form>
            `);
            $(recipe).append(formButton);

            $(".newDivs").append(recipe);
        }

    })

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://youtube-search1.p.rapidapi.com/" + searchBar + "recipe",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
            "x-rapidapi-key": "5c525ff9dbmshcd1c1d67651b498p15b862jsnca5db7a0546a"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});

$(document).ready(function () {


    $('.center').slick({
        
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



});
