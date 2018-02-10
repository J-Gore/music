function GetVidData(){
var vidNo = 1;
var exit = false;
var currentVid = "";
do{
	currentVid = "vid_" + vidNo + "_likes";
	var getElement = document.getElementById(currentVid);
	if(getElement != null) vidNo++;
	else exit = true;
}while(exit == false);
				var vidUrl = "";
				var appendElement;
				for(w = 1; w < vidNo; w++){
					alert("Trying");
						currentVid = "vid_" + w + "_likes";
						appendElement = document.getElementById(currentVid);
						vidUrl = document.getElementById("vid_" + w).getAttribute("data-youtube");
						var matches = vidUrl.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || vidUrl.match(/^http:\/\/youtu\.be\/([^?]+)/i);
						if (matches) vidUrl = matches[1];
						if (vidUrl.match(/^[a-z0-9_-]{11}$/i) === null) {
							$("<p style='color: #F00;'>Unable to parse Video ID/URL.</p>").appendTo(currentVid);
							return;
						}
									var promise = new Promise(function(resolve,reject){
										$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
											key: "AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
											part: "statistics",
											id: vidUrl
										},function(data){
											if(data != null) resolve(data);
											else reject("JSON Retrieval Error");
										});
									});
									promise.then(function(resolve) {
										alert("First then. " + resolve);
										return resolve;
									});
									promise.then(function(resolve){
									alert("Second then. " + resolve);
									var someData = JSON.stringify(resolve);
									alert(someData);
								//var r = resolve.items[0].statistics.likeCount;
								var r = resolve["likeCount"];

								if(r == null) r = 34;
								alert("R = " + r);
								return r;
							});
							promise.then(function(r){
              alert("got r: " + r);

								//$("<li></li>").text("View count: " + data.items[0].statistics.viewCount).appendTo("#video-data-2");
								appendElement.innerHTML = r;
								//$("").text("Like count: " + r).appendTo(currentVid);
							});
				}
}
