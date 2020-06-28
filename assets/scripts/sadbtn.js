$(function() {
    $("#btn2").on("click", function() {

        var sad = "linkin-park"
        var apiKey = "376609-emosic-T64LATMW";
        var queryURL =
            "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + sad + "&k=" + apiKey + "&verbose=1";

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

$(function() {
    $("#btn3").on("click", function() {

        var mad = "slayer"
        var apiKey = "376609-emosic-T64LATMW";
        var queryURL =
            "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + mad + "&k=" + apiKey + "&verbose=1";

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