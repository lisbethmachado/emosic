// When the user presses the happy button
//then t
$("#btn1").on("click", function(){

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=SZA&k=376608-SaraRose-3R6F0LXH&verbose=1",
    method: "GET",
  }).then(function (response) {
      console.log(response)
      var SZA = response.Similar.Info[0]
      $("#empty").text(SZA.Name)
      $("#teaser").text(SZA.wTeaser)
      $("#wiki").empty()
      $("#youtube").empty()
      $("#wiki").append( "<a href='" + SZA.wUrl + "'>" + SZA.wUrl + "</a>");
      $("#youtube").append( "<a href='" + SZA.yUrl + "'>" + SZA.yUrl + "</a>");
      console.log(SZA.wUrl)
  })})
  //.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");