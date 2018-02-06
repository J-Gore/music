function GetVidData(vidUrl){
  alert("Got vid url " + vidUrl);
  var url = ("https://www.googleapis.com/youtube/v3/videospart=statistics&id=" + vidUrl + "&key=AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw");
var likes;
$.getJSON(url,
    function(response){
        likes = response.data.items[0].statistics.likeCount;
        alert("in other bit of code");
        alert(likes);
});
}
