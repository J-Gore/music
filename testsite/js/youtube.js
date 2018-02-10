function GetVidData(w){
var vidNo = 1;
var exit = false;
var currentVid = "";
				var vidUrl = "";
				var appendElement;
				//for(w = 1; w < vidNo; w++){
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
				//}
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
