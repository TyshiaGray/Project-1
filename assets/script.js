
$("#ingredients").on("click", function (event) {
    event.preventDefault();

    var searchBar = $("#food").val();
    var queryURL = "https://api.edamam.com/search?q=" + searchBar + "&app_id=86916448&app_key=db5527650c463d5a08d5821e727b2b08	&from=0&to=6";
    // var queryURL = "https://api.spoonacular.com/recipes/findbyIngredients?ingredients=" + searchBar + "&apiKey=df8d7ec54f344b5fa40fa028efe7f6e3&number=10";
    var queryURLVideo = "https://youtube-search1.p.rapidapi.com/" + searchBar + "recipe"

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);

    //     for (var i = 0; i < response.hits.length; i++) {
    //         var recipe = $("<div class='column is-one-third'></div>");

    //         var title = $("<h2 class='recipeTitle'>")
    //         title.text(response.hits[i].recipe.label)
    //         $(recipe).append(title);

    //         var images = $("<img class='recipeBox'>");
    //         images.attr("src", response.hits[i].recipe.image)
    //         $(recipe).append(images);

    //         var formButton = $(`
    //         <form target="_blank" action=${response.hits[i].recipe.url} method="get" >
    //             <button class="">View Recipe</button>
    //         </form>
    //         `);
    //         $(recipe).append(formButton);

    //         $(".newDivs").append(recipe);
    //     }

    // })

    // $.ajax({
    //     url: queryURLVideo,
    //     crossDomain: true,
    //     method: "GET"

    // }).done(function (data) {
    //     console.log(data)
        
    //     data.items.forEach(function (a, i) {
    //         var carouselDivEl = $(`
    //         <div class="slide" style="float: left" style="width: 33.3%" style="margin-left: 10px;">
    //             <iframe class="video" src=${a.snippet.thumbnails.high.url}></iframe>
    //         </div>
    //         `)
    //         $("#videoCarousel").append(carouselDivEl)
    //         // $("#slideURL" + i).attr('href', "https://www.youtube.com/watch?v=" + a.id.videoID);
    //         // $("#slideURL" + i).attr('src', a.snippet.thumbnails.high.url);
    //     })
    // }

    // );

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
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    //     for(var i=0; i < 6; i++) {
    //         var carouselDivEl = $(`
    //         <div class="slide" style="float: left" style="width: 33.3%" style="margin-left: 10px;">
    //             <iframe class="video" src="https://www.youtube.com/embed/v=${response.items[i].id.videoId}"></iframe>
    //         </div>
    //         `)
    //         $("#videoCarousel").append(carouselDivEl)

    //     }
    // });

    $.ajax({
        url: baseURL + path + apikey,
        crossDomain: true
    }).done(
        function (data) {
            data.items.forEach( (a, i) => {
                $("#iframe" + i).attr('src', "https://www.youtube.com/embed/" + a.id.videoId);
            })
        }
    );
});

// set carousel 
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


// set local storage
$("#ingredients").on("click", function (events) {
    var foodIngredients = $("#food").val();
    localStorage.setItem("foodIngredients", foodIngredients)
})
