
$("#ingredients").on("click", function (event) {
    event.preventDefault();

    var searchBar = $("#food").val();
    var queryURL = "https://api.edamam.com/search?q=" + searchBar + "&app_id=86916448&app_key=db5527650c463d5a08d5821e727b2b08	&from=0&to=6";
    // var queryURL = "https://api.spoonacular.com/recipes/findbyIngredients?ingredients=" + searchBar + "&apiKey=df8d7ec54f344b5fa40fa028efe7f6e3&number=10";
    var queryURLVideo = "https://youtube-search1.p.rapidapi.com/" + searchBar + "recipe"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 0; i < response.hits.length; i++) {
            var recipe = $("<div class='column is-one-third image is-text-centered'></div>");

            var title = $("<h2 class='title is-5 has-text-centered'>")
            title.text(response.hits[i].recipe.label)
            $(recipe).append(title);

            var formButton = $(`
            <form target="_blank" action=${response.hits[i].recipe.url} method="get" class="has-text-centered">
                <button class="button is-dark is-outlined">View Recipe</button>
            </form>
            `);
            $(recipe).append(formButton);

            var images = $("<img id='recipeImages'>");
            images.attr("src", response.hits[i].recipe.image)
            $(recipe).append(images);
          

            $(".newDivs").append(recipe);
            
            $("#ingredients").click(function () {
            $(".newDivs").empty();
        })
        }
       
    });

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://youtube-search1.p.rapidapi.com/" + searchBar + "recipes&format=5",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
            "x-rapidapi-key": "0fd50d851fmsh7f2d3e4acffe9dbp1d2318jsn39dbd8c577e9"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        for(var i=0; i < 10; i++) {
            var carouselDivEl = $(`
            <div class="slide" style="float: left" style="width: 33.3%" style="margin-left: 10px;">
                <iframe class="video" src="https://www.youtube.com/embed/${response.items[i].id.videoId}"></iframe>
            </div>
            `)
            $("#videoCarousel").append(carouselDivEl)

        }

        $("#videoCarousel").slick({
            infinite: true, 
            slidesToShow: 4,
            dots: true,
         //   slidesToScroll: 6,
        })
    });


});

// set carousel 



// set local storage
$("#ingredients").on("click", function (events) {
    var foodIngredients = $("#food").val();
    localStorage.setItem("foodIngredients", foodIngredients)
})
