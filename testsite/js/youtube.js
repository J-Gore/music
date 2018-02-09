function GetVidData(vidUrl){

  /*var url = ("https://www.googleapis.com/youtube/v3/videospart=statistics&id=" + vidUrl + "&key=AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw&callback=false&part=statistics");
  url = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw&part=statistics&id=" + vidUrl;
var likes;
//alert("Got vid url");
$.getJSON(url,
    function(response){
      //alert("in other bit of code");
        likes = response.data.items[0].statistics.likeCount;
        alert(likes);
        alert("made it passed code " + likes + "..." + response);
});*/
				$("#video-data-1, #video-data-2").empty();
				var videoid = vidUrl;
				var matches = videoid.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || videoid.match(/^http:\/\/youtu\.be\/([^?]+)/i);
				if (matches) {
					videoid = matches[1];
				}
				if (videoid.match(/^[a-z0-9_-]{11}$/i) === null) {
					$("<p style='color: #F00;'>Unable to parse Video ID/URL.</p>").appendTo("#video-data-1");
					return;
				}
				$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
					key: "AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
					part: "snippet,statistics",
					id: videoid
				}, function(data) {
					if (data.items.length === 0) {
						$("<p style='color: #F00;'>Video not found.</p>").appendTo("#video-data-1");
						return;
					}
					$("<img>", {
						src: data.items[0].snippet.thumbnails.medium.url,
						width: data.items[0].snippet.thumbnails.medium.width,
						height: data.items[0].snippet.thumbnails.medium.height
					}).appendTo("#video-data-1");
					$("<h1></h1>").text(data.items[0].snippet.title).appendTo("#video-data-1");
					$("<p></p>").text(data.items[0].snippet.description).appendTo("#video-data-1");
					$("<li></li>").text("Published at: " + data.items[0].snippet.publishedAt).appendTo("#video-data-2");
					$("<li></li>").text("View count: " + data.items[0].statistics.viewCount).appendTo("#video-data-2");
					$("<li></li>").text("Favorite count: " + data.items[0].statistics.favoriteCount).appendTo("#video-data-2");
					$("<li></li>").text("Like count: " + data.items[0].statistics.likeCount).appendTo("#video-data-2");
					$("<li></li>").text("Dislike count: " + data.items[0].statistics.dislikeCount).appendTo("#video-data-2");
				}).fail(function(jqXHR, textStatus, errorThrown) {
					$("<p style='color: #F00;'></p>").text(jqXHR.responseText || errorThrown).appendTo("#video-data-1");
				});

}
