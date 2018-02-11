function GetYoutubeData(w){
	var currentVid = "";
	var vidUrl = "";
	var appendElement;
	currentVid = "vid_" + w + "_likes";
	appendElement = document.getElementById(currentVid);
	vidUrl = document.getElementById("vid_" + w).getAttribute("data-youtube");
	var matches = vidUrl.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || vidUrl.match(/^http:\/\/youtu\.be\/([^?]+)/i);
	if (matches) vidUrl = matches[1];
	if (vidUrl.match(/^[a-z0-9_-]{11}$/i) === null) {
		$("<p style='color: #F00;'>Unable to parse Video ID/URL.</p>").appendTo(currentVid);
		return;
	}
	$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
		key: "AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
		part: "statistics",
		id: vidUrl
	},function(data){
		var r = data.items[0].statistics.likeCount;
		if(r == null) r = 34;
		appendElement.innerHTML = r;
	});
}
function GetChannelStats(){
	var appendElement = document.getElementById("subscribe_button");
	$.getJSON("https://www.googleapis.com/youtube/v3/channels", {
		key: "AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
		part: "statistics",
		id: "UCNGt4x8CYzKLCUGlfe-TQkg"
	},function(data){
		var r = data.items[0].statistics.subscriberCount;
		appendElement.innerHTML += " " + r;
		var y = data.items[0].statistics.viewCount;
		var appendElement2 = document.getElementById("total_views");
		appendElement2.innerHTML += " Total Channel Views = " + y + "!";
	});
}
function GetNoVids(){
	var vidNo = 1;
	var exit = false;
	var currentVid = "";
	do{
		currentVid = "vid_" + vidNo + "_likes";
		var getElement = document.getElementById(currentVid);
		if(getElement != null) vidNo++;
		else exit = true;
	}while(exit == false);
	return vidNo;
}
