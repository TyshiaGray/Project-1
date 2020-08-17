
   $("#ingredients").on("click", function (event) {
        event.preventDefault();
        

        var delivery = $("#food").val();
        var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + delivery + "&apiKey=67db22d20b864a55b4e224c7af37816f&number=5";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://youtube-search1.p.rapidapi.com/katy-perry",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
                "x-rapidapi-key": "1d694ca799mshfaf38605be0fb91p13aa9fjsn05eb2ac65e20"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    });
