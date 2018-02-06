var url = "https://www.googleapis.com/youtube/v3/videospart=statistics&id=0RLMAoanOVE&key=AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw";
var likes;
$.getJSON(url,
    function(response){
        likes = response.data.items[0].statistics.likeCount;
        alert(likes);
});
