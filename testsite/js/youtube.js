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
											var r = data.items[0].statistics.viewCount;
											if(r == null) r = 34;
											alert("The value of r is: " + r);
											appendElement.innerHTML = r;
										});
				//}
}
