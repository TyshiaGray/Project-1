// $(document).ready(function () {
//     var pos = 0,
//         slides = $('.slide'),
//         numOfSlides = slides.length;

//     function nextSlide() {
//         // `[]` returns a vanilla DOM object from a jQuery object/collection
//         slides[pos].video.stopVideo()
//         slides.eq(pos).animate({ left: '-100%' }, 500);
//         pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
//         slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
//     }

//     function previousSlide() {
//         slides[pos].video.stopVideo()
//         slides.eq(pos).animate({ left: '100%' }, 500);
//         pos = (pos == 0 ? numOfSlides - 1 : --pos);
//         slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
//     }

//     $('.left').click(previousSlide);
//     $('.right').click(nextSlide);
// })

// function onYouTubeIframeAPIReady() {
//     $('.slide').each(function (index, slide) {
//         // Get the `.video` element inside each `.slide`
//         var iframe = $(slide).find('.video')[0]
//         // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
//         slide.video = new YT.Player(iframe)
//     })
// }
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