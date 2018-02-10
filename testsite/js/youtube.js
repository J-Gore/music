function GetVidData(){

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
	currentVid = "vid_" + vidNo + "_likes";
	var getElement = document.getElementById(currentVid);
	if(getElement != null){
		vidNo++;
	}else {
		exit = true;
	}
}while(exit == false);
alert(vidNo);
				var vidUrl = "";
				for(w = 1; w < vidNo; w++){
					currentVid = "vid_" + w + "_likes";
					alert("Entered For Loop");
					vidUrl = document.getElementById("vid_" + w).getAttribute("data-youtube");
					alert("Vid Url = " + vidUrl);
					var matches = vidUrl.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || vidUrl.match(/^http:\/\/youtu\.be\/([^?]+)/i);
					if (matches) {
						alert("Match Found");
						vidUrl = matches[1];
					}
					if (videoid.match(/^[a-z0-9_-]{11}$/i) === null) {
						$("<p style='color: #F00;'>Unable to parse Video ID/URL.</p>").appendTo(currentVid);
						alert("Getting JSON");
						return;
					}
					$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
						key: "AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
						part: "statistics",
						id: vidUrl
					}, function(data) {
						alert("Got JSON");
						if (data.items.length === 0) {
							$("<p style='color: #F00;'>Video not found.</p>").appendTo(currentVid);
							return;
						}
						alert("About to get r");
						var r = data.items[0].statistics.likeCount;
						alert(r);
						if(r == null){
							r = 34;
						}
						//$("<li></li>").text("View count: " + data.items[0].statistics.viewCount).appendTo("#video-data-2");
						$("<li></li>").text("Like count: " + r).appendTo(currentVid);
					}).fail(function(jqXHR, textStatus, errorThrown) {
						$("<p style='color: #F00;'></p>").text(jqXHR.responseText || errorThrown).appendTo(currentVid);
					});
				}
}
