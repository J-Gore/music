function GetYoutubeData(w){
	var c=document.getElementById("vid_"+w);
	var v=c.getElementsByClassName("movie")[0].getAttribute("data-youtube");
	var matches=v.match(/^http:\/\/www\.youtube\.com\/.*[?&]v=([^&]+)/i)||v.match(/^http:\/\/youtu\.be\/([^?]+)/i);
	if(matches)v=matches[1];
	$.getJSON("https://www.googleapis.com/youtube/v3/videos",{
		key:"AIzaSyD6XBI5r8UWTPCtF00EwJOb5ZlxunvxYTw",
		part:"statistics,snippet",
		id:v
	},function(data){
		var r=data.items[0].statistics.likeCount;
		var p=data.items[0].snippet.thumbnails.maxres.url;
		if(r==null)r=34;
		c.getElementsByClassName("zilla-likes-count")[0].innerHTML=r;
		c.getElementsByTagName("img")[0].setAttribute("data-src",p);
		var d=data.items[0].snippet.publishedAt;
		var x=d.substring(0,10);
		var s=x.split('-');
		var z=s[0]+"/"+s[1]+"/"+s[2];
		c.getElementsByClassName("time")[0].innerHTML=z;
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
	var v=1;
	var e=false;
	var c="";
	do{
		c="vid_"+v+"_likes";
		var g=document.getElementById(c);
		if(g!=null)v++;
		else e=true;
	}while(e==false);
	return v;
}
