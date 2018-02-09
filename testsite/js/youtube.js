function GetVidData(vidUrl){

  var url = ("https://www.googleapis.com/youtube/v3/videospart=statistics&id=" + vidUrl + "&key=AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw&callback=false&part=statistics");
  url = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw&part=statistics&id=" + vidUrl;
var likes;
//alert("Got vid url");
$.getJSON(url,
    function(response){
      //alert("in other bit of code");
        likes = response.data.items[0].statistics.likeCount;
        alert(likes);
        alert("made it passed code " + likes + "..." + response);
});

}
