$(function () {
    $("#btn2").on("click", function () {
        $("#suggestions").removeClass("hide");
        console.log("btn2")

        var sad = "linkin-park"
        var apiKey = "376609-emosic-T64LATMW";
        var queryURL =
            "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + sad + "&k=" + apiKey + "&verbose=1";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            var artist = response.Similar.Info[0]
            $("#empty").text(artist.Name)
            $("#teaser").text(artist.wTeaser)
            $("#youtube").empty();
            $("#wiki").empty();
            $("#wiki").append('<a href="' + artist.wUrl + '">' + artist.wUrl + '</a>')
            $("#youtube").append('<a href="' + artist.yUrl + '">' + artist.yUrl + '</a>')

        });
    });
})