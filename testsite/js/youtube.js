function GetYoutubeData(w){
	var vidUrl="";
	var c=document.getElementById("vid_"+w);
	vidUrl=c.getElementsByClassName("movie").getAttribute("data-youtube");
	var matches=vidUrl.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i)||vidUrl.match(/^http:\/\/youtu\.be\/([^?]+)/i);
	if(matches)vidUrl=matches[1];
	$.getJSON("https://www.googleapis.com/youtube/v3/videos",{
		key:"AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
		part:"statistics,snippet",
		id:vidUrl
	},function(data){
		var r=data.items[0].statistics.likeCount;
		var p=data.items[0].snippet.thumbnails.maxres.url;
		if(r==null)r=34;
		c.getElementsByClassName("zilla-likes-count").innerHTML=r;
		c.getElementsByTagName("img")[0].setAttribute("data-src",p);
		var d=data.items[0].snippet.publishedAt;
		var x=d.substring(0,10);
		var s=x.split('-');
		var z=s[0]+"/"+s[1]+"/"+s[2];
		c.getElementsByClassName("time").innerHTML=z;
		
	});
}
function GetChannelStats(){
	$.getJSON("https://www.googleapis.com/youtube/v3/channels",{
		key:"AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
		part:"statistics",
		id:"UCNGt4x8CYzKLCUGlfe-TQkg"
	},function(data){
		var r=data.items[0].statistics.subscriberCount;
		document.getElementById("subscribe_button").innerHTML+=" "+r;
		var y=data.items[0].statistics.viewCount;
		document.getElementById("total_views").innerHTML+=" Total Channel Views: "+y+"!";
	});
}
function GetNoVids(){
	var vidNo=1;
	var exit=false;
	var currentVid="";
	do{
		currentVid="vid_"+vidNo+"_likes";
		var getElement=document.getElementById(currentVid);
		if(getElement!=null)vidNo++;
		else exit=true;
	}while(exit==false);
	return vidNo;
}
