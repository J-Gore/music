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
var vidNo = 1;
var exit = false;
var currentVid = "";
do{
	currentVid = "#vid_" + vidNo + "_likes";
	var getElement = document.getElementById(currentVid);
	if(getElement != null){
		vidNo++;
	}else {
		exit = true;
	}
}while(exit == false);
alert(vidNo);
				$("#video-data-1, #video-data-2").empty();
				var dfrd2 = $.Deferred();
				var matches = videoid.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || videoid.match(/^http:\/\/youtu\.be\/([^?]+)/i);
				if (matches) {
					vidUrl = matches[1];
				}
				if (videoid.match(/^[a-z0-9_-]{11}$/i) === null) {
					$("<p style='color: #F00;'>Unable to parse Video ID/URL.</p>").appendTo("#video-data-1");
					return;
				}
				$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
					key: "AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
					part: "statistics",
					id: vidUrl
				}, function(data) {
					if (data.items.length === 0) {
						$("<p style='color: #F00;'>Video not found.</p>").appendTo("#video-data-1");
						return;
					}

					var r = data.items[0].statistics.likeCount;
					$("<li></li>").text("View count: " + data.items[0].statistics.viewCount).appendTo("#video-data-2");
					$("<li></li>").text("Like count: " + r).appendTo("#video-data-2");
				}).fail(function(jqXHR, textStatus, errorThrown) {
					$("<p style='color: #F00;'></p>").text(jqXHR.responseText || errorThrown).appendTo("#video-data-1");
				});

}
