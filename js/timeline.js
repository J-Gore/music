$(function(){
  function LoadVideo(movie){ //recieves movie class containing youtube video
    if(0!=movie.length&&0==movie.children("iframe").length){ //checks there is elements contained within the movie div and that none of them are a youtube video already loaded in
      var vidUrl=movie.data("youtube"); //gets Url from movie div tag's youtube attribute
      movie.prepend('<iframe src="https://www.youtube.com/embed/'+vidUrl+'?enablejsapi=1&rel=0" frameborder="0" allowfullscreen></iframe>')//inserts the video into the item frame
    }
  }
  function PlayVideo(videoFrame,command){
    var contentFrame=videoFrame[0].contentWindow;//gets the content window of the iframe containing the video
    contentFrame.postMessage('{"event":"command","func":"'+command+'","args":""}',"*") //sends command to youtube video instructing it to begin playing
  }
  $("#timeline").on("inview","section.card",function(eventTrigger,n){ //when section card comes into view
    n&&this==eventTrigger.target&&($(this).addClass("inviewed"),LoadVideo($(this).find(".movie"))) //change class to inviewed on movie, 'this' is the section card
  }),
  $("#timeline").on("click",".play",function(){ //when the div with the play class is clicked in the timeline...
    $(this).fadeOut(),$(this).parent().children("img").fadeOut(); //fades out the images above the video and fades in video + plays
  var videoFrame=$(this).parent().children("iframe"); //gets the parent(movie class)'s child called iframe which was generated upon being inview
  PlayVideo(videoFrame,"playVideo"),videoFrame.fadeIn(1e3) //calls play video and fades the video in
}),
$("#contents").on("click",".account",function(){
  window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
});
$("#contents").on("click",".account",function(){
  window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
});
$(".scrollBtn").click(function() {
  switch(this.id){
    case "2013Scroll":
    console.log("2013");
    break;
    case"2016Scroll":
    console.log("2016");
    break;
    case("2017Scroll"):
    console.log("2017");
    break;
    case("2018Scroll"):
    console.log("2018");
    break;
  }
  window.scroll({
    //top: $('#y2013').offset().top,
    top: 0,
    left: 0,
    behavior:'smooth'
  });
});
});

