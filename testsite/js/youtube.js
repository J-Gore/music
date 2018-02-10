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
				var vidUrl = "";
				var appendElement;
				for(w = 1; w < vidNo; w++){
						currentVid = "vid_" + w + "_likes";
						appendElement = document.getElementById(currentVid);
						vidUrl = document.getElementById("vid_" + w).getAttribute("data-youtube");
						var matches = vidUrl.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i) || vidUrl.match(/^http:\/\/youtu\.be\/([^?]+)/i);
						if (matches) {
							vidUrl = matches[1];
						}
						if (vidUrl.match(/^[a-z0-9_-]{11}$/i) === null) {
							$("<p style='color: #F00;'>Unable to parse Video ID/URL.</p>").appendTo(currentVid);
							return;
						}
						alert("Entering Promise");
									var promise = new Promise(function(resolve,reject){
										$.getJSON("https://www.googleapis.com/youtube/v3/videos", {
											key: "AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
											part: "statistics",
											id: vidUrl
										},function(data){
											alert(data.items[0].statistics.viewCount);
											if(data != null) resolve(data);
											else reject("JSON Retrieval Error");
										});
									})
									promise.then(function(resolve) {
										alert(resolve.items[0].statistics.viewCount + " ww");
								if (resolve.items.length === 0) {
									$("<p style='color: #F00;'>Video not found.</p>").appendTo(currentVid);
									return;
								}
								var r = resolve.items[0].statistics.likeCount;
								if(r == null){
									r = 34;
								}
								//$("<li></li>").text("View count: " + data.items[0].statistics.viewCount).appendTo("#video-data-2");
								appendElement.innerHTML = r;
								//$("").text("Like count: " + r).appendTo(currentVid);
							})
							promise.fail(function(jqXHR, textStatus, errorThrown) {
								$("<p style='color: #F00;'></p>").text(jqXHR.responseText || errorThrown).appendTo(currentVid);
							});
				}
}
