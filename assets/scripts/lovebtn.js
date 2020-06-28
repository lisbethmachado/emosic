/* creat love btn */
$(function() {
    $("#btn4").on("click", function() {

        var love = "Taylor-Swift"
        var apiKey = "376609-emosic-T64LATMW";
        var queryURL =
            "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + love + "&k=" + apiKey + "&verbose=1";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response) {
            $("#suggestions").removeClass("hide");
            $("#artistwell").empty();
            // var artist = response.Similar.Info[0]
            // $("#empty").text(artist.Name)
            // $("#teaser").text(artist.wTeaser)
            // $("#youtube").empty();
            // $("#wiki").empty();
            // $("#wiki").append('<a href="' + artist.wUrl + '">' + artist.wUrl + '</a>')
            // $("#youtube").append('<a href="' + artist.yUrl + '">' + artist.yUrl + '</a>')

            for (var i = 0; i < 6; i++) {
                console.log(i)
                var Artists = (response.Similar.Results[i])


                // $('#artistwell').append(artistwell);
                $("#artistwell").append("<h1 >" + Artists.Name + "</h1>");
                $("#artistwell").append("<p>" + Artists.wTeaser + "</p>");
                $("#artistwell").append("<a href='" + Artists.wUrl + "'>" + Artists.wUrl + "</a>");
                $("#artistwell").append("<div>");
                $("#artistwell").append("<a  href='" + Artists.yUrl + "'>" + Artists.yUrl + "</a>");
                $("#artistwell").append("<div>");
                $("#artistwell").append("<iframe width='" + 420 + "'height='" + 315 + "'src='" + Artists.yUrl + "'></iframe>");

                if (i > 6) {
                    $("#artistwell").empty();


                }





            }

        });
        $('.scrollspy').scrollSpy();
    });
})

/* smooth scroll */
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});