$(function(){
  function e(e){
    if(0!=e.length&&0==e.children("iframe").length){
      var i=e.data("youtube");
      e.prepend('<iframe src="https://www.youtube.com/embed/'+i+'?enablejsapi=1&rel=0" frameborder="0" allowfullscreen></iframe>')
    }
  }
  function i(e,i){
    var n=e[0].contentWindow;
    n.postMessage('{"event":"command","func":"'+i+'","args":""}',"*")
  }
  $("#timeline").on("inview","section.card",function(i,n){
    n&&this==i.target&&($(this).addClass("inviewed"),e($(this).find(".movie")))
  }),
  $("#timeline").on("click",".play",function(){
    $(this).fadeOut(),$(this).parent().children("img").fadeOut();
  var e=$(this).parent().children("iframe");i(e,"playVideo"),e.fadeIn(1e3)
})
});
