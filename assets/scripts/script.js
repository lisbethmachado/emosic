// When the user presses the happy button
//then t
$(function() {
    $("#btn1").on("click", function() {

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=SZA&k=376608-SaraRose-3R6F0LXH&verbose=1",
            method: "GET",
        }).then(function(response) {
            $("#suggestions").removeClass("hide");
            $("#artistwell").empty();
            var SZA = response.Similar.Info[0]





            // function to render multiple artists
            for (var i = 0; i < 6; i++) {
                console.log(i)
                var Artists = (response.Similar.Results[i])

                console.log(Artists)


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
    });
})